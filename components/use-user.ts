'use client';
import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export type UserState = {
  user: User | null;
  loading: boolean;
  hasAccess: boolean;
};

// Session + entitlement hook. `hasAccess` reflects the paid entitlement,
// enforced server-side by RLS; this is only for showing locked/unlocked UI.
export function useUser(): UserState {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let active = true;
    if (!user) {
      setHasAccess(false);
      return;
    }
    supabase
      .from('entitlements')
      .select('has_access')
      .eq('user_id', user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (active) setHasAccess(Boolean(data?.has_access));
      });
    return () => {
      active = false;
    };
  }, [user]);

  return { user, loading, hasAccess };
}

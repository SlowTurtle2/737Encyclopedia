import { createClient } from '@supabase/supabase-js';

// These are the PUBLIC Supabase keys. The publishable/anon key is safe to
// ship in the client bundle; access to data is protected by Row Level
// Security in the database, never by hiding this key.
export const SUPABASE_URL = 'https://pguptjameckhmnfvxtxu.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY =
  'sb_publishable_zUM-dSc0ZEUnwpzWNwvCJQ_UgW6vc3x';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

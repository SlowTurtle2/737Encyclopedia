# Contrôle nocturne FCOM

## Objectif

Vérifier que les contenus pédagogiques techniques du site restent cohérents avec
les FCOM locaux autorisés. Ce contrôle est une détection d'écarts : il ne change
jamais le site, les documents FCOM, ni les données de production.

## Sources de référence

- `../FCOM/b737-800-fcom-revision-40 (1).pdf` — Boeing 737-800 NG, révision 40.
- `../FCOM/ryr-737-8200-fcom-rev-3b.pdf` — Boeing 737-8200 / MAX, révision 3b.

Ne pas utiliser une source externe, un souvenir de procédure, ni un autre type
d'avion pour trancher une divergence. Indiquer la révision et la page du FCOM
lorsqu'elles peuvent être établies.

## Périmètre du site

Examiner à chaque passage toutes les pages dont l'accueil affiche le statut
« Course available » :

- `app/systems/fuel/page.tsx`
- `app/systems/air-systems/page.tsx`
- `app/systems/anti-ice-rain/page.tsx`
- `app/systems/airplane-general-emergency-equipment-doors-windows/page.tsx`
- `app/systems/fire-protection/page.tsx`
- `app/systems/landing-gear/page.tsx`

Inclure leurs composants locaux lorsque ceux-ci portent des affirmations
techniques. Ignorer le texte de navigation, le marketing, les exemples fictifs
et la mise en forme.

## Méthode de revue

1. Relever les affirmations vérifiables : valeurs, unités, conditions,
   limitations, logique de système, voyants, séquences et différences NG/MAX.
2. Les rapprocher du chapitre FCOM correspondant, en conservant le contexte
   (version d'avion, phase de vol et conditions applicables).
3. Ne signaler un écart que lorsqu'il est étayé par un passage identifié du
   FCOM. Si le FCOM est ambigu ou introuvable, classer l'élément « à vérifier ».
4. Ne jamais modifier le contenu du site automatiquement.

## Rapport

Enregistrer un rapport daté dans `reports/fcom/` au format Markdown. Même sans
écart, créer un rapport bref qui indique les zones couvertes et les sources
utilisées.

Pour chaque écart, fournir :

- la page et l'affirmation du site ;
- la référence FCOM (avion, révision, chapitre et page si disponible) ;
- l'explication précise de l'écart ;
- une correction proposée, sans l'appliquer ;
- une priorité : **critique** (procédure/limitation), **importante** (logique ou
  valeur technique) ou **mineure** (terminologie/forme).

Pour tout écart critique ou important, ajouter un bloc **Prompt à saisir** : un
message concis prêt à envoyer à un agent de correction. Il doit citer le fichier,
l'affirmation à corriger, la référence FCOM, la modification attendue et
l'interdiction de modifier tout autre contenu.

En tête du rapport, fournir un résumé avec le nombre d'éléments par priorité et
les zones non vérifiées. Ne pas recopier de longs extraits du FCOM.

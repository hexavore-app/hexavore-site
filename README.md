# Le site d'Hexavore

La vitrine d'[Hexavore](https://github.com/hexavore-app/hexavore), sa politique de confidentialité et ses mentions légales. Publié sur `hexavore.app` par GitHub Pages.

## Trois règles

- **Aucun JavaScript chez le visiteur.** React sert à construire le site, pas à le faire tourner : chaque adresse devient une page HTML complète, et la construction échoue si un fichier `.js` reste dans `dist/`. Un test vérifie chaque page.
- **Rien qui ne vienne d'ailleurs.** Pas de statistiques, pas de cookie, pas de police chargée chez un tiers. Le site tient la promesse de l'application.
- **La politique de confidentialité n'est pas écrite ici.** Elle vit dans le dépôt de l'application, à côté du code qu'elle décrit (`confidentialite/fr.md`, `confidentialite/en.md`), et change dans la même pull request que le flux réseau qui l'exige. Le site la lit à chaque construction. Voir D124 dans `docs/11-decisions.md` du dépôt de l'application.

## Construire

Node 24, et une copie du dépôt de l'application — à côté de celle-ci sous le nom `hexavore`, ou ailleurs en le disant :

```
cp .env.example .env.local   # puis corriger HEXAVORE_APP_DIR si besoin
npm install
npm run dev        # serveur de développement
npm run check      # types et tests
npm run build      # site statique dans dist/
npm run preview    # sert dist/
```

Sans la politique, la construction s'arrête et dit où elle l'a cherchée.

## Organisation

| Dossier | Rôle |
|---|---|
| `src/routing` | Les adresses de chaque page dans chaque langue. Le seul moyen d'écrire un lien interne. |
| `src/i18n` | Tout ce que le site dit, par langue, et la typographie française. |
| `src/pages` | Les pages, et la table qui dit laquelle affiche quoi (`registry.tsx`). |
| `src/components` | Le cadre commun, l'hexagone des macros, les briques d'interface. |
| `src/policy` | La politique de l'application, convertie du Markdown à la construction. |
| `src/document` | Le document HTML, le plan du site, `robots.txt`. |
| `scripts/prerender.ts` | Écrit une page par adresse, puis retire le JavaScript. |

**Les composants portent la structure, les dictionnaires portent les mots.** Une page ne contient aucune phrase ; ajouter une langue, c'est ajouter un dictionnaire, et le compilateur refuse qu'il en manque une ligne. Ajouter une page, c'est l'ajouter à `routes.ts` et à `registry.tsx` — les deux tables sont exhaustives, et l'oubli de l'une ne compile pas.

Les couleurs, les rayons et la typographie sont ceux du design system de l'application (`docs/08-design-system.md`) : sombre par défaut, clair quand le système le demande, et les six teintes de macro ne servent qu'aux macros.

## Publier

La publication part d'elle-même à chaque poussée sur `main`, et chaque fois que la politique change dans le dépôt de l'application. Une fois pour toutes, il faut :

1. **GitHub Pages** : *Settings → Pages → Source : GitHub Actions*.
2. **Le domaine** : acheter `hexavore.app`, puis déclarer chez le registraire les enregistrements de GitHub Pages — `A` vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, `AAAA` vers `2606:50c0:8000::153` à `2606:50c0:8003::153`, et `www` en `CNAME` vers `hexavore-app.github.io`. Saisir `hexavore.app` dans *Settings → Pages → Custom domain*, puis cocher *Enforce HTTPS*. Un `.app` n'existe qu'en HTTPS : le site reste injoignable tant que GitHub n'a pas émis son certificat.
3. **Vérifier le domaine chez GitHub** (*organisation → Settings → Pages*), pour qu'un tiers ne puisse pas s'en emparer si le site est un jour désactivé.
4. **Le jeton de republication** : un jeton à accès fin, limité à `hexavore-site` avec le droit *Contents : read and write*, enregistré dans le dépôt de l'application sous le nom `SITE_DISPATCH_TOKEN`.
5. **Pour Google Drive, plus tard** : vérifier le domaine dans la Search Console de Google. La vérification de marque exige que l'accueil et la politique soient sur un domaine prouvé.

## Licence

Le code est sous [GPL-3.0](LICENSE), comme celui de l'application. Les textes et les images sont sous [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr). La police Inter est sous SIL Open Font License 1.1.

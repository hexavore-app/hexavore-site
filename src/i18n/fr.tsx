import { href } from '../routing/routes.ts'
import { site } from '../site.ts'
import type { Dictionary } from './dictionary.ts'

export const fr: Dictionary = {
  languageName: 'Français',
  skipToContent: 'Aller au contenu',
  homeLinkLabel: 'Hexavore, accueil',
  nav: {
    header: 'Langue et code source',
    footer: 'Pages du site',
    privacy: 'Confidentialité',
    legal: 'Mentions légales',
    source: 'Code source',
  },
  footer: {
    licenses: (
      <>
        Code sous licence <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</a>. Textes et images sous
        licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr">CC BY-SA 4.0</a>.
      </>
    ),
    credits: <>Données nutritionnelles : table CIQUAL 2025 de l’ANSES et Open Food Facts.</>,
  },

  home: {
    meta: {
      title: 'Hexavore, suivi alimentaire libre pour Android',
      description:
        'Notez ce que vous mangez en quelques secondes : code-barres, photo, recherche ou simple phrase. Six compteurs, sans compte, sans publicité, sans télémétrie.',
    },
    hero: {
      eyebrow: 'Suivi alimentaire pour Android',
      title: 'Hexavore',
      lead: 'Notez ce que vous mangez en quelques secondes. Six compteurs, et rien d’autre : pas de compte, pas de publicité, pas de télémétrie.',
      status: 'En développement, pas encore publiée.',
      primaryAction: 'Suivre le projet sur GitHub',
      secondaryAction: 'Ce qui quitte votre téléphone',
    },
    entry: {
      title: 'Quatre façons de noter un repas',
      intro:
        'Toutes aboutissent au même écran de validation, déjà rempli : valider coûte un geste, corriger aussi.',
      modes: {
        barcode: {
          title: 'Scanner un code-barres',
          body: 'La fiche vient d’Open Food Facts. Scannée une fois, elle reste disponible hors ligne.',
        },
        photo: {
          title: 'Photographier l’assiette',
          body: 'Un modèle d’IA reconnaît les aliments et leurs quantités ; les valeurs nutritionnelles viennent de bases publiques, pas de sa mémoire.',
        },
        search: {
          title: 'Chercher un aliment',
          body: '3 484 aliments de la table CIQUAL, hors ligne, dès la deuxième lettre. « creme brulee » trouve « crème brûlée ».',
        },
        sentence: {
          title: 'Décrire en une phrase',
          body: '« Deux œufs, une tranche de pain et un verre de jus d’orange. »',
        },
      },
    },
    counters: {
      title: 'Six compteurs, une figure',
      intro:
        'L’hexagone qui donne son nom à l’application : un quartier par compteur, rempli depuis le centre. Le contour marque l’objectif du jour.',
      names: {
        calories: 'Calories',
        protein: 'Protéines',
        fiber: 'Fibres',
        carbs: 'Glucides',
        sugars: 'Sucres',
        fat: 'Lipides',
      },
      figureLabel: 'L’hexagone des six compteurs, sur une journée d’exemple.',
    },
    features: {
      title: 'Ce qu’elle fait',
      items: [
        {
          title: 'Un objectif à votre mesure',
          body: 'Âge, taille, poids, activité, poids visé et échéance : six objectifs quotidiens calculés, modifiables à la main à tout moment.',
        },
        {
          title: 'Toujours corrigeable',
          body: 'Chaque ligne du journal reste modifiable : quantité, valeurs, aliment. Rien n’est figé.',
        },
        {
          title: 'La journée d’un coup d’œil',
          body: 'Ce qu’il reste à manger, plat par plat, sur un seul écran.',
        },
        {
          title: 'Un historique qui se lit',
          body: 'Un calendrier où chaque jour montre l’atteinte de ses objectifs, consultable et modifiable.',
        },
        {
          title: 'Un objectif qui suit la réalité',
          body: 'Chaque semaine, votre poids réel est comparé à la trajectoire visée. L’application propose un ajustement ; vous décidez.',
        },
        {
          title: 'Vos données restent chez vous',
          body: 'Tout est stocké sur le téléphone. Vous les exportez dans un fichier lisible quand vous le voulez.',
        },
      ],
    },
    promises: {
      title: 'Ce qu’elle ne fait pas',
      items: ['Pas de compte.', 'Pas de serveur.', 'Pas de publicité.', 'Pas d’abonnement.', 'Pas de télémétrie.'],
      body: 'L’IA est facultative. Si vous vous en servez, la requête part de votre téléphone avec votre propre clé, directement chez le fournisseur que vous avez choisi : le projet ne voit rien passer.',
      link: 'Tout ce qui quitte votre téléphone, dans le détail',
    },
    openSource: {
      title: 'Libre, et sourcée',
      body: (
        <>
          Le <a href={site.repository}>code de l’application</a> est public, sous licence GPL-3.0. Les valeurs
          nutritionnelles viennent de deux sources ouvertes, créditées dans l’application :
        </>
      ),
      sources: [
        <>
          <a href="https://ciqual.anses.fr">Table CIQUAL 2025</a> de l’ANSES, sous Licence Ouverte Etalab 2.0
        </>,
        <>
          <a href="https://world.openfoodfacts.org">Open Food Facts</a>, par ses contributeurs, sous licence
          ODbL 1.0
        </>,
      ],
    },
    disclaimer:
      'Hexavore est un outil de suivi personnel. Ce n’est pas un dispositif médical et il ne remplace pas l’avis d’un professionnel de santé.',
  },

  privacy: {
    meta: {
      title: 'Politique de confidentialité · Hexavore',
      description:
        'Ce que l’application Hexavore et ce site font de vos données, et ce qui quitte votre téléphone.',
    },
    site: {
      title: 'Ce site',
      paragraphs: [
        <>
          {site.origin.replace('https://', '')} est un site statique hébergé par GitHub Pages. Il ne dépose aucun
          cookie, ne mesure pas son audience, n’exécute aucun JavaScript et ne charge rien depuis un autre site,
          ses polices comprises.
        </>,
        <>
          Comme pour toute page web, l’hébergeur voit l’adresse IP des visiteurs : GitHub la conserve pour des raisons
          de sécurité, selon <a href={site.host.privacy}>sa déclaration de confidentialité</a>.
        </>,
      ],
    },
  },

  legal: {
    meta: {
      title: 'Mentions légales · Hexavore',
      description: 'Éditeur, hébergeur et licences du site d’Hexavore.',
    },
    title: 'Mentions légales',
    sections: [
      {
        title: 'Éditeur',
        paragraphs: [
          site.publisher === null ? (
            <>
              Ce site est édité à titre non professionnel par une personne physique qui, comme la loi pour la
              confiance dans l’économie numérique le permet, ne rend pas publique son identité.
            </>
          ) : (
            <>Ce site est édité à titre non professionnel par {site.publisher}.</>
          ),
          <>
            Contact : <a href={`mailto:${site.contact}`}>{site.contact}</a>
          </>,
        ],
      },
      {
        title: 'Hébergement',
        paragraphs: [
          <>
            {site.host.name}
            <br />
            {site.host.address}
            <br />
            {site.host.phone}
            <br />
            <a href={site.host.url}>github.com</a>
          </>,
        ],
      },
      {
        title: 'Propriété intellectuelle',
        paragraphs: [
          <>
            Le code de l’application Hexavore et celui de ce site sont publiés sous licence{' '}
            <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</a>. Les textes et les images de ce site sont
            publiés sous licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr">CC BY-SA 4.0</a>.
          </>,
          <>
            La police Inter, de Rasmus Andersson, est distribuée sous{' '}
            <a href="https://openfontlicense.org">SIL Open Font License 1.1</a>.
          </>,
        ],
      },
      {
        title: 'Données personnelles',
        paragraphs: [
          <>
            Ni ce site ni l’application ne collectent de données personnelles. Le détail est dans la{' '}
            <a href={href('privacy', 'fr')}>politique de confidentialité</a>.
          </>,
        ],
      },
    ],
  },

  notFound: {
    title: 'Page introuvable',
    body: 'Cette adresse ne mène à aucune page.',
    homeLink: 'Revenir à l’accueil',
  },
}

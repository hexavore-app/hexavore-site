import { href } from '../routing/routes.ts'
import { site } from '../site.ts'
import type { Dictionary } from './dictionary.ts'

export const en: Dictionary = {
  languageName: 'English',
  skipToContent: 'Skip to content',
  homeLinkLabel: 'Hexavore, home',
  nav: {
    header: 'Language and source code',
    footer: 'Site pages',
    privacy: 'Privacy',
    legal: 'Legal notice',
    source: 'Source code',
  },
  footer: {
    licenses: (
      <>
        Code under the <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</a> license. Text and images under
        the <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY-SA 4.0</a> license.
      </>
    ),
    credits: <>Nutrition data: the ANSES CIQUAL 2025 table and Open Food Facts.</>,
  },

  home: {
    meta: {
      title: 'Hexavore — open-source food tracking for Android',
      description:
        'Log what you eat in seconds: barcode, photo, search or a plain sentence. Six counters, no account, no ads, no telemetry.',
    },
    hero: {
      eyebrow: 'Food tracking for Android',
      title: 'Hexavore',
      lead: 'Log what you eat in seconds. Six counters, and nothing else: no account, no ads, no telemetry.',
      status: 'In development — not released yet.',
      primaryAction: 'Follow the project on GitHub',
      secondaryAction: 'What leaves your phone',
    },
    entry: {
      title: 'Four ways to log a meal',
      intro: 'They all lead to the same review screen, already filled in: confirming takes one tap, and so does fixing.',
      modes: {
        barcode: {
          title: 'Scan a barcode',
          body: 'The product comes from Open Food Facts. Once scanned, it stays available offline.',
        },
        photo: {
          title: 'Photograph the plate',
          body: 'An AI model recognizes the foods and their quantities; the nutrition values come from public databases, not from its memory.',
        },
        search: {
          title: 'Search for a food',
          body: '3,484 foods from the French CIQUAL table, offline, from the second letter you type.',
        },
        sentence: {
          title: 'Describe it in a sentence',
          body: '“Two eggs, a slice of bread and a glass of orange juice.”',
        },
      },
    },
    counters: {
      title: 'Six counters, one figure',
      intro:
        'The hexagon the app is named after: one wedge per counter, filled from the center. The outline marks the day’s goal.',
      names: {
        calories: 'Calories',
        protein: 'Protein',
        fiber: 'Fiber',
        carbs: 'Carbohydrates',
        sugars: 'Sugars',
        fat: 'Fat',
      },
      figureLabel: 'The hexagon of the six counters, on a sample day.',
    },
    features: {
      title: 'What it does',
      items: [
        {
          title: 'A goal that fits you',
          body: 'Age, height, weight, activity, target weight and deadline: six daily goals, computed for you and editable by hand at any time.',
        },
        {
          title: 'Always fixable',
          body: 'Every line of the log stays editable: quantity, values, food. Nothing is set in stone.',
        },
        {
          title: 'Your day at a glance',
          body: 'What is left to eat, dish by dish, on a single screen.',
        },
        {
          title: 'A history you can read',
          body: 'A calendar where each day shows how it met its goals, open to review and editing.',
        },
        {
          title: 'A goal that follows reality',
          body: 'Every week, your actual weight is compared with the planned path. The app suggests an adjustment; you decide.',
        },
        {
          title: 'Your data stays yours',
          body: 'Everything is stored on the phone. Export it to a readable file whenever you want.',
        },
      ],
    },
    promises: {
      title: 'What it does not do',
      items: ['No account.', 'No server.', 'No ads.', 'No subscription.', 'No telemetry.'],
      body: 'AI is optional. If you use it, the request leaves your phone with your own key, straight to the provider you chose: the project sees nothing of it.',
      link: 'Everything that leaves your phone, in detail',
    },
    openSource: {
      title: 'Open, and sourced',
      body: (
        <>
          The <a href={site.repository}>app’s source code</a> is public, under the GPL-3.0 license. Nutrition values
          come from two open sources, credited in the app:
        </>
      ),
      sources: [
        <>
          <a href="https://ciqual.anses.fr">CIQUAL 2025 table</a> — ANSES, Etalab Open License 2.0
        </>,
        <>
          <a href="https://world.openfoodfacts.org">Open Food Facts</a> — Open Food Facts contributors, ODbL 1.0 license
        </>,
      ],
    },
    disclaimer:
      'Hexavore is a personal tracking tool. It is not a medical device and does not replace the advice of a health professional.',
  },

  privacy: {
    meta: {
      title: 'Privacy policy — Hexavore',
      description: 'What the Hexavore app and this website do with your data: almost nothing, described here in detail.',
    },
    site: {
      title: 'This website',
      paragraphs: [
        <>
          {site.origin.replace('https://', '')} is a static website hosted by GitHub Pages. It sets no cookie, does not
          measure its audience, runs no JavaScript and loads nothing from any other website — fonts included.
        </>,
        <>
          As with any web page, the host sees visitors’ IP addresses: GitHub keeps them for security purposes, under{' '}
          <a href={site.host.privacy}>its privacy statement</a>.
        </>,
      ],
    },
  },

  legal: {
    meta: {
      title: 'Legal notice — Hexavore',
      description: 'Publisher, host and licenses of the Hexavore website.',
    },
    title: 'Legal notice',
    sections: [
      {
        title: 'Publisher',
        paragraphs: [
          site.publisher === null ? (
            <>
              This website is published on a non-professional basis by a private individual who, as the French law on
              confidence in the digital economy (LCEN) allows, does not make their identity public.
            </>
          ) : (
            <>This website is published on a non-professional basis by {site.publisher}.</>
          ),
          <>
            Contact: <a href={`mailto:${site.contact}`}>{site.contact}</a>
          </>,
        ],
      },
      {
        title: 'Hosting',
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
        title: 'Intellectual property',
        paragraphs: [
          <>
            The code of the Hexavore app and of this website is published under the{' '}
            <a href="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</a> license. The text and images of this
            website are published under the{' '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY-SA 4.0</a> license.
          </>,
          <>
            The Inter typeface, by Rasmus Andersson, is distributed under the{' '}
            <a href="https://openfontlicense.org">SIL Open Font License 1.1</a>.
          </>,
        ],
      },
      {
        title: 'Personal data',
        paragraphs: [
          <>
            Neither this website nor the app collects personal data. The details are in the{' '}
            <a href={href('privacy', 'en')}>privacy policy</a>.
          </>,
        ],
      },
    ],
  },

  notFound: {
    title: 'Page not found',
    body: 'This address leads to no page.',
    homeLink: 'Back to the home page',
  },
}

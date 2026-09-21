import { useLocale } from '../../i18n/LocaleContext.tsx'
import { href } from '../../routing/routes.ts'
import { site } from '../../site.ts'
import './Footer.css'

/**
 * Les pages que la loi et les boutiques demandent, sur chaque page.
 *
 * La politique de confidentialité est à un geste de partout : c'est ce que la console du
 * Play Store et la vérification de marque de Google iront chercher depuis l'accueil.
 */
export function Footer() {
  const { locale, t } = useLocale()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <nav className="footer__nav" aria-label={t.nav.footer}>
          <a href={href('privacy', locale)}>{t.nav.privacy}</a>
          <a href={href('legal', locale)}>{t.nav.legal}</a>
          <a href={site.repository}>{t.nav.source}</a>
        </nav>
        <p className="footer__note">{t.footer.licenses}</p>
        <p className="footer__note">{t.footer.credits}</p>
      </div>
    </footer>
  )
}

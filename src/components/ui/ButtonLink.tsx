import type { ReactNode } from 'react'
import './ButtonLink.css'

/**
 * Un lien qui a l'allure d'un bouton néon de l'application.
 *
 * **Un écran, un bouton plein** (docs/08, § `NeonButton`) : `primary` porte un fond, et un
 * seul par page le fait. `secondary` n'a que son contour. Ce sont des liens et non des
 * boutons : ils mènent quelque part, et le site n'exécute rien.
 */
export function ButtonLink({
  href,
  variant,
  children,
}: {
  href: string
  variant: 'primary' | 'secondary'
  children: ReactNode
}) {
  return (
    <a className={`button-link button-link--${variant}`} href={href}>
      {children}
    </a>
  )
}

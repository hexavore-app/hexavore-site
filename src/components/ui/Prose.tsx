import './Prose.css'

/**
 * Un texte long déjà mis en forme — la politique de confidentialité, lue en Markdown.
 *
 * **Le HTML est injecté tel quel**, et c'est sûr pour une seule raison : il vient du dépôt
 * de l'application, relu dans une pull request comme le code. Aucune saisie d'un visiteur
 * ne passe jamais par ici, et ce composant ne doit pas en recevoir.
 */
export function Prose({ html }: { html: string }) {
  return <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
}

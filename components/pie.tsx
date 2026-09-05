import Link from 'next/link';

import type { Enlace } from './barra';

/**
 * Pie de página.
 *
 * El año se calcula al generar el sitio, no en el navegador: con exportación
 * estática eso significa que se queda fijo al publicar, que es justo lo que
 * queremos —nada de un salto de contenido al hidratar.
 */
export function Pie({ enlaces }: { enlaces: Enlace[] }) {
  return (
    <footer>
      <div className="contenedor">
        <span>© {new Date().getFullYear()} Espenser</span>
        <nav>
          {enlaces.map((enlace) =>
            enlace.href.startsWith('mailto:') ? (
              <a key={enlace.href} href={enlace.href}>
                {enlace.texto}
              </a>
            ) : (
              <Link key={enlace.href} href={enlace.href}>
                {enlace.texto}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}

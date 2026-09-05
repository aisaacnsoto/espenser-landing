import Link from 'next/link';

export interface Enlace {
  href: string;
  texto: string;
}

/**
 * Barra superior. Los enlaces cambian según la página: cada una omite el suyo
 * y las legales apuntan de vuelta a la portada.
 */
export function Barra({ enlaces }: { enlaces: Enlace[] }) {
  return (
    <header className="barra">
      <div className="contenedor">
        <Link className="marca" href="/">
          <span className="logo">◈</span>
          Espenser
        </Link>
        <nav>
          {enlaces.map((enlace) => (
            <Link key={enlace.href} href={enlace.href}>
              {enlace.texto}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

import type { Metadata } from 'next';

import './globals.css';

const FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='26' font-size='26'>💸</text></svg>";

export const metadata: Metadata = {
  title: 'Espenser · Tus gastos, anotados sin escribirlos',
  description:
    'Espenser lee las notificaciones de tus apps de pago y prepara tus movimientos. Tú confirmas. Descarga la app para Android.',
  openGraph: {
    title: 'Espenser · Tus gastos, anotados sin escribirlos',
    description:
      'Detecta tus pagos, te deja la última palabra y te enseña a dónde se va tu dinero.',
    type: 'website',
  },
  icons: { icon: FAVICON },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

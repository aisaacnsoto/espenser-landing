import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Sitio estático: `next build` escribe HTML plano en `out/`, sin servidor
   * detrás. Es lo que necesita una landing como esta, y lo que sirve
   * cualquier hosting de archivos.
   */
  output: 'export',
};

export default nextConfig;

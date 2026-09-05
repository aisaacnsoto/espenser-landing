'use client';

import { useEffect, useState } from 'react';

import { Barra } from '@/components/barra';
import { Pie } from '@/components/pie';
import { Telefono } from '@/components/telefono';

import { DESCARGA, FUNCIONES, ROTACION } from './escenas';

/**
 * Portada.
 *
 * Es un componente de cliente porque el teléfono y la lista de
 * funcionalidades comparten cuál está activa, y están en secciones distintas
 * de la página. Al exportar el sitio se prerenderiza igual: el HTML sale
 * completo del build y el JavaScript solo se encarga de la rotación.
 */
export default function Portada() {
  const [activa, setActiva] = useState(0);
  /** Cada elección manual reinicia el temporizador, para dar tiempo a mirar. */
  const [desde, setDesde] = useState(0);

  useEffect(() => {
    const quieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (quieto) return;

    const reloj = setInterval(
      () => setActiva((actual) => (actual + 1) % FUNCIONES.length),
      ROTACION,
    );
    return () => clearInterval(reloj);
  }, [desde]);

  const elegir = (indice: number) => {
    setActiva(indice);
    setDesde((valor) => valor + 1);
  };

  return (
    <>
      <Barra
        enlaces={[
          { href: '#como-funciona', texto: 'Cómo funciona' },
          { href: '#descargar', texto: 'Descargar' },
          { href: '/privacidad', texto: 'Privacidad' },
          { href: '/terminos', texto: 'Términos' },
        ]}
      />

      <main>
        <section className="portada">
          <div className="contenedor">
            <div>
              <span className="etiqueta">Android · Perú</span>
              <h1>Tus gastos, anotados sin escribirlos.</h1>
              <p className="entrada">
                Espenser lee las notificaciones de tus apps de pago, prepara el movimiento y
                te deja la última palabra. Nada entra en tus cuentas sin que lo confirmes.
              </p>
              <div className="acciones">
                <a className="boton" href="#descargar">
                  Descargar para Android
                </a>
                <a className="boton secundario" href="#como-funciona">
                  Ver cómo funciona
                </a>
              </div>
              <p className="nota-descarga">
                Descarga directa en APK · Android 7 o superior · 64 bits · 48 MB
              </p>
            </div>

            <Telefono activa={activa} />
          </div>
        </section>

        <section id="como-funciona">
          <div className="contenedor">
            <div className="titulo-seccion">
              <h2>Cinco cosas que hace por ti</h2>
              <p>Toca una para verla en el teléfono.</p>
            </div>

            <div className="funciones">
              {FUNCIONES.map((funcion, indice) => (
                <article
                  key={funcion.clave}
                  className={indice === activa ? 'funcion activa' : 'funcion'}
                  tabIndex={0}
                  onClick={() => elegir(indice)}
                  onKeyDown={(evento) => {
                    if (evento.key === 'Enter' || evento.key === ' ') {
                      evento.preventDefault();
                      elegir(indice);
                    }
                  }}
                >
                  <div className="indice">{indice + 1}</div>
                  <h3>{funcion.titulo}</h3>
                  <p>{funcion.descripcion}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="descargar">
          <div className="contenedor">
            <div className="descarga">
              <h2>Descarga Espenser</h2>
              <p>
                Todavía no está en Google Play, así que la instalas desde el archivo. Es el
                mismo procedimiento de siempre en Android: descargar, abrir y permitir la
                instalación.
              </p>
              <a className="boton" href={DESCARGA} rel="noopener">
                Descargar APK
              </a>

              <div className="pasos">
                <div className="paso">
                  <b>1 · Descarga</b>
                  <span>Toca el botón desde tu teléfono Android. El archivo pesa 48 MB.</span>
                </div>
                <div className="paso">
                  <b>2 · Permite la instalación</b>
                  <span>
                    Android avisará de que viene de un origen desconocido. Toca «Ajustes» y
                    activa el permiso para tu navegador.
                  </span>
                </div>
                <div className="paso">
                  <b>3 · Abre y crea tu cuenta</b>
                  <span>Con tu correo o con Google. Después eliges tu primer espacio.</span>
                </div>
                <div className="paso">
                  <b>4 · Activa la detección</b>
                  <span>
                    En Automatizar, elige qué apps puede leer. Este paso es opcional: la app
                    funciona igual anotando a mano.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Pie
        enlaces={[
          { href: '/privacidad', texto: 'Política de privacidad' },
          { href: '/terminos', texto: 'Términos y condiciones' },
          { href: 'mailto:aisaacnsoto@gmail.com', texto: 'Contacto' },
        ]}
      />
    </>
  );
}

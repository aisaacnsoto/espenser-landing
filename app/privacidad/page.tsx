import type { Metadata } from 'next';

import { Barra } from '@/components/barra';
import { Pie } from '@/components/pie';

export const metadata: Metadata = {
  title: 'Política de privacidad · Espenser',
  description:
    'Qué datos trata Espenser, para qué, cuánto los guarda y cómo ejercer tus derechos.',
};

/** Una fila de la tabla de tratamientos. */
const TRATAMIENTOS: [string, string, string][] = [
  ['Nombre, correo y contraseña cifrada', 'Crear tu cuenta e identificarte al entrar', 'Ejecución del servicio'],
  [
    'Tus movimientos, cuentas, categorías, presupuestos y metas',
    'Es el contenido de la app: sin ellos no hay nada que mostrar',
    'Ejecución del servicio',
  ],
  [
    'Texto de las notificaciones de las apps que tú elijas',
    'Detectar el comercio y el monto de un pago y proponerte el movimiento',
    'Tu consentimiento, revocable',
  ],
  [
    'Metadatos y contenido de correos de tu cuenta de Gmail',
    'Detectar avisos de consumo de tu banco y proponerte el movimiento',
    'Tu consentimiento, revocable',
  ],
  [
    'Fotos, comprobantes, notas de voz y archivos que adjuntes',
    'Leer una boleta, adjuntarla a un movimiento o transcribir tu nota',
    'Tu consentimiento, revocable',
  ],
  [
    'Identificador de tu dispositivo para notificaciones push',
    'Avisarte de detecciones, topes y vencimientos',
    'Tu consentimiento, revocable',
  ],
  [
    'Incidencias que nos reportes, con sus archivos',
    'Responderte y corregir el problema',
    'Interés legítimo en dar soporte',
  ],
];

export default function Privacidad() {
  return (
    <>
      <Barra
        enlaces={[
          { href: '/#como-funciona', texto: 'Cómo funciona' },
          { href: '/#descargar', texto: 'Descargar' },
          { href: '/terminos', texto: 'Términos' },
        ]}
      />

      <main className="legal">
        <h1>Política de privacidad</h1>
        <p className="actualizado">Última actualización: 4 de septiembre de 2026</p>

        <div className="destacado">
          <p>
            En corto: Espenser no se conecta a tu banco ni conoce tus claves. Lee las
            notificaciones y los correos que tú autorizas, uno por uno, para anotar tus
            gastos. No vendemos tus datos a nadie ni los usamos para publicidad.
          </p>
        </div>

        <h2>1. Quién trata tus datos</h2>
        <p>
          El responsable del tratamiento es el desarrollador de Espenser, a quien puedes
          escribir en <a href="mailto:aisaacnsoto@gmail.com">aisaacnsoto@gmail.com</a> para
          cualquier asunto relacionado con esta política o con tus datos personales.
        </p>
        <p>
          Espenser es una aplicación de finanzas personales para Android. Esta política
          explica qué datos tratamos, con qué finalidad, durante cuánto tiempo y cómo puedes
          ejercer tus derechos, conforme a la Ley N.º 29733, Ley de Protección de Datos
          Personales del Perú, y su reglamento.
        </p>

        <h2>2. Qué datos tratamos y para qué</h2>
        <table>
          <thead>
            <tr>
              <th>Datos</th>
              <th>Para qué</th>
              <th>Base</th>
            </tr>
          </thead>
          <tbody>
            {TRATAMIENTOS.map(([dato, finalidad, base]) => (
              <tr key={dato}>
                <td>{dato}</td>
                <td>{finalidad}</td>
                <td>{base}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>3. Lectura de notificaciones</h2>
        <p>
          Si activas la detección por notificaciones, Android te pedirá conceder el permiso
          de acceso a notificaciones. Este permiso es técnicamente amplio, pero nuestro uso
          no lo es:
        </p>
        <ul>
          <li>
            Solo leemos las notificaciones de las aplicaciones que tú añades a tu lista. Las
            del resto se descartan en el propio teléfono, sin salir de él.
          </li>
          <li>
            De esas notificaciones extraemos el comercio, el importe, la fecha y los últimos
            dígitos de la tarjeta si aparecen. No recogemos contactos, mensajes personales
            ni el contenido de otras aplicaciones.
          </li>
          <li>
            Puedes retirar el permiso en cualquier momento desde los ajustes de Android, o
            quitar aplicaciones de la lista dentro de Espenser. La detección se detiene al
            instante.
          </li>
        </ul>

        <h2>4. Acceso a tu cuenta de Google</h2>
        <p>
          Si conectas Gmail para que detectemos los avisos de consumo que te manda tu banco,
          Espenser solicita permiso de solo lectura sobre tu correo.
        </p>
        <p>
          El uso que Espenser hace de la información recibida de las API de Google se ajusta
          a la{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener"
          >
            Política de Datos de Usuario de los Servicios de API de Google
          </a>
          , incluidos sus requisitos de Uso Limitado. En concreto:
        </p>
        <ul>
          <li>
            Usamos los datos de tu correo únicamente para ofrecerte la detección automática
            de movimientos, que es una función visible y central de la aplicación.
          </li>
          <li>
            No transferimos esos datos a terceros, salvo que sea necesario para prestar el
            servicio, por seguridad, por obligación legal o con tu consentimiento expreso.
          </li>
          <li>
            Ninguna persona lee tus correos. El proceso es automático, salvo que tú nos
            autorices expresamente para resolver una incidencia que hayas reportado, que lo
            exija la ley, o que se trate de datos agregados y anonimizados.
          </li>
          <li>
            No vendemos esos datos ni los usamos para publicidad, evaluación crediticia ni
            creación de perfiles.
          </li>
        </ul>
        <p>
          Puedes revocar el acceso cuando quieras desde Espenser o desde{' '}
          <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener">
            la página de permisos de tu cuenta de Google
          </a>
          .
        </p>

        <h2>5. Inteligencia artificial</h2>
        <p>
          El asistente, la transcripción de notas de voz y la lectura de boletas funcionan
          con modelos de OpenAI. Para responderte enviamos a ese proveedor únicamente lo
          necesario: tu pregunta, el archivo que adjuntes y el resultado de las consultas
          que el asistente haga sobre tus datos. No enviamos tus credenciales ni tu base de
          datos completa.
        </p>
        <p>
          Ten en cuenta que el asistente puede equivocarse al interpretar un comprobante o
          al clasificar un gasto. Por eso todo lo que registra queda pendiente de tu
          confirmación.
        </p>

        <h2>6. Con quién compartimos tus datos</h2>
        <p>
          No vendemos tus datos ni los cedemos con fines publicitarios. Nos apoyamos en
          proveedores que los tratan por encargo nuestro y solo para prestar el servicio:
        </p>
        <ul>
          <li>
            <b>Railway</b> y <b>Neon</b>: alojamiento del servidor y de la base de datos.
          </li>
          <li>
            <b>Cloudinary</b>: almacenamiento de las imágenes, comprobantes y notas de voz.
          </li>
          <li>
            <b>OpenAI</b>: asistente, transcripción y lectura de documentos.
          </li>
          <li>
            <b>Google</b>: inicio de sesión, notificaciones push y, si lo activas, Gmail.
          </li>
          <li>
            <b>Resend</b>: envío de los correos que la aplicación genera.
          </li>
        </ul>
        <p>
          Algunos de estos proveedores están fuera del Perú, por lo que tus datos pueden
          tratarse en el extranjero, principalmente en Estados Unidos y la Unión Europea. Al
          usar Espenser aceptas ese flujo transfronterizo, que se realiza con proveedores
          que ofrecen niveles adecuados de protección.
        </p>

        <h2>7. Cuánto tiempo los guardamos</h2>
        <p>
          Conservamos tus datos mientras tengas la cuenta abierta. Si la eliminas, borramos
          tu información en un plazo máximo de 30 días, salvo lo que debamos conservar por
          obligación legal. Los archivos que subas se eliminan junto con el movimiento al
          que pertenecen.
        </p>

        <h2>8. Seguridad</h2>
        <p>
          Las contraseñas se guardan cifradas, nunca en claro. Las comunicaciones entre la
          app y el servidor viajan por HTTPS. El acceso a la base de datos está restringido
          al propio servicio. Ningún sistema es infalible: si detectáramos una brecha que
          afecte a tus datos, te lo comunicaríamos.
        </p>

        <h2>9. Tus derechos</h2>
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso, rectificación,
          cancelación, oposición, portabilidad y desindexación sobre tus datos personales.
        </p>
        <ul>
          <li>
            <b>Acceso</b>: saber qué datos tenemos y obtener una copia.
          </li>
          <li>
            <b>Rectificación</b>: corregir lo que esté mal o incompleto.
          </li>
          <li>
            <b>Cancelación</b>: eliminar tus datos cuando ya no sean necesarios.
          </li>
          <li>
            <b>Oposición</b>: pedir que dejemos de tratarlos por un motivo concreto.
          </li>
          <li>
            <b>Portabilidad</b>: recibir tus datos en un formato estructurado y legible por
            máquina. Puedes hacerlo tú mismo exportando tus movimientos a CSV desde la app.
          </li>
          <li>
            <b>Desindexación</b>: pedir que dejen de estar accesibles públicamente.
          </li>
        </ul>
        <p>
          Escríbenos a <a href="mailto:aisaacnsoto@gmail.com">aisaacnsoto@gmail.com</a> y te
          responderemos dentro de los plazos legales. Si consideras que no atendimos tu
          solicitud, puedes acudir a la Autoridad Nacional de Protección de Datos Personales
          del Ministerio de Justicia y Derechos Humanos del Perú.
        </p>

        <h2>10. Menores de edad</h2>
        <p>
          Espenser está dirigida a personas mayores de 18 años. No recogemos datos de
          menores a sabiendas. Si detectamos una cuenta de un menor sin autorización de sus
          padres o tutores, la eliminaremos.
        </p>

        <h2>11. Cambios en esta política</h2>
        <p>
          Si cambiamos esta política, actualizaremos la fecha del encabezado y, cuando el
          cambio sea relevante, te avisaremos dentro de la aplicación antes de que entre en
          vigor.
        </p>
      </main>

      <Pie
        enlaces={[
          { href: '/', texto: 'Inicio' },
          { href: '/terminos', texto: 'Términos y condiciones' },
          { href: 'mailto:aisaacnsoto@gmail.com', texto: 'Contacto' },
        ]}
      />
    </>
  );
}

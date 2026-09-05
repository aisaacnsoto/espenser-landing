import type { Metadata } from 'next';

import { Barra } from '@/components/barra';
import { Pie } from '@/components/pie';

export const metadata: Metadata = {
  title: 'Términos y condiciones · Espenser',
  description: 'Condiciones de uso de la aplicación Espenser.',
};

export default function Terminos() {
  return (
    <>
      <Barra
        enlaces={[
          { href: '/#como-funciona', texto: 'Cómo funciona' },
          { href: '/#descargar', texto: 'Descargar' },
          { href: '/privacidad', texto: 'Privacidad' },
        ]}
      />

      <main className="legal">
        <h1>Términos y condiciones</h1>
        <p className="actualizado">Última actualización: 4 de septiembre de 2026</p>

        <div className="destacado">
          <p>
            En corto: Espenser es una herramienta para llevar tus finanzas, no un banco ni
            un asesor financiero. Tus datos son tuyos y puedes llevártelos cuando quieras.
            La app se ofrece tal cual, y las decisiones sobre tu dinero siguen siendo tuyas.
          </p>
        </div>

        <h2>1. Qué aceptas</h2>
        <p>
          Al descargar, instalar o usar Espenser aceptas estos términos. Si no estás de
          acuerdo con alguno, no uses la aplicación. Forman parte de estos términos nuestra{' '}
          <a href="/privacidad">política de privacidad</a>.
        </p>

        <h2>2. Qué es Espenser</h2>
        <p>
          Espenser es una aplicación de finanzas personales que te ayuda a registrar y
          entender tus gastos e ingresos. Puede detectar movimientos a partir de las
          notificaciones y correos que tú autorices, y ofrece un asistente basado en
          inteligencia artificial para consultar tus propios datos.
        </p>
        <p>
          Espenser <b>no es una entidad financiera</b>, no mueve dinero, no se conecta a tu
          banco y no realiza pagos. Tampoco constituye asesoramiento financiero, contable ni
          tributario.
        </p>

        <h2>3. Tu cuenta</h2>
        <ul>
          <li>Debes ser mayor de 18 años y facilitar datos veraces al registrarte.</li>
          <li>
            Eres responsable de mantener tu contraseña a salvo y de todo lo que ocurra en tu
            cuenta. Avísanos si sospechas de un acceso no autorizado.
          </li>
          <li>Puedes eliminar tu cuenta cuando quieras desde los ajustes de la aplicación.</li>
        </ul>

        <h2>4. Cómo debes usarla</h2>
        <p>Al usar Espenser te comprometes a no:</p>
        <ul>
          <li>Usarla para actividades ilícitas o para tratar datos de terceros sin permiso.</li>
          <li>
            Intentar acceder a cuentas ajenas, alterar el servicio, sortear sus límites o
            hacer ingeniería inversa sobre él.
          </li>
          <li>
            Automatizar peticiones masivas o cualquier uso que degrade el servicio para los
            demás.
          </li>
          <li>Subir contenido ilegal, ofensivo o que infrinja derechos de terceros.</li>
        </ul>
        <p>
          Podemos suspender o cerrar cuentas que incumplan estos términos, avisándote cuando
          sea razonablemente posible.
        </p>

        <h2>5. Tu contenido</h2>
        <p>
          Los movimientos, comprobantes, notas y demás contenido que registres siguen siendo
          tuyos. Nos concedes únicamente el permiso necesario para almacenarlos, procesarlos
          y mostrártelos dentro de la aplicación. Puedes exportar tus movimientos a CSV en
          cualquier momento.
        </p>

        <h2>6. Detección automática y asistente</h2>
        <p>
          La detección de movimientos y el asistente se apoyan en la lectura automática de
          textos y en modelos de inteligencia artificial. Pueden equivocarse: leer mal un
          importe, confundir un comercio o proponer una categoría que no corresponde.
        </p>
        <p>
          Por eso, todo lo que la aplicación detecta o registra por su cuenta queda{' '}
          <b>pendiente de tu confirmación</b>. Revisar esos movimientos antes de confirmarlos
          es responsabilidad tuya, y la información que muestre la aplicación no sustituye a
          tus estados de cuenta oficiales.
        </p>

        <h2>7. Disponibilidad del servicio</h2>
        <p>
          Trabajamos para que Espenser esté disponible, pero no garantizamos un
          funcionamiento ininterrumpido ni libre de errores. Podemos modificar, suspender o
          descontinuar funcionalidades. Si fuéramos a cerrar el servicio, te avisaríamos con
          antelación razonable para que puedas exportar tus datos.
        </p>
        <p>
          La aplicación se distribuye hoy fuera de Google Play, mediante un archivo de
          instalación descargable. Descarga siempre desde este sitio: no respondemos por
          copias obtenidas en otros lugares, que pueden estar modificadas.
        </p>

        <h2>8. Precio</h2>
        <p>
          Espenser se ofrece gratuitamente en su versión actual. Si en el futuro
          incorporamos funciones de pago, lo informaremos con claridad antes de que apliquen,
          y lo que hoy es gratuito no se convertirá en de pago sin previo aviso.
        </p>

        <h2>9. Propiedad intelectual</h2>
        <p>
          El nombre Espenser, su diseño, su código y sus contenidos pertenecen a su
          desarrollador. Estos términos no te transfieren ningún derecho sobre ellos más
          allá del uso personal de la aplicación.
        </p>

        <h2>10. Garantías y responsabilidad</h2>
        <p>
          La aplicación se ofrece «tal cual» y «según disponibilidad», sin garantías de
          idoneidad para un fin concreto. En la máxima medida permitida por la ley, no
          respondemos por decisiones financieras que tomes a partir de la información que
          muestre la aplicación, ni por pérdidas indirectas derivadas de su uso o de la
          imposibilidad de usarla.
        </p>
        <p>
          Nada en estos términos limita la responsabilidad que no pueda excluirse conforme a
          la legislación peruana, incluida la normativa de protección al consumidor.
        </p>

        <h2>11. Cambios en estos términos</h2>
        <p>
          Podemos actualizarlos. Cuando el cambio sea relevante te avisaremos dentro de la
          aplicación antes de que entre en vigor. Si sigues usando Espenser después de esa
          fecha, entenderemos que aceptas la nueva versión.
        </p>

        <h2>12. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República del Perú. Cualquier
          controversia se someterá a los jueces y tribunales de Lima, sin perjuicio de los
          derechos que la normativa de consumo reconozca al usuario.
        </p>

        <h2>13. Contacto</h2>
        <p>
          Para cualquier duda sobre estos términos, escribe a{' '}
          <a href="mailto:aisaacnsoto@gmail.com">aisaacnsoto@gmail.com</a>.
        </p>
      </main>

      <Pie
        enlaces={[
          { href: '/', texto: 'Inicio' },
          { href: '/privacidad', texto: 'Política de privacidad' },
          { href: 'mailto:aisaacnsoto@gmail.com', texto: 'Contacto' },
        ]}
      />
    </>
  );
}

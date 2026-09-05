/** Las cinco funcionalidades que se ilustran en la portada. */
export interface Funcion {
  clave: string;
  titulo: string;
  /** El que aparece arriba, dentro de la maqueta del teléfono. */
  rotulo: string;
  descripcion: string;
}

export const FUNCIONES: Funcion[] = [
  {
    clave: 'deteccion',
    rotulo: 'Detección',
    titulo: 'Detecta tus pagos',
    descripcion:
      'Cuando yapeas o pagas con tarjeta, tu banco te notifica. Espenser lee esa notificación, saca el comercio y el monto, y prepara el movimiento. Tú eliges qué apps puede leer y las quitas cuando quieras.',
  },
  {
    clave: 'confirmar',
    rotulo: 'Por confirmar',
    titulo: 'Nada se registra a tus espaldas',
    descripcion:
      'Lo detectado espera en «Por confirmar». Revisas monto, cuenta y categoría, y decides. Hasta entonces no cuenta en tu resumen ni consume presupuesto.',
  },
  {
    clave: 'asistente',
    rotulo: 'Asistente',
    titulo: 'Pregúntale a tus finanzas',
    descripcion:
      'Un asistente que consulta tus datos reales: en qué gastas más, cómo va el mes, registrar un gasto dictándolo. Cuando hay varias cifras, dibuja el gráfico que mejor las explica.',
  },
  {
    clave: 'comprobantes',
    rotulo: 'Comprobantes',
    titulo: 'Comparte un comprobante',
    descripcion:
      'Comparte con Espenser la captura de un yapeo o la foto de una boleta. La lee, crea el movimiento y guarda la imagen junto a él para que puedas volver a mirarla.',
  },
  {
    clave: 'presupuestos',
    rotulo: 'Presupuestos',
    titulo: 'Topes que avisan a tiempo',
    descripcion:
      'Pon cuánto quieres gastar al mes en cada categoría. La barra se llena con lo que confirmas y te avisa antes de pasarte, no después.',
  },
];

/** Cada cuánto pasa sola a la siguiente escena. */
export const ROTACION = 5200;

/** De dónde se descarga la app. Siempre la última release publicada. */
export const DESCARGA =
  'https://github.com/aisaacnsoto/espenser-landing/releases/latest/download/espenser.apk';

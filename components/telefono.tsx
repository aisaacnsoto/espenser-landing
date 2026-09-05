import { FUNCIONES } from '@/app/escenas';

/**
 * Maqueta del teléfono con las cinco escenas.
 *
 * Todas se renderizan siempre; solo la activa lleva la clase que las hace
 * visibles y dispara sus animaciones. Al cambiar de escena el contenedor se
 * remonta —lleva `key`— y por eso las animaciones vuelven a empezar sin
 * tocarlas desde JavaScript.
 */
export function Telefono({ activa }: { activa: number }) {
  const rotulo = FUNCIONES[activa]?.rotulo ?? 'Espenser';

  return (
    <div className="telefono" aria-hidden="true">
      <div className="pantalla">
        <div className="encabezado">
          <span>9:41</span>
          <span>{rotulo}</span>
          <span>▮</span>
        </div>

        <div key={activa}>
          <div className={escena('deteccion', activa)}>
            <div className="tarjeta-mini anima-arriba">
              <span className="icono" style={{ background: '#7c3aed', color: '#fff' }}>
                Y
              </span>
              <span className="texto">
                <span className="titulo">¡Yapeaste!</span>
                <span className="sub">Tu pago de S/ 26.40 fue exitoso</span>
              </span>
            </div>
            <div className="flecha anima-abajo retraso-1">↓</div>
            <div className="tarjeta-mini anima-abajo retraso-2">
              <span className="icono" style={{ background: '#e3f0ee', color: '#0f766e' }}>
                ◍
              </span>
              <span className="texto">
                <span className="titulo">Consumo detectado</span>
                <span className="sub">Por confirmar</span>
              </span>
              <span className="monto" style={{ color: '#c0392b' }}>
                -S/ 26.40
              </span>
            </div>
          </div>

          <div className={escena('confirmar', activa)}>
            <div className="tarjeta-mini anima-abajo">
              <span className="icono" style={{ background: '#fcf1e3', color: '#b45309' }}>
                ◔
              </span>
              <span className="texto">
                <span className="titulo">Plaza Vea</span>
                <span className="sub">Alimentación · Efectivo</span>
              </span>
              <span className="monto anima-check" style={{ color: '#1e7a5a' }}>
                ✓
              </span>
            </div>
            <div className="chip-confirmar anima-latido">Confirmar</div>
          </div>

          <div className={escena('asistente', activa)}>
            <div className="globo usuario anima-abajo">¿En qué gasté más?</div>
            <div className="globo asistente anima-abajo retraso-1">
              Alimentación y Ocio
              <div className="grafico">
                {[46, 34, 21, 14].map((altura, indice) => (
                  <span
                    key={indice}
                    style={{ '--altura': `${altura}px` } as React.CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className={escena('comprobantes', activa)}>
            <div className="comprobante anima-izquierda">
              <i style={{ width: '80%' }} />
              <i style={{ width: '55%' }} />
              <strong>S/ 13.00</strong>
            </div>
            <div className="flecha anima-abajo retraso-1">↓</div>
            <div className="tarjeta-mini anima-abajo retraso-2">
              <span className="icono" style={{ background: '#f6f5f2', color: '#6b6862' }}>
                ◗
              </span>
              <span className="texto">
                <span className="titulo">Victor Cha</span>
                <span className="sub">Con el comprobante adjunto</span>
              </span>
              <span className="monto" style={{ color: '#c0392b' }}>
                -S/ 13.00
              </span>
            </div>
          </div>

          <div className={escena('presupuestos', activa)}>
            <div className="linea-tope">
              <b style={{ color: '#141413' }}>Alimentación</b>
              <span>Tope S/ 600</span>
            </div>
            <div className="barra-tope">
              <i />
            </div>
            <div className="aviso-tope">Te pasaste por S/ 48</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function escena(clave: string, activa: number): string {
  const indice = FUNCIONES.findIndex((funcion) => funcion.clave === clave);
  return indice === activa ? 'escena activa' : 'escena';
}

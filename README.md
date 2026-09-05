# espenser-landing

Página de descarga de **Espenser**, la app de finanzas personales.

Next.js con App Router y **exportación estática**: `next build` escribe HTML
plano en `out/`, sin servidor detrás.

## Estructura

```
app/page.tsx            Portada: hero, carrusel de escenas y descarga
app/privacidad/         Política de privacidad
app/terminos/           Términos y condiciones
app/escenas.ts          Las cinco funcionalidades y el enlace de descarga
app/globals.css         Estilos, con los mismos tokens de color que la app
components/telefono.tsx Maqueta del teléfono con las escenas animadas
components/barra.tsx    Cabecera
components/pie.tsx      Pie
```

## Desarrollo

```sh
npm run dev
```

## Generar el sitio

```sh
npm run build
```

Deja el sitio listo en `out/`. Sirve cualquier hosting estático: Netlify,
Vercel, Cloudflare Pages o GitHub Pages.

## Publicar una versión nueva de la app

El APK no vive en este repo: es un *asset* de una release, para no arrastrar
50 MB por versión en el historial.

1. En `espenser-app`, compila el release firmado:

   ```sh
   cd android && ./gradlew assembleRelease -PreactNativeArchitectures=arm64-v8a
   ```

   La compilación de `armeabi-v7a` falla en Windows con un error de ninja
   (`build.ninja still dirty`) al compilar Reanimated, por lo que el APK sale
   solo para 64 bits.

2. Crea una release en GitHub con la etiqueta de la versión —`v1.0.1`, y así— y
   sube el APK renombrado a **`espenser.apk`**. El nombre importa: el botón
   apunta a `/releases/latest/download/espenser.apk`, que resuelve solo a la
   última release, así que no hay que tocar el enlace.

3. Actualiza en `app/page.tsx` el tamaño que aparece junto al botón, si cambió.

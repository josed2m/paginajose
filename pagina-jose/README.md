# Página Personal - José Martínez

## Cómo correrlo

1. Abrí esta carpeta en VS Code.
2. En la terminal (Terminal → New Terminal), instalá las dependencias:

   ```bash
   npm install
   ```

3. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrí el link que te muestra la terminal (normalmente `http://localhost:5173`).

## Cómo generar la versión final para entregar

```bash
npm run build
```

Esto crea una carpeta `dist/` con todo empaquetado (HTML, CSS, JS), lista para subir a un hosting como Vercel, Netlify o GitHub Pages.

## Estructura

```
src/
  App.jsx          -> el componente principal con Inicio, Educación y Contacto
  main.jsx         -> punto de entrada de React
  index.css        -> estilos base de Tailwind
  assets/          -> tu foto y los logos de los colegios
```

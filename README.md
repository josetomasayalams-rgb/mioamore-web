# Mio Amore Web

Landing e-commerce simple para convertir visitas desde Instagram en consultas por WhatsApp.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Ejecutar localmente

Primero instala Node.js. Luego, desde esta carpeta:

```bash
npm install
npm run dev
```

La web quedará disponible en `http://localhost:3000`.

## Publicar en GitHub Pages

Este proyecto está configurado para publicarse como sitio estático en GitHub Pages.

Repositorio esperado:

```txt
mioamore-web
```

Primera subida a GitHub:

```bash
git init
git add .
git commit -m "Primera version web Mio Amore"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mioamore-web.git
git push -u origin main
```

Deploy:

```bash
npm run deploy
```

Luego activa GitHub Pages en:

```txt
Settings -> Pages -> Deploy from a branch -> gh-pages -> /root
```

La URL quedará con este formato:

```txt
https://TU-USUARIO.github.io/mioamore-web/
```

La configuración usa `basePath` solo durante `npm run deploy`, por lo que `npm run dev` sigue funcionando normalmente en `http://localhost:3000`.

## Dominio sugerido

Dominio público recomendado:

```txt
mioamoreboutique.cl
```

El dominio fue elegido porque es claro, mantiene la marca y comunica que se trata de una boutique. Antes de publicarlo debe registrarse en NIC Chile y conectarse al hosting donde se despliegue la web.

## Editar datos de la tienda

Los datos principales están en:

```txt
src/data/store.ts
```

Ahí puedes cambiar:

- WhatsApp
- Instagram
- Correo
- Productos
- Categorías
- Testimonios
- Preguntas frecuentes

El número de WhatsApp debe ir en formato internacional, sin `+`, espacios ni guiones.

Ejemplo:

```ts
whatsappNumber: "56912345678"
```

## Imágenes

La primera versión usa imágenes remotas de muestra para no dejar la landing vacía. Cámbialas por fotos reales de productos cuando estén disponibles.

Cada producto tiene este campo:

```ts
image: "https://..."
```

## Pendiente antes de publicar

- Reemplazar WhatsApp real.
- Reemplazar fotos de muestra por fotos reales.
- Ajustar productos, precios y categorías reales.
- Revisar visualmente en celular.
- Ejecutar `npm run build`.

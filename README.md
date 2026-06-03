# SillasPro Elite - Landing Page Profesional y Funcional

Este es un proyecto web listo para producción para la landing page de **SillasPro Elite**, una mueblería de alta gama con foco en la sillería ergonómica corporativa y de hogar.

El sitio es 100% responsivo, está redactado enteramente en español y cuenta con interacciones premium avanzadas para mejorar la experiencia de usuario y la conversión.

## Características Principales

1. **Diseño Moderno y Elegante**:
   - Palette de colores seleccionada con soporte de modo oscuro (Dark Mode).
   - Tipografías premium (`Lexend` e `Inter`) y set de iconos de `Material Symbols`.
2. **Carrito de Compras 100% Funcional**:
   - Panel lateral deslizante (Drawer) para visualizar el carrito.
   - Suma y resta de cantidades con recálculo automático de subtotales, IVA (19%) y total estimado.
   - Persistencia del carrito en el almacenamiento del navegador (`localStorage`).
   - Botón de compra que simula checkout e integra una redirección directa a WhatsApp con el formato del pedido completo y estructurado.
3. **Buscador Dinámico en Tiempo Real**:
   - Modal en pantalla completa con filtro instantáneo de productos.
   - Búsqueda coincidente por título y descripción con imágenes miniatura y botón de añadir al carrito directo.
4. **Sistema de Modales "Próximamente"**:
   - Integrado en todas las secciones en desarrollo (Oficina, Hogar, Ergonomía, Nosotros, Soporte, y footer).
   - Formulario interactivo con suscripción de boletín/newsletter y alertas de éxito.
5. **Observador de Viewport ("Al ingresar")**:
   - Cada sección principal muestra un banner/badge distintivo de "Sección Activa (Próximamente)".
   - Un Intersection Observer detecta cuando el usuario ingresa a una sección mediante scroll y dispara una notificación en la parte inferior para indicar la disponibilidad futura de la sección.
6. **WhatsApp Flotante**:
   - Botón flotante interactivo con animación y micro-texto explicativo en hover para atención inmediata.

---

## Estructura del Proyecto

```bash
├── public/
│   └── index.html      # Página web interactiva y responsiva (Tailwind + Vanilla JS)
├── .gitignore          # Reglas para excluir archivos del control de versiones
├── package.json        # Dependencias de npm y scripts de inicio
├── server.js           # Servidor express para producción y Railway
└── README.md           # Este archivo de instrucciones
```

---

## Ejecución Local

Para correr el proyecto en tu máquina local, sigue estos pasos:

1. Asegúrate de tener instalado [Node.js](https://nodejs.org/).
2. Abre tu terminal en el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
4. Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la landing page en funcionamiento.

---

## Despliegue en Railway

Este proyecto está optimizado y listo para ser desplegado en **Railway** sin configuraciones complejas:

1. **Sube el código a GitHub**: Crea un repositorio (público o privado) y sube todos los archivos del proyecto (excluyendo `node_modules`).
2. **Inicia sesión en Railway**: Ve a [Railway.app](https://railway.app) y haz clic en **New Project**.
3. **Selecciona tu repositorio**: Elige **Deploy from GitHub repo** y selecciona el repositorio de este proyecto.
4. **Detección automática**: Railway leerá el archivo `package.json`, instalará las dependencias ejecutando `npm install` de forma automática, e iniciará el servidor con `npm start` exponiendo el puerto dinámico correspondiente (`PORT`).
5. **Listo**: Una vez finalizado el despliegue automático, Railway te proveerá un dominio público (ej: `sillaspro-production.up.railway.app`) donde tu página ya estará en línea y 100% operativa en todo el mundo.

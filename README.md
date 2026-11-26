# News Explorer

Aplicación web para buscar noticias recientes por tema y consultar los resultados en una interfaz adaptable a distintos tamaños de pantalla.

## Funcionalidades

- Búsqueda de noticias publicadas durante los últimos siete días.
- Visualización inicial de resultados y carga progresiva de más artículos.
- Estados de carga, resultados vacíos y errores de consulta.
- Tarjetas con imagen, fecha, fuente, título y descripción de cada noticia.
- Navegación responsiva con menú para dispositivos móviles.
- Vista preparada para el contenido de noticias guardadas.

## Tecnologías

- React 19
- Vite
- React Router
- Zustand
- CSS modular por componente
- ESLint

## Requisitos

- Node.js 20 o una versión posterior.
- npm.

Para utilizar las consultas de noticias, configura localmente las credenciales necesarias del servicio externo. No incluyas archivos de configuración privada ni secretos en el repositorio.

## Instalación y uso

```bash
npm install
npm run dev
```

La aplicación estará disponible en la dirección que indique Vite en la terminal.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión optimizada para producción en `dist`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta el análisis estático del código. |

## Estructura principal

```text
src/
├── components/     # Componentes, vistas y estilos
├── images/         # Recursos visuales de la interfaz
├── utils/          # Cliente para el servicio de noticias
├── vendor/         # Tipografías locales
└── main.jsx        # Punto de entrada de React
```

## Calidad del código

Antes de enviar cambios, ejecuta:

```bash
npm run lint
npm run build
```

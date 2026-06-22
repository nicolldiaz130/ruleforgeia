# RuleForge AI — Landing Page de lanzamiento

Propuesta para la **Prueba Técnica · Asistente de Marketing (Diseño y Web)** — RISKTECH / TSTI.
Landing page para el lanzamiento de un producto basado en Inteligencia Artificial que **crea reglas
de monitoreo transaccional de forma automática**.

> Identidad visual basada en la marca de **Todosistemas STI** (verde esmeralda + azul navy).

---

## 🚀 Cómo verla

No requiere instalación ni dependencias. Opciones:

1. **Doble clic** en `index.html` (se abre en el navegador).
2. O con un servidor local (recomendado, para que cargue todo correctamente):
   ```bash
   # Python 3
   python -m http.server 8000
   # luego abre http://localhost:8000
   ```

---

## 📁 Estructura del proyecto

```
landing-ruleforge/
├── index.html              # Estructura semántica + SEO + datos estructurados (JSON-LD)
├── assets/
│   ├── css/styles.css      # Sistema de diseño (design tokens, responsive, accesible)
│   ├── js/main.js          # Menú, scroll-reveal, contadores, validación, copiar caption
│   ├── img/                # Logos (WebP claro/oscuro), favicon, OG image, pieza LinkedIn
│   │   ├── logo-horizontal-light.webp   # Lockup claro → fondos oscuros (footer)
│   │   ├── logo-horizontal-dark.webp    # Lockup oscuro → fondos claros (header)
│   │   ├── post-linkedin.webp           # Pieza gráfica de la campaña (optimizada para web)
│   │   ├── og-image.png                 # Imagen para compartir en redes (1200×630)
│   │   └── favicon.svg                  # Marca (hexágono + núcleo)
│   └── video/              # ruleforge-teaser.mp4 (video de lanzamiento)
└── README.md
```

---

## ✅ Entregables de la prueba (y dónde están)

| Requisito de la prueba | Ubicación en la landing |
|---|---|
| **Landing page** del producto | Todo `index.html` |
| **Listado de palabras clave (SEO)** | Sección *“Estrategia SEO · Palabras clave”* (`#seo`) + `<meta name="keywords">` |
| **Pieza gráfica LinkedIn + caption** | Sección *“Campaña de Redes Sociales”* (`#campana`) |
| **Video 8s+** | Sección *“Campaña de Redes Sociales”* (reproductor + detalles de la pieza) |
| **Herramientas Utilizadas** | Sección *“Herramientas Utilizadas”* (`#herramientas`) |

---

## 🎯 Estrategia de marketing (resumen)

- **Propuesta de valor:** convertir datos transaccionales en reglas de monitoreo precisas, explicables
  y listas para producción — sin programar.
- **Público objetivo:** equipos de Riesgo, Cumplimiento (Compliance), Antifraude y AML del sector
  financiero/fintech.
- **Mensaje central:** *“Reglas de monitoreo transaccional creadas con Inteligencia Artificial.”*
- **Objetivo de la página:** generar leads (solicitudes de demo).
- **Embudo:** Expectativa (redes) → Visita a la landing → Solicitud de demo.

### Palabras clave (SEO) — agrupadas por intención
- **Detección de fraude:** detección de fraudes · detección de fraudes con IA · software antifraude · detección de fraude transaccional
- **Monitoreo y reglas:** monitoreo transaccional con IA · reglas de monitoreo transaccional · reglas de monitoreo automáticas · monitoreo transaccional Colombia
- **Cumplimiento y normativa:** SARLAFT Colombia · SARLAFT y SAGRILAFT · reglas AML con IA · prevención de lavado de activos · automatización de compliance
- **IA / ML:** inteligencia artificial · machine learning · aprendizaje automático para fraude · IA para prevención de fraude financiero
- **Long-tail:** cómo crear reglas de monitoreo con IA · software para reducir falsos positivos AML · mejor software antifraude para fintech

---

## 🎬 Video de lanzamiento

Pieza audiovisual breve para anunciar el lanzamiento en redes sociales: del monitoreo
transaccional manual a las reglas generadas por Inteligencia Artificial, listas para producción.

- **Mensaje clave:** «El monitoreo transaccional acaba de evolucionar».
- **Canales:** LinkedIn · Instagram · X (Twitter).
- **CTA:** Solicita una demo.

> El video ya está integrado en `assets/video/ruleforge-teaser.mp4`.
> Generado con IA generativa (3 iteraciones) y editado en Clipchamp.

---

## 🛠️ Herramientas utilizadas

| Tarea | Herramientas |
|---|---|
| Desarrollo y optimización del sitio (HTML, CSS, JS) | HTML5 · CSS3 · JavaScript · Git / GitHub · Claude |
| Diseño de piezas para LinkedIn | Canva |
| Redacción y optimización del copy | Claude + ChatGPT |
| Generación de prompts para IA | Claude |
| Generación de videos | IA generativa (3 iteraciones) |
| Edición de video | Clipchamp |
| Investigación de palabras clave SEO | SEO.com + Google Trends |

---

## ⚙️ Buenas prácticas aplicadas

- **HTML semántico** y accesible (roles ARIA, `skip-link`, foco visible, contraste, `prefers-reduced-motion`).
- **CSS con design tokens** (variables), mobile-first y responsive (3 breakpoints).
- **JavaScript progresivo** sin dependencias: funciona aunque falle (progressive enhancement).
- **SEO técnico:** `title`/`description`/`keywords`, Open Graph, Twitter Card, `canonical` y datos
  estructurados **JSON-LD** (`SoftwareApplication`).
- **Rendimiento:** sin frameworks, fuentes con `preconnect`, video con `preload="none"`, animaciones por CSS/IntersectionObserver.

---

## 🔧 Personalización rápida

- **Logos:** el header usa `logo-horizontal-dark.webp` (fondo claro) y el footer `logo-horizontal-light.webp` (fondo oscuro). Reemplázalos por las versiones definitivas conservando los nombres.
- **Colores de marca:** edita las variables `--green-*` y `--navy-*` al inicio de `assets/css/styles.css`.
- **Formulario:** hoy simula el envío. Para producción, conéctalo a Formspree / un endpoint / CRM en
  `assets/js/main.js` (ver comentario *“Envío simulado”*).

---

*Una propuesta de Todosistemas STI · RuleForge AI.*


# Landing Page: Medicina Metabólica y Estética

Este proyecto es una landing page profesional diseñada para la conversión de cursos médicos, optimizada para **Netlify**.

## Despliegue en Netlify

1. Sube este repositorio a **GitHub**.
2. En Netlify, selecciona "Add new site" > "Import from Git".
3. Configura el comando de build: `npm run build`.
4. Directorio de publicación: `dist`.

## Variables de Entorno (Configurables)

Puedes editar estos valores en `constants.ts` o inyectarlos si usas un proceso de build avanzado:

- `GA_MEASUREMENT_ID`: ID de Google Analytics 4.
- `PAYMENT_URL_PRIMARY`: Link al checkout (Stripe/Paypal).
- `PROGRAM_PDF_URL`: Ruta al PDF del temario completo.
- `SUPPORT_EMAIL`: Email de contacto para dudas.
- `WEBHOOK_URL`: Opcional. URL de Zapier o Make para recibir leads en tiempo real.

## Características Técnicas

- **Netlify Forms**: El formulario de inscripción funciona automáticamente sin backend.
- **SEO**: Meta tags Open Graph, Twitter y Schema.org integrados.
- **Accesibilidad**: Marcado semántico y contraste validado (WCAG AA).
- **Seguridad**: Headers de seguridad configurados en `netlify.toml`.

## Tono Editorial
Profesional, clínico, directo. Basado en evidencia científica (PubMed/PMC placeholders).

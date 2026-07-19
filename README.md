# Film Stretch Líder — sitio de prueba

Versión integralmente revisada del sitio institucional de Film Stretch Líder. Este repositorio se usa para validar los cambios antes de aplicarlos al sitio productivo.

## Qué mejora

- navegación real entre todas las categorías;
- contenido específico para cada rubro;
- consultas de WhatsApp con producto y sucursal incluidos;
- modal accesible con foco controlado y cierre por teclado;
- contraste, navegación móvil y enlaces de contacto mejorados;
- títulos, descripciones, Open Graph, JSON-LD y sitemap completos;
- validación automática de enlaces, anclas y metadatos.

## Validar localmente

```bash
node --check script.js
node scripts/validate.mjs
```

Los HTML se generan desde `scripts/generate-site.mjs`. El repositorio de prueba no contiene `CNAME`, por lo que no modifica el dominio productivo.

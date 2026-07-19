import { mkdirSync, writeFileSync } from 'node:fs';

const SITE = 'https://www.filmstretchlider.com.ar';
const today = '2026-07-18';

const pages = [
  {
    slug: 'film-stretch',
    nav: 'Film stretch',
    title: 'Film stretch por mayor y a medida | Film Stretch Líder',
    description: 'Film stretch transparente y negro, por unidad, caja o volumen. Fabricación según gramaje, peso, medida y necesidad de cada operación.',
    kicker: 'Embalaje de alto rendimiento',
    h1: 'Film stretch por mayor y a medida',
    intro: 'Rollos para embalaje, logística, mudanzas y paletizado. Te ayudamos a elegir la configuración que entregue más film útil y mejor rendimiento real.',
    hero: ['assets/stock-film-stretch.webp', 1200, 1600, 'Stock de rollos de film stretch'],
    bullets: ['Transparente o negro', 'Venta por unidad, caja o volumen', 'Medidas y gramajes a pedido'],
    products: [
      ['Film stretch transparente', 'assets/film-stretch-3rollos.jpg', 414, 287, 'Para envolver, agrupar y proteger mercadería con buena visibilidad.', 'film stretch transparente'],
      ['Film stretch negro', 'assets/film-stretch-negro.jpg', 624, 912, 'Para proteger y ocultar el contenido durante almacenamiento y despacho.', 'film stretch negro'],
      ['Fabricación a medida', 'assets/tubo-fino.webp', 900, 540, 'Configuraciones según peso, medida, color, gramaje y uso de cada cliente.', 'film stretch fabricado a medida']
    ],
    guideTitle: 'El tubo también forma parte del peso',
    guideText: 'Un tubo más fino deja una mayor proporción de film útil dentro del mismo peso total. Por eso conviene comparar rendimiento, metraje y micrones reales, no sólo el peso del rollo.',
    guideImage: ['assets/comparativa-tubos-filmstretchlider-final.webp', 1448, 1086, 'Comparación entre tubos de film stretch fino y grueso']
  },
  {
    slug: 'cintas-adhesivas',
    nav: 'Cintas',
    title: 'Cintas adhesivas y de embalar | Film Stretch Líder',
    description: 'Cintas adhesivas transparentes, marrones y especiales para embalaje, despacho y pintura. Venta minorista y mayorista con asesoramiento.',
    kicker: 'Cierre seguro de cajas',
    h1: 'Cintas adhesivas para comercio y depósito',
    intro: 'Alternativas para armado de cajas, despacho, señalización y tareas de pintura. Consultá por medida, color y presentación disponibles.',
    hero: ['assets/cinta-embalar.jpg', 414, 287, 'Rollos de cinta adhesiva de embalar'],
    bullets: ['Transparente y marrón', 'Distintos anchos y largos', 'Compra por unidad o volumen'],
    products: [
      ['Cinta de embalar', 'assets/cinta-embalar.jpg', 414, 287, 'Alta adhesión para armado de cajas, depósito y despacho.', 'cinta de embalar']
    ],
    guideTitle: 'Elegí según superficie y exigencia',
    guideText: 'Para cotizar bien necesitamos saber qué se va a cerrar, el peso aproximado de la caja, la superficie y el consumo mensual. Así evitamos recomendar más material del necesario.'
  },
  {
    slug: 'papeleria-comercial',
    nav: 'Papelería',
    title: 'Papelería comercial, resmas y rollos térmicos | Film Stretch Líder',
    description: 'Resmas A4 y oficio, rollos térmicos, etiquetas y papeles especiales para comercios y oficinas. Consultá stock y opciones por volumen.',
    kicker: 'Reposición para el trabajo diario',
    h1: 'Papelería comercial e insumos de impresión',
    intro: 'Resmas, rollos térmicos, etiquetas y papeles especiales para oficinas, cajas, balanzas, logística y puntos de venta.',
    hero: ['assets/autor-a4-75g.jpg', 415, 415, 'Resma de papel A4 para oficina'],
    bullets: ['A4 y oficio', 'Rollos y etiquetas', 'Papeles especiales'],
    products: [
      ['Resmas A4 y oficio', 'assets/autor-a4-75g.jpg', 415, 415, 'Papel para impresión, copiado y administración diaria.', 'resmas A4 y oficio'],
      ['Rollos térmicos', 'assets/rollos-termicos.jpg', 415, 415, 'Para tickets, balanzas, cajas registradoras y puntos de venta.', 'rollos térmicos'],
      ['Etiquetas autoadhesivas', 'assets/etiquetas-rollo-trio.jpg', 415, 378, 'Presentaciones para impresión térmica, logística y rotulado.', 'etiquetas autoadhesivas'],
      ['Papeles especiales', 'assets/papel-foto-a4-pack.jpg', 385, 415, 'Opciones fotográficas, autoadhesivas y transfer según disponibilidad.', 'papeles especiales']
    ],
    guideTitle: 'Datos que agilizan una cotización',
    guideText: 'Indicá tamaño, gramaje, tipo de impresora o equipo, cantidad y frecuencia de reposición. Para rollos y etiquetas también ayuda conocer el ancho y diámetro requeridos.'
  },
  {
    slug: 'impresoras-toners',
    nav: 'Impresión',
    title: 'Impresoras láser y tóners | Film Stretch Líder',
    description: 'Impresoras láser Xerox, Pantum y Brother, más tóners originales y compatibles. Consultá disponibilidad por marca y modelo exacto.',
    kicker: 'Equipamiento para oficina y comercio',
    h1: 'Impresoras láser y tóners',
    intro: 'Equipos monocromáticos compactos y consumibles para distintos ritmos de trabajo. Confirmamos stock y compatibilidad antes de cotizar.',
    hero: ['assets/xerox-3020-wifi.jpg', 415, 362, 'Impresora láser Xerox 3020 con WiFi'],
    bullets: ['Equipos con USB o WiFi', 'Tóners por marca y modelo', 'Stock sujeto a confirmación'],
    products: [
      ['Xerox 3020 WiFi', 'assets/xerox-3020-wifi.jpg', 415, 362, 'Impresora láser monocromática compacta con conexión inalámbrica.', 'impresora Xerox 3020 WiFi'],
      ['Pantum P2500W', 'assets/pantum-p2500w.jpg', 415, 348, 'Alternativa láser monocromática para oficina y comercio.', 'impresora Pantum P2500W'],
      ['Brother HL-1200', 'assets/brother-hl1200.jpg', 415, 279, 'Equipo láser compacto para tareas administrativas habituales.', 'impresora Brother HL-1200'],
      ['Brother HL-1212W', 'assets/brother-hl1212w.jpg', 415, 415, 'Impresora láser monocromática con conectividad inalámbrica.', 'impresora Brother HL-1212W'],
      ['Tóners', 'assets/toners-genericos.webp', 700, 505, 'Originales y compatibles según marca y modelo exacto.', 'tóner para impresora']
    ],
    guideTitle: 'Compatibilidad antes de comprar',
    guideText: 'Para evitar errores, envianos la marca y el modelo completo de la impresora o una foto de la etiqueta del equipo. Confirmamos el consumible adecuado antes de cerrar el pedido.'
  },
  {
    slug: 'kits-revendedores',
    nav: 'Kits',
    title: 'Kits mayoristas para revendedores | Film Stretch Líder',
    description: 'Kits de productos de alta rotación para emprendedores y revendedores. Cuatro niveles de inversión, surtido adaptable y atención personalizada.',
    kicker: 'Una base para empezar o ampliar',
    h1: 'Kits mayoristas para revendedores',
    intro: 'Surtidos de film, cintas, rollos y accesorios que se pueden ajustar al perfil de tus clientes y a tu inversión inicial.',
    hero: ['assets/kit-seller-final.webp', 876, 520, 'Kit mayorista Seller para revendedores'],
    bullets: ['Surtido adaptable', 'Productos de rotación', 'Escala progresiva'],
    note: 'Ahorro estimado frente a la compra individual de una selección equivalente. La composición final, el precio y la vigencia se confirman al cotizar.',
    products: [
      ['Starter', 'assets/kit-starter-final.webp', 876, 520, 'Base liviana para comenzar con categorías de alta rotación.', 'kit revendedor Starter', '$390.000', '12% de ahorro estimado'],
      ['Experience', 'assets/kit-experience-final.webp', 876, 520, 'Surtido ampliado para incorporar más categorías de venta.', 'kit revendedor Experience', '$540.000', '16% de ahorro estimado'],
      ['Seller', 'assets/kit-seller-final.webp', 876, 520, 'Volumen intermedio pensado para reposición sostenida.', 'kit revendedor Seller', '$790.000', '20% de ahorro estimado'],
      ['Expert', 'assets/kit-expert-final.webp', 876, 520, 'Surtido de mayor escala para una operación mayorista.', 'kit revendedor Expert', '$1.400.000', '23% de ahorro estimado']
    ],
    guideTitle: 'El kit se adapta a tu canal de venta',
    guideText: 'Contanos dónde vendés, qué tipo de clientes atendés y cuánto querés invertir. Con esos datos podemos orientar la combinación sin cargar productos que no tengan salida para tu negocio.'
  },
  {
    slug: 'combos-empresas',
    nav: 'Combos',
    title: 'Combos de insumos para empresas | Film Stretch Líder',
    description: 'Combos de insumos para oficinas, comercios y depósitos. Alternativas por volumen con composición adaptable y cotización personalizada.',
    kicker: 'Reposición resuelta en un pedido',
    h1: 'Combos de insumos para empresas',
    intro: 'Selecciones pensadas para distintos entornos de trabajo. Se pueden ajustar según consumo, operación y presupuesto.',
    hero: ['assets/combo-full-empresa-final.webp', 693, 520, 'Combo completo de insumos para empresas'],
    bullets: ['Oficina, comercio o depósito', 'Composición adaptable', 'Mejor condición por volumen'],
    note: 'Ahorro estimado frente a la compra individual de una selección equivalente. La composición final, el precio y la vigencia se confirman al cotizar.',
    products: [
      ['Combo Oficina', 'assets/combo-oficina-final.webp', 693, 520, 'Papelería, cinta y accesorios para administración diaria.', 'Combo Oficina', '$149.999'],
      ['Combo Comercio', 'assets/combo-comercio-final.webp', 693, 520, 'Insumos para atención, despacho y reposición comercial.', 'Combo Comercio', '$199.000', '5% de ahorro estimado'],
      ['Combo Depósito', 'assets/combo-deposito-final.webp', 693, 520, 'Film, cintas, etiquetas y accesorios para trabajo operativo.', 'Combo Depósito', '$299.000', '10% de ahorro estimado'],
      ['Combo Full Empresa', 'assets/combo-full-empresa-final.webp', 693, 520, 'Una selección amplia para cubrir varias áreas de la empresa.', 'Combo Full Empresa', '$599.000', '15% de ahorro estimado']
    ],
    guideTitle: 'Cotización según consumo real',
    guideText: 'El mejor combo no siempre es el más grande. Indicá cantidad de puestos, tipo de operación y consumo aproximado para ajustar las cantidades a la reposición de tu empresa.'
  },
  {
    slug: 'contadoras-billetes',
    nav: 'Contadoras',
    title: 'Contadoras y detectoras de billetes | Film Stretch Líder',
    description: 'Contadoras y detectoras de billetes para comercios y oficinas. Asesoramiento según volumen de efectivo, funciones necesarias y stock.',
    kicker: 'Control ágil de efectivo',
    h1: 'Contadoras y detectoras de billetes',
    intro: 'Equipos para agilizar cierres de caja y tareas administrativas. Consultá por funciones, capacidad y disponibilidad.',
    hero: ['assets/contadora-billetes.jpg', 900, 700, 'Contadora de billetes profesional'],
    bullets: ['Conteo rápido', 'Funciones según modelo', 'Consulta de stock'],
    products: [
      ['Contadoras de billetes', 'assets/contadora-billetes.jpg', 900, 700, 'Para comercios, oficinas y operaciones con manejo frecuente de efectivo.', 'contadora de billetes'],
      ['Detección y control', 'assets/contadora-billetes.jpg', 900, 700, 'Consultá qué funciones de detección ofrece cada modelo disponible.', 'detectora de billetes']
    ],
    guideTitle: 'Qué conviene definir antes de elegir',
    guideText: 'El volumen diario, los tipos de billete, la necesidad de detección y la frecuencia de uso determinan el equipo apropiado. Te orientamos con esos datos y confirmamos las funciones del modelo disponible.'
  },
  {
    slug: 'sillas-gamer',
    nav: 'Sillas',
    title: 'Sillas gamer y de oficina | Film Stretch Líder',
    description: 'Sillas gamer y de oficina para espacios de trabajo y estudio. Consultá modelos, características, colores y stock disponible.',
    kicker: 'Comodidad para jornadas largas',
    h1: 'Sillas gamer y de oficina',
    intro: 'Opciones para puestos de trabajo, estudio y entretenimiento. Consultá modelos y disponibilidad actualizada.',
    hero: ['assets/sillas-gamer.jpg', 900, 620, 'Sillas gamer en distintos colores'],
    bullets: ['Uso laboral o recreativo', 'Modelos según disponibilidad', 'Asesoramiento antes de comprar'],
    products: [
      ['Sillas gamer', 'assets/sillas-gamer.jpg', 900, 620, 'Diseños envolventes para escritorios, juego y estudio.', 'silla gamer'],
      ['Sillas de oficina', 'assets/sillas-gamer.jpg', 900, 620, 'Consultá alternativas para puestos administrativos y home office.', 'silla de oficina']
    ],
    guideTitle: 'Elegí por uso y espacio disponible',
    guideText: 'Antes de cotizar, indicá el uso principal, las horas diarias, el espacio del escritorio y cualquier preferencia de color o regulación. Confirmamos medidas y características del modelo disponible.'
  }
];

const branches = [
  ['Liniers', 'Tonelero 5982, CABA', '1159531743', '11 5953-1743', 'ventas.liniers@filmstretchlider.com.ar', 'https://www.google.com/maps/search/?api=1&query=Tonelero+5982+CABA'],
  ['Zona Sur', 'Av. Hipólito Yrigoyen 8367, Lomas de Zamora', '1123380983', '11 2338-0983', 'ventas.zamora@filmstretchlider.com.ar', 'https://www.google.com/maps/search/?api=1&query=Av+Hipolito+Yrigoyen+8367+Lomas+de+Zamora'],
  ['Zona Norte', 'Av. Centenario 1137, San Isidro', '1141934557', '11 4193-4557', 'ventas.sanisidro@filmstretchlider.com.ar', 'https://www.google.com/maps/search/?api=1&query=Av+Centenario+1137+San+Isidro']
];

const categories = [
  ['film-stretch', 'Film stretch', 'Film transparente, negro y opciones a medida.', 'assets/film-stretch-3rollos.jpg', 414, 287],
  ['cintas-adhesivas', 'Cintas adhesivas', 'Cintas para cajas, despacho, señalización y pintura.', 'assets/cinta-embalar.jpg', 414, 287],
  ['papeleria-comercial', 'Papelería comercial', 'Resmas, rollos térmicos, etiquetas y papeles especiales.', 'assets/autor-a4-75g.jpg', 415, 415],
  ['impresoras-toners', 'Impresoras y tóners', 'Equipos láser y consumibles según marca y modelo.', 'assets/xerox-3020-wifi.jpg', 415, 362],
  ['contadoras-billetes', 'Contadoras de billetes', 'Equipos para agilizar el control diario de efectivo.', 'assets/contadora-billetes.jpg', 900, 700],
  ['sillas-gamer', 'Sillas gamer y oficina', 'Opciones para trabajo, estudio y entretenimiento.', 'assets/sillas-gamer.jpg', 900, 620],
  ['kits-revendedores', 'Kits para revendedores', 'Surtidos escalables con productos de alta rotación.', 'assets/kit-seller-final.webp', 876, 520],
  ['combos-empresas', 'Combos para empresas', 'Insumos agrupados para oficina, comercio y depósito.', 'assets/combo-full-empresa-final.webp', 693, 520]
];

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const phoneDisplay = (value) => value.replaceAll(' ', '&nbsp;').replaceAll('-', '&#8209;');
const image = (src, width, height, alt, prefix = '', eager = false) => `<img src="${prefix}${src}" width="${width}" height="${height}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

function nav(prefix, current = '') {
  const links = [
    ['film-stretch', 'Film stretch'], ['cintas-adhesivas', 'Cintas'], ['papeleria-comercial', 'Papelería'],
    ['impresoras-toners', 'Impresión'], ['kits-revendedores', 'Kits'], ['combos-empresas', 'Combos'], ['sucursales', 'Sucursales']
  ];
  return `<header class="site-header" data-site-header>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="header-inner">
    <a class="brand-logo" href="${prefix}index.html" aria-label="Film Stretch Líder — Inicio">${image('assets/logo-filmstretchlider.png', 760, 281, 'Film Stretch Líder', prefix, true)}</a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span aria-hidden="true">☰</span> Menú</button>
    <nav id="main-nav" class="main-nav" aria-label="Navegación principal">
      ${links.map(([slug, label]) => `<a href="${prefix}${slug}/"${current === slug ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
    </nav>
  </div>
</header>`;
}

function footer(prefix) {
  return `<footer class="site-footer">
  <div class="footer-grid">
    <div><a class="footer-logo" href="${prefix}index.html">Film Stretch Líder</a><p>Insumos para comercios, oficinas, depósitos y revendedores.</p></div>
    <div><h2>Productos</h2><ul>${categories.slice(0, 6).map(c => `<li><a href="${prefix}${c[0]}/">${c[1]}</a></li>`).join('')}</ul></div>
    <div><h2>Soluciones</h2><ul><li><a href="${prefix}kits-revendedores/">Kits para revendedores</a></li><li><a href="${prefix}combos-empresas/">Combos para empresas</a></li><li><a href="${prefix}sucursales/">Sucursales</a></li></ul></div>
    <div><h2>Contacto</h2><ul><li><a href="mailto:ventas.liniers@filmstretchlider.com.ar">Liniers</a></li><li><a href="mailto:ventas.zamora@filmstretchlider.com.ar">Zona Sur</a></li><li><a href="mailto:ventas.sanisidro@filmstretchlider.com.ar">Zona Norte</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© ${new Date().getFullYear()} Film Stretch Líder</span><a href="https://www.instagram.com/gonzaloramonrios/" target="_blank" rel="noopener noreferrer">Designed by GRR</a></div>
</footer>${modal()}
<script src="${prefix}script.js" defer></script>`;
}

function whatsappIcon() {
  return `<svg viewBox="0 0 448 512" aria-hidden="true" focusable="false"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-221.7 99.6-221.7 222 0 39.1 10.2 77.3 29.6 111L.3 480l117.7-30.9c32.4 17.7 68.9 27 106 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.3-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.4-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.1-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.6-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>`;
}

function modal() {
  return `<button class="floating-whatsapp js-open-whatsapp" type="button" data-product="consulta general" aria-label="Consultar por WhatsApp">${whatsappIcon()}</button>
<div class="whatsapp-modal" hidden>
  <div class="modal-backdrop" data-close-modal></div>
  <section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="whatsapp-title" aria-describedby="whatsapp-product">
    <button class="modal-close" type="button" data-close-modal aria-label="Cerrar">×</button>
    <p class="kicker">Atención personalizada</p><h2 id="whatsapp-title">Elegí una sucursal</h2>
    <p id="whatsapp-product" data-modal-product>Consulta general</p>
    <div class="branch-options">${branches.map(b => `<a href="#" data-whatsapp data-phone="549${b[2]}" data-branch="${b[0]}"><strong>${b[0]}</strong><span class="branch-address">${b[1]}</span><span class="branch-phone">WhatsApp: ${b[3]}</span></a>`).join('')}</div>
    <p class="modal-note">El mensaje incluirá el producto consultado para agilizar la respuesta.</p>
  </section>
</div>`;
}

function head({ title, description, path = '/', imageUrl = '/assets/hero-collage.webp', jsonLd }) {
  const canonical = `${SITE}${path}`;
  return `<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow">
  <link rel="canonical" href="${canonical}"><link rel="icon" type="image/png" href="${path === '/' ? '' : '../'}assets/favicon.png">
  <meta name="theme-color" content="#111111"><meta property="og:locale" content="es_AR"><meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${SITE}${imageUrl}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${SITE}${imageUrl}">
  <link rel="stylesheet" href="${path === '/' ? '' : '../'}styles.css?v=20260719b">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>`;
}

function productCards(products, prefix = '../') {
  return products.map(p => `<article class="product-card">
    <div class="card-media">${image(p[1], p[2], p[3], p[0], prefix)}</div>
    <div class="card-body"><h3>${p[0]}</h3><p>${p[4]}</p>${p[6] ? `<p class="price">${p[6]}</p>` : ''}${p[7] ? `<p class="saving">${p[7]}</p>` : ''}<button class="button button-small js-open-whatsapp" type="button" data-product="${esc(p[5] || p[0])}">Consultar</button></div>
  </article>`).join('');
}

function categoryPage(page) {
  const prefix = '../';
  const urlPath = `/${page.slug}/`;
  const ld = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'CollectionPage', '@id': `${SITE}${urlPath}#webpage`, url: `${SITE}${urlPath}`, name: page.h1, description: page.description, inLanguage: 'es-AR' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: page.h1, item: `${SITE}${urlPath}` }
      ] }
    ]
  };
  return `<!DOCTYPE html><html lang="es-AR">${head({ title: page.title, description: page.description, path: urlPath, imageUrl: `/${page.hero[0]}`, jsonLd: ld })}<body>
${nav(prefix, page.slug)}<main id="contenido">
  <nav class="breadcrumbs" aria-label="Migas de pan"><a href="../index.html">Inicio</a><span aria-hidden="true">/</span><span>${page.h1}</span></nav>
  <section class="category-hero"><div><p class="kicker">${page.kicker}</p><h1>${page.h1}</h1><p class="lead">${page.intro}</p><div class="hero-actions"><button class="button js-open-whatsapp" type="button" data-product="${esc(page.h1)}">Pedir cotización</button><a class="text-link" href="#opciones">Ver opciones</a></div><ul class="check-list">${page.bullets.map(x => `<li>${x}</li>`).join('')}</ul></div></section>
  <section class="section" id="opciones"><div class="section-heading"><p class="kicker">Opciones disponibles</p><h2>Encontrá la alternativa adecuada</h2><p>La disponibilidad y las especificaciones se confirman al momento de cotizar.</p></div>${page.note ? `<p class="disclaimer">${page.note}</p>` : ''}<div class="product-grid">${productCards(page.products, prefix)}</div></section>
  <section class="section guide"><div><p class="kicker">Antes de comprar</p><h2>${page.guideTitle}</h2><p>${page.guideText}</p><button class="button button-outline js-open-whatsapp" type="button" data-product="asesoramiento sobre ${esc(page.h1)}">Hablar con un asesor</button></div>${page.guideImage ? image(page.guideImage[0], page.guideImage[1], page.guideImage[2], page.guideImage[3], prefix) : '<div class="guide-mark" aria-hidden="true">✓</div>'}</section>
  <section class="section related"><div class="section-heading"><p class="kicker">También puede interesarte</p><h2>Más soluciones para tu operación</h2></div><div class="link-grid">${categories.filter(c => c[0] !== page.slug).slice(0, 4).map(c => `<a href="../${c[0]}/"><span>${c[1]}</span><small>${c[2]}</small></a>`).join('')}</div></section>
</main>${footer(prefix)}</body></html>`;
}

function homePage() {
  const ld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'Film Stretch Líder', url: `${SITE}/`, logo: `${SITE}/assets/logo-filmstretchlider.png`, email: 'ventas.liniers@filmstretchlider.com.ar', contactPoint: branches.map(b => ({ '@type': 'ContactPoint', telephone: `+54 9 ${b[3]}`, contactType: 'ventas', areaServed: 'AR', availableLanguage: 'Spanish' })) },
    { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'Film Stretch Líder', publisher: { '@id': `${SITE}/#organization` }, inLanguage: 'es-AR' }
  ]};
  const description = 'Film stretch por mayor y a medida, cintas, papelería, impresoras y otros insumos para comercios, depósitos, oficinas y revendedores.';
  return `<!DOCTYPE html><html lang="es-AR">${head({ title: 'Film stretch por mayor e insumos | Film Stretch Líder', description, path: '/', jsonLd: ld })}<body>
${nav('', 'home')}<main id="contenido">
  <section class="home-hero"><div class="hero-copy"><p class="kicker">Venta por unidad, caja o volumen</p><h1>Film stretch por mayor e insumos para empresas</h1><p class="lead">Film estirable, cintas, papelería y equipamiento para comercios, depósitos, oficinas y revendedores. Cotizamos según el consumo real de cada operación.</p><div class="hero-actions"><button class="button js-open-whatsapp" type="button" data-product="cotización general">Pedir cotización</button><a class="button button-dark" href="#categorias">Ver productos</a></div><ul class="check-list horizontal"><li>Medidas reales</li><li>Micrones reales</li><li>Atención personalizada</li></ul></div><div class="hero-collage">${image('assets/hero-collage.webp', 1200, 882, 'Film stretch, cintas y papelería disponibles', '', true)}<div><strong>Film transparente y negro</strong><span>También fabricamos según necesidad</span></div></div></section>
  <section class="proof"><div><strong>Más de 10 años</strong><span>de experiencia</span></div><div><strong>Tres sucursales</strong><span>Liniers, Sur y Norte</span></div><div><strong>Compra por volumen</strong><span>para empresas y reventa</span></div><div><strong>Asesoramiento</strong><span>antes de cotizar</span></div></section>
  <section class="section" id="categorias"><div class="section-heading"><p class="kicker">Catálogo organizado</p><h2>Elegí una categoría</h2><p>Cada sección reúne información y opciones específicas para que encuentres lo que necesitás sin mezclar rubros.</p></div><div class="category-grid">${categories.map(c => `<article class="category-card"><a class="card-media" href="${c[0]}/">${image(c[3], c[4], c[5], c[1])}</a><div class="card-body"><h3><a href="${c[0]}/">${c[1]}</a></h3><p>${c[2]}</p><a class="text-link" href="${c[0]}/">Ver categoría <span aria-hidden="true">→</span></a></div></article>`).join('')}</div></section>
  <section class="section comparison"><div><p class="kicker">Rendimiento real</p><h2>Más film útil, menos peso de tubo</h2><p>No alcanza con comparar el peso total del rollo. Un tubo más fino deja una proporción mayor de material aprovechable y puede reducir costo y desperdicio.</p><a class="button button-outline" href="film-stretch/">Entender la diferencia</a></div>${image('assets/comparativa-tubos-filmstretchlider-final.webp', 1448, 1086, 'Comparación real de tubos de film stretch')}</section>
  <section class="section audience"><article><p class="kicker">Para revender</p><h2>Kits escalables</h2><p>Cuatro niveles de inversión con surtido adaptable a tu canal y tipo de cliente.</p><a class="button" href="kits-revendedores/">Ver kits</a></article><article><p class="kicker">Para operar</p><h2>Combos empresariales</h2><p>Selecciones para oficina, comercio y depósito, ajustadas al consumo del equipo.</p><a class="button button-dark" href="combos-empresas/">Ver combos</a></article></section>
  <section class="section" id="sucursales"><div class="section-heading"><p class="kicker">Atención por zona</p><h2>Tres sucursales para elegir</h2><p>De lunes a viernes, de 10 a 18 h. Coordiná previamente disponibilidad y retiro.</p></div><div class="branch-grid">${branchCards('')}</div><div class="center"><a class="text-link" href="sucursales/">Ver todos los datos de contacto</a></div></section>
</main>${footer('')}</body></html>`;
}

function branchCards(prefix = '../') {
  return branches.map(b => `<article class="branch-card"><p class="kicker">Sucursal</p><h3>${b[0]}</h3><address>${b[1]}</address><p><a href="tel:+549${b[2]}">${phoneDisplay(b[3])}</a><br><a href="mailto:${b[4]}">${b[4]}</a></p><div><a class="text-link" href="${b[5]}" target="_blank" rel="noopener noreferrer">Ver en Maps</a><button class="button button-small js-open-whatsapp" type="button" data-product="consulta para ${b[0]}">Consultar</button></div></article>`).join('');
}

function branchesPage() {
  const urlPath = '/sucursales/';
  const ld = { '@context': 'https://schema.org', '@graph': branches.map(b => ({ '@type': 'Store', name: `Film Stretch Líder — ${b[0]}`, url: `${SITE}${urlPath}`, telephone: `+54 9 ${b[3]}`, email: b[4], address: { '@type': 'PostalAddress', streetAddress: b[1], addressCountry: 'AR' }, openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '10:00', closes: '18:00' }] })) };
  const description = 'Sucursales de Film Stretch Líder en Liniers, Lomas de Zamora y San Isidro. Teléfonos, correos, mapas y horarios de atención actualizados.';
  return `<!DOCTYPE html><html lang="es-AR">${head({ title: 'Sucursales y contacto | Film Stretch Líder', description, path: urlPath, jsonLd: ld })}<body>${nav('../', 'sucursales')}<main id="contenido"><nav class="breadcrumbs" aria-label="Migas de pan"><a href="../index.html">Inicio</a><span aria-hidden="true">/</span><span>Sucursales</span></nav><section class="category-hero"><div><p class="kicker">Atención por zona</p><h1>Sucursales y contacto</h1><p class="lead">Elegí la sede más cercana para consultar stock, coordinar una cotización o acordar el retiro de tu pedido.</p><ul class="check-list"><li>Lunes a viernes de 10 a 18 h</li><li>Consultas por teléfono, email o WhatsApp</li><li>Retiro coordinado previamente</li></ul></div></section><section class="section"><div class="section-heading"><p class="kicker">Datos directos</p><h2>Contactá la sucursal indicada</h2><p>Los teléfonos, correos y mapas son enlaces directos para evitar errores al copiar.</p></div><div class="branch-grid">${branchCards('../')}</div><p class="disclaimer"><strong>Retiros:</strong> coordiná stock y horario antes de acercarte. En Liniers se pueden acordar retiros fuera del horario habitual, de 7 a 24 h, con aviso previo.</p></section></main>${footer('../')}</body></html>`;
}

writeFileSync('index.html', homePage());
for (const page of pages) {
  mkdirSync(page.slug, { recursive: true });
  writeFileSync(`${page.slug}/index.html`, categoryPage(page));
}
mkdirSync('sucursales', { recursive: true });
writeFileSync('sucursales/index.html', branchesPage());

const urls = ['/', ...pages.map(p => `/${p.slug}/`), '/sucursales/'];
writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${SITE}${url}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);

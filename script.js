(function(){
  const root=document.body;
  let saved=localStorage.getItem('fsl-theme')||'theme-light';
  if(saved==='theme-dark') saved='theme-light';
  function applyTheme(theme){
    const allowed=['theme-light','theme-gray'];
    const finalTheme=allowed.includes(theme)?theme:'theme-light';
    root.classList.remove('theme-light','theme-gray','theme-dark');
    root.classList.add(finalTheme);
    localStorage.setItem('fsl-theme',finalTheme);
  }
  applyTheme(saved);
  document.querySelectorAll('[data-theme]').forEach(btn=>{
    btn.addEventListener('click',()=>applyTheme(btn.getAttribute('data-theme')));
  });

  const modal=document.querySelector('.whatsapp-modal');
  const label=modal?modal.querySelector('[data-modal-product]'):null;
  const options=modal?modal.querySelectorAll('.whatsapp-option'):[];
  function buildLink(number,product){
    const msg=product?`Hola, quiero consultar por ${product}. Vengo desde la web.`:'Hola, quiero hacer una consulta. Vengo desde la web.';
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  }
  function detectProduct(trigger){
    if(!trigger) return '';
    const explicit=trigger.getAttribute('data-product');
    if(explicit) return explicit;
    const card=trigger.closest('article, .info-block, .gallery-card, .printer-card, .kit-card, .branch-card');
    const title=card?card.querySelector('h2,h3,strong'):null;
    if(title) return title.textContent.trim();
    const txt=trigger.textContent.trim();
    return txt && !/whatsapp|cotizar|consultar/i.test(txt)?txt:'';
  }
  function openModal(product){
    if(label) label.textContent=product?`Consulta: ${product}`:'Elegí la sucursal para consultar';
    options.forEach(opt=>opt.setAttribute('href',buildLink(opt.getAttribute('data-number'),product)));
    if(modal) modal.classList.add('is-open');
  }
  function handleTrigger(trigger){
    trigger.addEventListener('click',ev=>{
      ev.preventDefault();
      openModal(detectProduct(trigger));
    });
  }
  document.querySelectorAll('.js-open-whatsapp').forEach(handleTrigger);
  document.querySelectorAll('a[href*="wa.me/"]').forEach(link=>{
    if(!link.classList.contains('whatsapp-option')) handleTrigger(link);
  });
  document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>modal&&modal.classList.remove('is-open')));
  document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&modal) modal.classList.remove('is-open')});
})();

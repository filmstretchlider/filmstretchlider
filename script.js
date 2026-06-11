
(function(){
  const modal=document.querySelector('.whatsapp-modal');
  const productText=modal?modal.querySelector('[data-modal-product]'):null;
  function openModal(product){if(!modal)return;if(productText)productText.textContent=product?'Consulta: '+product:'Elegí la sucursal para consultar';modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');}
  function closeModal(){if(!modal)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');}
  document.querySelectorAll('.js-open-whatsapp').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openModal(el.dataset.product||'consulta general');}));
  document.querySelectorAll('[data-close-modal], .modal-close').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
})();

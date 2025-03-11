document.addEventListener('DOMContentLoaded', function(){
  // Solo en index: si existe el botón CTA, bloqueamos el scroll inicialmente
  const ctaButton = document.querySelector('.cta-button');
  if(ctaButton){
    document.body.classList.add('no-scroll');
    ctaButton.addEventListener('click', function(e){
      e.preventDefault();
      // Remover la clase que bloquea el scroll
      document.body.classList.remove('no-scroll');
      // Desplazamiento suave a la sección de servicios
      document.querySelector('#servicios').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Botón "Volver al inicio" - se muestra al hacer scroll
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Habilitar audio tras el primer clic (aplicable en index)
  const video = document.querySelector('video');
  function enableAudio() {
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
    }
    document.removeEventListener('click', enableAudio);
  }
  document.addEventListener('click', enableAudio);
});

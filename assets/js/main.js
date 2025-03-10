document.addEventListener('DOMContentLoaded', function(){
  // Bloquear el scroll inicialmente
  document.body.classList.add('no-scroll');

  // Manejo del botón CTA
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function(e){
    e.preventDefault();
    // Remover la clase que bloquea el scroll
    document.body.classList.remove('no-scroll');
    // Desplazamiento suave a la sección de servicios
    document.querySelector('#servicios').scrollIntoView({ behavior: 'smooth' });
  });

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

  // Habilitar audio tras el primer clic
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

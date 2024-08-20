document.body.addEventListener('click', function() {
  // Oculta la pantalla de bienvenida
  document.getElementById('welcome-screen').style.display = 'none';
  // Muestra el contenido principal
  document.getElementById('main-content').style.display = 'block';
  // Reproduce el audio
  document.getElementById('background-audio').play();
});
function abrirPerfil() {
    var painelPerfil = document.getElementById('painelPerfil');
    
    // Se o painel do perfil estiver oculto, mostre-o
    if (painelPerfil.style.display === 'none') {
      painelPerfil.style.display = 'block';
    } else {
      // Se o painel do perfil estiver visível, oculte-o
      painelPerfil.style.display = 'none';
    }
  }
  
  function compartilharPerfil() {
    // Adicione seu código para compartilhar o perfil aqui
  }
  
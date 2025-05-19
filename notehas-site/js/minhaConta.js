window.onload = function() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  if (usuario) {
    document.getElementById('infoUsuario').innerHTML = `
      <p><strong>Nome:</strong> ${usuario.nome}</p>
      <p><strong>Instituição:</strong> ${usuario.instituicao}</p>
      <p><strong>Curso:</strong> ${usuario.curso}</p>
      <p><strong>Ano:</strong> ${usuario.ano}</p>
    `;
  }
  const upload = document.getElementById('uploadFoto');
  const foto = document.getElementById('fotoPerfil');
  upload.addEventListener('change', function() {
    const reader = new FileReader();
    reader.onload = function() {
      foto.src = reader.result;
      localStorage.setItem('fotoPerfil', reader.result);
    }
    reader.readAsDataURL(upload.files[0]);
  });
  const fotoSalva = localStorage.getItem('fotoPerfil');
  if (fotoSalva) {
    foto.src = fotoSalva;
  }
};

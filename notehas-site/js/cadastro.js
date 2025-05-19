document.getElementById('cadastroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  localStorage.setItem('nome', this.nome.value);
  localStorage.setItem('instituicao', this.instituicao.value);
  localStorage.setItem('curso', this.curso.value);
  localStorage.setItem('ano', this.ano.value);
  localStorage.setItem('fotoPerfil', 'https://via.placeholder.com/220x150?text=Foto'); // imagem padrão

  window.location.href = 'minha-conta.html';
});

function carregarconteudo(id) {
  var conteudos = document.getElementsByClassName('conteudo')
  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none'
  }
  document.getElementById(id).style.display = 'block'
}

// Exibir o primeiro conteúdo inicialmente
document.getElementById('conteudo1').style.display = 'block'

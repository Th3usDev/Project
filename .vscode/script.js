function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligth")
  //if(html.classList.contains('ligth')) {
  // html.classList.remove('ligth')
  //} else {
  // html.classList.add('ligth')
  // }
  const img = document.querySelector("#profile img")

  if (html.classList.contains("ligth")) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

  const text = document.querySelector("#profile")

  if (html.classList.contains("ligth")) {
    img.setAttribute("alt", "Foto de Myke Brito sorrindo, usando óculos escuros e blusa escura, com fundo azul")
  } else {
    img.setAttribute(
      "alt",
      "Foto de Myke Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo."
    )
  }

  // pegar a tag img

  //se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a imagem normal
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log(leitor.nome , leitor.sobrenome , leitor.livrosFavoritos[0].titulo)
  console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "é:", leitor.livrosFavoritos[0].titulo);
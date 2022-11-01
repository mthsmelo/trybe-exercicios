// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(array) {
  let contador = 0
  array.forEach((name) => {
    contador += name.split('').reduce((acc, curr) => {
      if (curr === "a" || curr === "A") {
        return acc + 1
      } return acc;
    }, 0);
  });
  return contador;
}

console.log(containsA(names));
    // escreva seu código aqui

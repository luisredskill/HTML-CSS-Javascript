const array = [1, 2, 4, 8]
const names = ["alice", "bob", "charlie", "danielle"]



// Elevando ao quadrado os elementos de um array

const map = array.map(element => element * element)

// Mesma função alongada

const map2 = map.map(function (element) {
    return element * element
}
)
// console.log(map)
// console.log(map2)

// Retornando o mesmo nome com a primeira letra maiúscula
const uppercase2 = names.map(element => element.charAt(0).toUpperCase() + element.slice(1)
)
// Mesma função alongada
const uppercase = names.map(function (element) {
    return element.charAt(0).toUpperCase() + element.slice(1)
})



// Adicionando tags ao conteúdo

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraph = ["<p>", "</p>"]

const pokemonsInParagraphs = pokemon.map(element => paragraph[0].concat(element.concat(paragraph[1])))

// Mesma função alongada
const pokemonsInParagraphs2 = pokemon.map(function(element){
    // return paragraph[0].concat(element.concat(paragraph[1]))
    return `<p>${element}</p>`
})


console.log(pokemonsInParagraphs)
console.log(pokemonsInParagraphs2)
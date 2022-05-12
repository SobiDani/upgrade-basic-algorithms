//1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0])

//1.2
const avenger = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avenger.shift()
avenger.unshift("IRONMAN")
console.log(avenger)

//1.3
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let numero = avengers1.length
console.log(numero);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("morty","summer")
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1])

//1.5
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters1.pop
console.log(rickAndMortyCharacters1[0], rickAndMortyCharacters1[rickAndMortyCharacters1.length-1]);

//1.6
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters2.splice(1,1)
console.log(rickAndMortyCharacters2);
//Hello World!
const pokemonFlex = document.querySelector(".pokemon-flex")

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
    (data) => {
        for (const singlePokemon of data.results) {
            populatePokeCard(singlePokemon)
        }
    }
)

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement("div")
    let pokeCard = document.createElement("div")
    console.log(singlePokemon)
}
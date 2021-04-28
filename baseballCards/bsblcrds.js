//Hello World!

const pokemonFlex = document.querySelector(".pokemon-flex")
const newCard = document.querySelector("#newCard")

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
    async (data) => {
        for (const singlePokemon of data.results) {
            await getAPIData(singlePokemon.url).then(
                (pokeData) => populatePokeCard(pokeData)
            )
        }
    }
)

newCard.addEventListener("click", () => {
    let pokeID = prompt("Pokemon ID of First Generation Pokemon (up to 151):")
    if(pokeID < 151 && pokeID > 0) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then(
            data => populatePokeCard(data))}
    else{
        alert("Try a number between 1 and 150.")}
})

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement("div")
    pokeScene.className = "scene"

    let pokeCard = document.createElement("div")
    pokeCard.className = "card"
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })

    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))

    pokeScene.appendChild(pokeCard)
    pokemonFlex.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement("div")
    pokeFront.className = "card__face card__face--front"

    let frontLabel = document.createElement("p")
    frontLabel.className = "frontLabel"
    frontLabel.textContent = pokemon.name

    let frontImage = document.createElement("img")
    frontImage.className = "frontImage"
    frontImage.src = `images/${pokemon.id}.png`

    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)

    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement("div")
    pokeBack.className = "card__face card__face--back"

    let backLabel = document.createElement("p")
    backLabel.className = "backLabel"
    backLabel.textContent = "Pokemon Stats:"

    let backType = document.createElement("p")
    backType.className = "backStat"
    backType.textContent = `Primary type: ${pokemon.types[0].type.name}` 

    let movesAbilities = document.createElement("p")
    movesAbilities.className = "backStat"
    movesAbilities.textContent = `Moves and abilities: ${pokemon.abilities[0].ability.name}, ${pokemon.moves[0].move.name} and ${pokemon.moves[1].move.name}.`

    let statDetails = document.createElement("p")
    statDetails.className = "backStat"
    statDetails.textContent = `Base HP: ${pokemon.stats[0].base_stat}, Base Defense: ${pokemon.stats[1].base_stat}.`

    pokeBack.appendChild(backLabel)
    pokeBack.appendChild(backType)
    pokeBack.appendChild(movesAbilities)
    pokeBack.appendChild(statDetails)

    return pokeBack
}

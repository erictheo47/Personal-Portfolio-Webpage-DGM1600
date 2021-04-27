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
    async (data) => {
        for (const singlePokemon of data.results) {
            await getAPIData(singlePokemon.url).then(
                (pokeData) => populatePokeCard(pokeData)
            )
        }
    }
)

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
    frontImage.src = `images/00${pokemon.id}.png`

    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)

    return pokeFront
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement("div")
    pokeBack.className = "card__face card__face--back"

    let backLabel = document.createElement("p")
    backLabel.className = "backLabel"
    backLabel.textContent = `Back of Card`

    pokeBack.appendChild(backLabel)

    return pokeBack
}

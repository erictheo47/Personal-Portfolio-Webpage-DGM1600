//Hello World!
//Declared Global variables for elements that already exist in HTML document.
const pokemonFlex = document.querySelector(".pokemon-flex")
const newCard = document.querySelector("#newCard")
//Set up function for fetching data from PokeAPI.
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
//Called that function to actually get data from API and populate a card.
getAPIData(`https://pokeapi.co/api/v2/pokemon?limit=25`).then(
    async (data) => {
        for (const singlePokemon of data.results) {
            await getAPIData(singlePokemon.url).then(
                (pokeData) => populatePokeCard(pokeData)
            )
        }
    }
)
/*Added ability to add a pokemon by Pokemon ID.
I only really like 1st generation Pokemon, so
that's what I limited user input to.*/
newCard.addEventListener("click", () => {
    let pokeID = prompt("Pokemon ID of First Generation Pokemon (up to 151):")
    if(pokeID < 151 && pokeID > 0) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeID}`).then(
            data => populatePokeCard(data))}
    else{
        alert("Try a number between 1 and 150.")}
})

/*This function takes each pokemon that is fetched from PokeAPI and populates
a new card based on specific information gathered from PokeAPI.*/
function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement("div")
    pokeScene.className = "scene"
    //This adds a specific class to the card to signify when it has been clicked.
    let pokeCard = document.createElement("div")
    pokeCard.className = "card"
    pokeCard.addEventListener('click', () => {
        pokeCard.classList.toggle('is-flipped')
    })
    //Added front and back of card to the card object.
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    //Added the card to the div which contains all necessary elements.
    pokeScene.appendChild(pokeCard)
    pokemonFlex.appendChild(pokeScene)
}

//Takes specific information and appends it to the front of the card.
function populateCardFront(pokemon) {
    let pokeFront = document.createElement("div")
    pokeFront.className = "card__face card__face--front"
    //Label on front of card is the Pokemon's name.
    let frontLabel = document.createElement("p")
    frontLabel.className = "frontLabel"
    frontLabel.textContent = pokemon.name
    //Grabs an image which is stored locally.
    let frontImage = document.createElement("img")
    frontImage.className = "frontImage"
    frontImage.src = `images/${pokemon.id}.png`
    //Appends image first so it shows up above the label.
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)

    return pokeFront
}

//Takes specific information and appends it to the back of the card.
function populateCardBack(pokemon) {
    let pokeBack = document.createElement("div")
    pokeBack.className = "card__face card__face--back"
    //Label on the back of the card is a title with no special text.
    let backLabel = document.createElement("p")
    backLabel.className = "backLabel"
    backLabel.textContent = "Pokemon Stats:"
    //Shows the Pokemon's primary type by accessing it using dot and bracket method.
    let backType = document.createElement("p")
    backType.className = "backStat"
    backType.textContent = `Primary type: ${pokemon.types[0].type.name}` 
    //Shows the Pokemon's first ability and first 2 moves.
    let movesAbilities = document.createElement("p")
    movesAbilities.className = "backStat"
    movesAbilities.textContent = `Moves and abilities: ${pokemon.abilities[0].ability.name}, ${pokemon.moves[0].move.name} and ${pokemon.moves[1].move.name}.`
    //Shows the pokemon's base HP and base Defense.
    let statDetails = document.createElement("p")
    statDetails.className = "backStat"
    statDetails.textContent = `Base HP: ${pokemon.stats[0].base_stat}, Base Defense: ${pokemon.stats[1].base_stat}.`
    //Appends all of the above children to the back of the card.
    pokeBack.appendChild(backLabel)
    pokeBack.appendChild(backType)
    pokeBack.appendChild(movesAbilities)
    pokeBack.appendChild(statDetails)

    return pokeBack
}

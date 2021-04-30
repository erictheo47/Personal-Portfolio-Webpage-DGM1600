/*I used the planets and species from star wars because
they've always been the most interesting to me.*/

//Imported object from planets.js
import { planets } from '../starWars/planets.js'
//Imported object from species.js
import { species } from '../starWars/species.js'

//Declared global variable for parts of the script to refer to.
const planetsList = document.querySelector("#planetsList")

//Used a for loop to iterate through the first 44 planets in the document.
//The planets beyond that didn't have images. :( sadface.
for (let i = 0; i < planets.length - 43; i++) {
    let planet = planets[i].name
    let weather = planets[i].climate
    //Creates a tile that when clicked opens a new tab.
    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/planets?page=1"
    newTile.target = "_blank"
    //Placeholder for image and caption, or Figure.
    let newFigure = document.createElement("figure")
    //Pulls an image from the Star Wars Visual Guide that matches the planet's id.
    let newImg = document.createElement("img")
    newImg.src = `https://starwars-visualguide.com/assets/img/planets/${i + 2}.jpg`
    //Adds the planet's name to the figure.
    let newCaption = document.createElement("figcaption")
    newCaption.classList.add("primary-info")
    newCaption.textContent = planet
    //Adds the planet's climate to the figure.
    let anotherCaption = document.createElement("figcaption")
    anotherCaption.classList.add("secondary-info")
    anotherCaption.textContent = "Climate: " + weather
    //Appends captions to figure, and figure to the tile, and the link to the list.
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    planetsList.appendChild(newTile)
}

//Declared global variable for parts of the script to refer to.
let speciesList = document.querySelector("#speciesList")

//Used a for loop to iterate through the species in the document.
/*The last four species in the list were in a different order than the image source.
I had to write pretty much the same code 4 times but adjust the for loop and the image
source on each one. It wasn't ideal, but I couldn't figure out another way to get the 
images to match the species. :( another sadface.*/
for (let i = 35; i < species.length - 1; i++) {
    let race = species[i].name
    let type = species[i].classification

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/1.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.classList.add("primary-info")
    newCaption.textContent = race

    let anotherCaption = document.createElement("figcaption")
    anotherCaption.classList.add("secondary-info")
    anotherCaption.textContent = "Classification: " + type
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 34; i < species.length - 2; i++) {
    let race = species[i].name
    let type = species[i].classification

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/2.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.classList.add("primary-info")
    newCaption.textContent = race

    let anotherCaption = document.createElement("figcaption")
    anotherCaption.classList.add("secondary-info")
    anotherCaption.textContent = "Classification: " + type
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 33; i < species.length - 3; i++) {
    let race = species[i].name
    let type = species[i].classification

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/3.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.classList.add("primary-info")
    newCaption.textContent = race

    let anotherCaption = document.createElement("figcaption")
    anotherCaption.classList.add("secondary-info")
    anotherCaption.textContent = "Classification: " + type
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 36; i < species.length; i++) {
    let race = species[i].name
    let type = species[i].classification

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/4.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.classList.add("primary-info")
    newCaption.textContent = race

    let anotherCaption = document.createElement("figcaption")
    anotherCaption.classList.add("secondary-info")
    anotherCaption.textContent = "Classification: " + type
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

//Those first 4 loops are for specific species.
//Here's where the code actually means something.
for (let i = 0; i < species.length - 4; i++) {
    let race = species[i].name
    let type = species[i].classification
    //Iterates through each species and creates a tile for them to go to.
    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"
    //Makes a figure for the image and caption to be part of.
    let newFigure = document.createElement("figure")
    //Gets an image from the Star Wars Visual Guide that matches the species's id.
    let newImg = document.createElement("img")
    newImg.src = `https://starwars-visualguide.com/assets/img/species/${i + 5}.jpg`
    //States the name of the race as a caption.
    let newCaption = document.createElement("figcaption")
    newCaption.classList.add("primary-info")
    newCaption.textContent = race
    //States the classification of the race such as mammal or amphibian.
    let anotherCaption = document.createElement("figcaption")
    anotherCaption.classList.add("secondary-info")
    anotherCaption.textContent = "Classification: " + type
    //Appends captions and image to figure, appends figure to tile, appends tile to list.
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

import { planets } from '../stuff/planets.js'
import { species } from '../stuff/species.js'

let planetsList = document.querySelector("#planetsList")

for (let i = 0; i < planets.length - 43; i++) {
    let planet = planets[i].name
    let weather = planets[i].climate

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/planets?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = `https://starwars-visualguide.com/assets/img/planets/${i + 2}.jpg`

    let newCaption = document.createElement("figcaption")
    newCaption.textContent = planet

    let anotherCaption = document.createElement("figcaption")
    anotherCaption.textContent = "Climate: " + weather
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    planetsList.appendChild(newTile)
}

let speciesList = document.querySelector("#speciesList")

for (let i = 35; i < species.length - 1; i++) {
    let race = species[i].name

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/1.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.textContent = race
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 34; i < species.length - 2; i++) {
    let race = species[i].name

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/2.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.textContent = race
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 33; i < species.length - 3; i++) {
    let race = species[i].name

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/3.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.textContent = race
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 36; i < species.length; i++) {
    let race = species[i].name

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = 'https://starwars-visualguide.com/assets/img/species/4.jpg'

    let newCaption = document.createElement("figcaption")
    newCaption.textContent = race
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}

for (let i = 0; i < species.length - 4; i++) {
    let race = species[i].name
    let type = species[i].classification

    let newTile = document.createElement("a")
    newTile.classList.add("project-tile")
    newTile.href = "https://starwars-visualguide.com/#/species?page=1"
    newTile.target = "_blank"

    let newFigure = document.createElement("figure")

    let newImg = document.createElement("img")
    newImg.src = `https://starwars-visualguide.com/assets/img/species/${i + 5}.jpg`

    let newCaption = document.createElement("figcaption")
    newCaption.textContent = race

    let anotherCaption = document.createElement("figcaption")
    anotherCaption.textContent = "Classification: " + type
    
    newFigure.appendChild(newImg)
    newFigure.appendChild(newCaption)
    newFigure.appendChild(anotherCaption)
    newTile.appendChild(newFigure)
    speciesList.appendChild(newTile)
}
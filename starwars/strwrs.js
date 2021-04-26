import { planets } from '../starwars/planets'
import { species } from '../starwars/species'

let planetsList = document.querySelector("#planetsList")

for (let i = 0; i < planets.length; i++) {
    let planet = planets[i].name
    let newItem = document.createElement("a");
    newItem.classList.add("project-tile");
    newItem.textContent = planet
    planetsList.appendChild(newItem)
}

let speciesList = document.querySelector("#speciesList")

for (let i = 0; i < species.length; i++) {
    let race = species[i].name
    let newItem = document.createElement("a");
    newItem.classList.add("project-tile");
    newItem.textContent = race
    speciesList.appendChild(newItem)
}


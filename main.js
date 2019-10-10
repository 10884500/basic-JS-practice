import { films } from "./assets/films.js"
import { people } from "./assets/people.js"


let mainArea = document.querySelector("main")


films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv);
});


people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = "Gender: " + person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv);
});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1, 2)
    }   else {
        return charID
    }
}





/*
let mainSection = document.querySelector('main')

let film1 = document.createElement('div')
let film2 = document.createElement('div')
let film3 = document.createElement('div')
let film4 = document.createElement('div')
let film5 = document.createElement('div')
let film6 = document.createElement('div')
let film7 = document.createElement('div')

film1.textContent = films[0].opening_crawl
film2.textContent = films[1].opening_crawl
film3.textContent = films[2].opening_crawl
film4.textContent = films[3].opening_crawl
film5.textContent = films[4].opening_crawl
film6.textContent = films[5].opening_crawl
film7.textContent = films[6].opening_crawl

mainSection.appendChild(film1)
mainSection.appendChild(film2)
mainSection.appendChild(film3)
mainSection.appendChild(film4)
mainSection.appendChild(film5)
mainSection.appendChild(film6)
mainSection.appendChild(film7)


for (let i = 0; index < array.length; i++) {
    const element = array[i];
    
}
*/
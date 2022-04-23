function buildRoot(){
    const root = document.querySelector('#root')
    root.innerHTML = 
    '<div id="tittle"><h1 id="tittle-api">Rick and Morty API</h1></div>'+
    '<div id=conten>'+
        '<div id="sidebar">'+
            '<div id="episodes"></div>'+
            '<button id="loadMore">Load More</button>'+
        '</div>'+
        '<div id="main"></div>'
    '</div>'
}

function loadEpisodes(){
    fetch("https://rickandmortyapi.com/api/episode/")
        .then(res => res.json())
        .then(episodes => showEpisode(episodes))
}


// function loadContent (){
//     fetch("https://rickandmortyapi.com/api/character/2")
//     .then(res => res.json())
//     .then(img => showContent(img))
//     .catch(console.log('error'))
// }


function showEpisode(element){
    const boxEpisodes = document.getElementById('episodes')
    element.results
        .map(obj => createEpisodeLink(obj))
        .forEach(element => boxEpisodes.appendChild(element))
    // console.log(element.results);
}

function createEpisodeLink(element){
    const episodes = document.createElement('div')
    episodes.innerText = element.name
    episodes.classList.add('episodesLinks')
    episodes.addEventListener("click", () => showContentTitle(element))
    return episodes
}
    
function showContentTitle(element){
    const main = document.getElementById('main')
    main.innerHTML=
    '<h1 class=titleEpisode>' + element.name + '</h1>'+
    '<h2 class=subTitleEpisode>' + element.episode + ' | ' + element.air_date+'</h2>'
    
    const characterContainer = document.createElement('div')
    characterContainer.id = 'characterContainer'
    main.appendChild(characterContainer)
    
    const urlCharacter = element.characters
    urlCharacter.map((characterLink) => cardCharacter(characterLink)).forEach((element) => characterContainer.appendChild(element))
}

function cardCharacter(characterLink){
    const div = document.createElement('div')
    div.classList.add('cardCharacter')
    fetch(characterLink)
        .then(result => result.json())
        .then(card => characterThumbnail(div, card))
    return div
    // console.log(card.image);
}

function characterThumbnail(div, card){
    div.innerHTML = `<img class = cardImage src= ${card.image}></img>`+
    `<h3>${card.name}</h3>`+
    `<h4>${card.species} | ${card.status}`
}




buildRoot()
loadEpisodes()
// loadContent()

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
    element.results
    .forEach(obj => createEpisodeLink(obj))
}

function createEpisodeLink(element){
    const episodes = document.createElement('div')
    document.getElementById('episodes').appendChild(episodes)
    episodes.innerText = element.name
    episodes.classList.add('episodesLinks')
    episodes.addEventListener("click", () => showContentTitle(element))
    episodes.addEventListener("click", saludo)
    return episodes
}
    
function showContentTitle(element){
    console.log(element.name);
    const main = document.getElementById('main')

    main.innerHTML=
    '<h1 class=titleEpisode>' + element.name + '</h1>'+
    '<h2 class=subTitleEpisode>' + element.episode + ' | ' + element.air_date+'</h2>'+
    ('<div id=boxCharacter>hola</div>')
}
function saludo(){
    console.log('hola');
}




buildRoot()
loadEpisodes()
// loadContent()

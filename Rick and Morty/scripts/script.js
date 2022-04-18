function buildRoot(){
    const root = document.querySelector('#root')
    root.innerHTML = 
    '<div id="tittle"><h1 id="tittle-api">Rick and Morty API</h1></div>'+
    '<div id=conten>'+
        '<div id="sidebar">'+
            '<div id="episodes">'+
                '<div>hola</div>'+
            '</div>'+
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

function showEpisode(element){
    const result = element.results
    console.log(result);
    result.forEach(obj => {
        console.log(obj.name);
    });
}




loadEpisodes()
buildRoot()

const inputBusca = document.getElementById('busca');
const container = document.getElementById('grid-musicas');
const player = document.getElementById('audio-player');
const trackInfo = document.getElementById('track-info');

inputBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const termo = inputBusca.value;
        if (termo) buscarMusica(termo);
    }
});


function buscarMusica(termo) {
  
    const antigo = document.getElementById('itunes-script');
    if (antigo) antigo.remove();

    const script = document.createElement('script');
    script.id = 'itunes-script';
   
    script.src = `https://itunes.apple.com/search?term=${termo}&media=music&limit=15&callback=processarResposta`;
    document.body.appendChild(script);
}


window.processarResposta = function(data) {
    exibirResultados(data.results);
};

function exibirResultados(musicas) {
    container.innerHTML = ''; 

    musicas.forEach(musica => {
        const card = document.createElement('div');
        card.className = 'card-music';
        
        const capaUrl = musica.artworkUrl100.replace('100x100', '400x400');

        card.innerHTML = `
            <img src="${capaUrl}" alt="${musica.trackName}">
            <h3>${musica.trackName}</h3>
            <p>Artista: ${musica.artistName}</p>
            <p>CD: ${musica.collectionName}<p>
        `;

        card.onclick = () => {
            player.src = musica.previewUrl;
            player.play();
            trackInfo.innerText = `Tocando: ${musica.trackName}`;
        };

        container.appendChild(card);
    });
}

document.getElementById('searchButton').addEventListener('click', function () {
  const searchText = document.getElementById('searchText').value;
  
  fetch(`https://api.lyrics.ovh/suggest/${searchText}`)
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      ShowData(data);
      
    })
});


function ShowData(data) {
  //console.log(data.data[0]);
  const items = data.data;
  const songContainer = document.getElementById('loadedSong');
  for (let i = 0; i < items.length; i++) {
          const song = items[i];
          //console.log(song.artist.name);
          const divv = document.createElement('div');
          divv.innerHTML = `
          <div class="search-result col-md-8 mx-auto py-4">
                <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 id="lyrics-name" class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span id="albumBy">${song.artist.name}</span></p>
                        <audio controls>
                        <source src="${song.preview}" type="audio/mpeg">
                         </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="LoadLyrics('${song.artist.name}','${song.title}')" id="getLyrics" class="btn btn-success">Get Lyrics</button>
                    </div>
                </div>
            </div>
          `;
          songContainer.appendChild(divv);
  };
};

//Lyrics details Show
const songDetailsContainer = document.getElementById('loadLyrics');
function LoadLyrics(songArtistName, songTitle) {
  fetch(`https://api.lyrics.ovh/v1/${songArtistName}/${songTitle}`)
    .then(res => res.json())
    .then(data => {
      console.log(data,songArtistName,songTitle);
      const p = document.createElement('p');
      p.innerHTML =`<p></p>`
  })
}

document.getElementById('searchButton').addEventListener('click', function () {
  const searchText = document.getElementById('searchText').value;
  
  fetch(`https://api.lyrics.ovh/suggest/${searchText}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
})

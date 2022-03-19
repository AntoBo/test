const pokemonEl = document.querySelector('.pokemon-container');

fetch('https://pokeapi.co/api/v2/pokemon/199')
  .then(responce => {
    return responce.json();
  })
  .then(pokemon => {
    console.log(pokemon.sprites.front_default);
    pokemonEl.innerHTML = `<img src="${pokemon.sprites.front_default}">`;
  })
  .catch(error => {
    console.log('pokemon is lost with error: ', error);
  });

const pokemonEl = qs



fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(responce => {
    return responce.json();
  })
  .then(pokemon => {
    console.log(pokemon.sprites.front_default);
  })
  .catch(error => {
    console.log(error);
  });

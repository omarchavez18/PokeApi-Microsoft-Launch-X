const fetchPokemon = () => {
  const pokename = document.getElementById("pokename");
  let pokeInput = pokename.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  // aqui abajo el fetch solicita la info del url de la API
  // LLAMADA DEL API
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
        pokeImage("./pikachu-llorando.gif");
      } else {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      let pokeImg = data.sprites.front_default;
      console.log(pokeImg);
      pokeImage(pokeImg);
    });
};

//fetchPokemon();

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
/*pokeImage(
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
);*/

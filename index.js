const fetchPokemon = () => {
  const pokename = document.getElementById("pokename");
  let pokeInput = pokename.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  // aqui abajo el fetch solicita la info del url de la API
  // LLAMADA DEL API
  fetch(url)
    .then((res) => {
      {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      //name
      let name = data.species.name;
      pokeNombre(name);
      //id
      let id = data.id;
      pokeId(id);
      //movimiento
      let move = data.moves[0].move.name;
      pokeMove(move);
      //hp
      let hp = data.stats[0].base_stat;
      pokeHp(hp);
      //attack
      let attack = data.stats[1].base_stat;
      pokeAttack(attack);
      //defense
      let defense = data.stats[2].base_stat;
      pokeDefense(defense);
      //specialAttack
      specialAttack = data.stats[3].base_stat;
      pokeSpecialAttack(specialAttack);
      //special defense
      let specialDefense = data.stats[4].base_stat;
      pokeSpecialDefense(specialDefense);
      //speed
      let speed = data.stats[5].base_stat;
      pokeSpeed(speed);
      //type
      let type = data.types[0].type.name;
      pokeType(type);

      //height
      let height = data.height;
      pokeHeight(height);

      //weight
      let weight = data.weight;
      pokeWeight(weight);

      //img
      let pokeImg = data.sprites.other.home.front_default;
      pokeImage(pokeImg);
    })

    .catch((error) => {
      console.log(error, "llamada fallo");
      pokeImage("./images/pikachu-llorando.gif");
      // const error = document.getElementById("mensajeError");
    });
};

//

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};
const pokeNombre = (name) => {
  const pokeNombre = document.getElementById("pokeNombre");
  pokeNombre.innerHTML = `NAME: ${name.toUpperCase()}`;
};

const pokeId = (id) => {
  const pokeId = document.getElementById("pokeId");
  pokeId.innerHTML = `ID : ${id}`;
};

const pokeType = (type) => {
  const pokeType = document.getElementById("pokeType");
  pokeType.innerHTML = `Type : ${type.toUpperCase()}`;
};

const pokeSpeed = (speed) => {
  const pokeSpeed = document.getElementById("pokeSpeed");
  pokeSpeed.innerText = `Speed  ${speed}`;
};

const pokeSpecialDefense = (specialDefense) => {
  const pokeSpecialDefense = document.getElementById("pokeSDefense");
  pokeSpecialDefense.innerHTML = `Special defense  ${specialDefense}`;
};

const pokeWeight = (weight) => {
  const pokeWeight = document.getElementById("pokeWeight");
  pokeWeight.innerHTML = `Weight : ${weight} `;
};

const pokeHeight = (height) => {
  const pokeHeight = document.getElementById("pokeHeight");
  pokeHeight.innerHTML = `Height : ${height} `;
};

const pokeSpecialAttack = (specialAttack) => {
  const pokeSpecialAttack = document.getElementById("pokeSAttack");
  pokeSpecialAttack.innerHTML = `Special attack  ${specialAttack}`;
};

const pokeMove = (move) => {
  const pokeMove = document.getElementById("pokeMove");
  pokeMove.innerHTML = `Move ${move}`;
};

const pokeHp = (hp) => {
  const pokeHp = document.getElementById("pokeHp");
  pokeHp.innerHTML = `Hp <br>   ${hp}`;
};
const pokeAttack = (attack) => {
  const pokeAttack = document.getElementById("pokeAttack");
  pokeAttack.innerHTML = `Attack  ${attack}`;
};
const pokeDefense = (defense) => {
  const pokeDefense = document.getElementById("pokeDefense");
  pokeDefense.innerHTML = `Defense  ${defense}`;
};

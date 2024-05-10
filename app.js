let button = document.getElementById("button");
let number = document.getElementById("number");
let name = document.getElementById("name");
let pokemonSprite = document.getElementById("pokemonSprite");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 150) + 1;
    let request = (`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
    
    let data = await fetch(request);
    let dataToJson = await data.json();
    pokemonSprite.src = dataToJson.sprites.front_default;
    console.log(dataToJson);

    number.innerHTML = ` # ` + dataToJson.id;
    name.textContent = dataToJson.name;

};
changePokemon();
button.addEventListener("click", changePokemon);
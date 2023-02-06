import "./PokeApi.css";

const template = () => {


  return `
    <section class="pokeapi">
        <h2>PokeApi</h2>
        <div class="filter">
            <input type="text" id="searchInput" placeholder="Busca Pokémon..." />
                  </div>
        <div class="filter"> 
            <button class="regionBtn container" id="Kanto" data-offset="0" data-num="151">Kanto</button>
            <button class="regionBtn" id="Jotho" data-offset="151" data-num="100">Jotho</button>
            <button class="regionBtn" id="Hoenn" data-offset="251" data-num="100">Hoenn</button>
            <button class="regionBtn" id="Shino" data-offset="351" data-num="100">Shino</button>
        </div>
        <div id="pokeContainer"></div>
   </section>
 `
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
  loadFromRegion();
};

const addListeners = () => {
    document
        .querySelectorAll(".regionBtn").forEach( (btn) => {
            btn.addEventListener("click", (e) => loadFromRegion(e.target.id));
        })

    document.querySelector('#searchInput').addEventListener('input', (e) => filterPokemons());


}

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
let allPokemon = [];
const loadFromRegion = async (region = 'Kanto') => {
    console.log(region);
    let button = document.querySelector(`#${region}`);
    let offset = parseInt(button.dataset.offset);
    let num = parseInt(button.dataset.num);

    let url = BASE_URL+'?offset='+offset+'&limit='+num;
    console.log(url);
    let response = await fetch(url)
    let listPkm = await response.json()
    console.log(listPkm);
    let listAllPks = await loadPokemons(listPkm.results)
    console.log(listAllPks);
    printPokemons(listAllPks);
    allPokemon = listAllPks;
}

const loadPokemons = async (pk) => {
    let savePkm = [];
    let container =  document.querySelector('#pokeContainer');
    container.innerHTML="";
    for (const p of pk) {
        let response = await fetch(p.url);
        let pkdata = await response.json();
        let tmpPkm = {}
        tmpPkm['id'] = pkdata.id;
        tmpPkm['id_formatter'] = "#"+String(pkdata.id).padStart(3,0);
        tmpPkm['name'] = pkdata.name;
        tmpPkm['weight'] = pkdata.weight;
        tmpPkm['height'] = pkdata.height;
        tmpPkm['sprite_front'] = pkdata.sprites.versions["generation-v"]["black-white"].animated.front_default;
        tmpPkm['sprite_back'] = pkdata.sprites.versions["generation-v"]["black-white"].animated.back_default;
        tmpPkm['types'] = [];
        for (const type of pkdata.types) {
            tmpPkm.types.push(type.type.name);
        }
        savePkm[pkdata.id] = tmpPkm;
            // printPokemon(tmpPkm);
            // console.log(allPokemon);
        
    }
    return savePkm;
}

const searchBtn = document.querySelector("#searchBtn");


const init = () => {
  getPokemon();
};

const getPokemon = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  const pokemons = data;
   mapPokemons(pokemons);
};


const printPokemon = (pokemon) => {
    const container = document.querySelector("#pokeContainer");
    const div = document.createElement("div");
    div.innerHTML = `
 
    <h2>${pokemon.id_formatter} - ${pokemon.name}</h2>
    <h3 class=${pokemon.types[0]}</h3>
    <img src=${pokemon.sprite_front} alt=${pokemon.name} />
    `;
    container.appendChild(div);
  };


const printPokemons = (pokemons) => {
    console.log(pokemons);
  const container = document.querySelector("#pokeContainer");
  container.innerHTML = "";
  for (const pokemon of pokemons) {
    console.log(pokemon);
    if (!pokemon) continue;
    const container = document.querySelector("#pokeContainer");
    const div = document.createElement("div");
    div.className = pokemon.name + " pokeCard";
    div.innerHTML = `
    <section class="container">
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
    <h2>${pokemon.id_formatter} - ${pokemon.name}</h2>
       <h3>${pokemon.types[0]} - ${pokemon.types[1]}</h3>
    <img src=${pokemon.sprite_front} alt=${pokemon.name} /></div>
    <div class="flip-card-back">
    <h2>${pokemon.id_formatter} - ${pokemon.name}</h2>
    <h3>${pokemon.weight /10} kg - ${pokemon.height*10} cm</h3>
    <img src=${pokemon.sprite_back} alt=${pokemon.name} /></div> </div>
    </div>
    </section>
  </text>
  </svg>
    `;

       container.appendChild(div);
  }
};


//Le pasamos una lista de characters (seran los characters globales)
const filterPokemons = () => {
  //Creamos un nuevo array filtrando los personajes
  console.log(allPokemon);
  const searchInput = document.querySelector("#searchInput");
//   let filteredPokemons = allPokemon.filter((pokemon) =>{
//     //El nombre del personaje en minuscula tiene que incluir el valor de input en minuscula
//     console.log(pokemon.name);
//     console.log(searchInput.value.toLowerCase());
//     pokemon.name.toLowerCas().includes(searchInput.value.toLowerCase())
//   });;

  const filteredPokemons = allPokemon.filter((pk) => pk.name.toLowerCase().includes(searchInput.value.toLowerCase()));
  console.log(filteredPokemons);
  printPokemons(filteredPokemons);
};


init();

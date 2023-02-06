import "./Home.css";
import { initContent } from "../../main";

const template = () => `
<section class="home">
    <h2>Home</h2>
    <div class="box">   <a href="#" id="pokeapilink2">PokeApi</a></div>
    <div  class="box"><a href="#" id="pptlink2">Piedra-Papel-Tijera Lagarto Spock!</a></div>
   
</section>
`;
 //<div  class="box"><a href="#" id="quizlink2">Quiz!</a></div>

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};

const addListeners = () => {

  document
    .querySelector("#quizlink2")
    .addEventListener("click", () => initContent("Quiz"));

  document
    .querySelector("#pokeapilink2")
    .addEventListener("click", () => initContent("PokeApi"));
    document
    .querySelector("#pptlink2")
    .addEventListener("click", () => initContent("PPT"));
};
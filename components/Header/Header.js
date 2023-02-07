import { initContent } from "../../main";
import "./Header.css";
import {Background as BackgroundFunction} from "../background/Background.js"

const template = () => {

  let loginButton = (localStorage.getItem("user")) ? ' <a href="#" id="loginlink">Logout</a>' : ' <a href="#" id="loginlink">Login</a>';


return `
<nav>
    <ul>
 <li>
    <a href="#" id="homelink">Home</a>
</li>
<div id="navlist">


<li>
<a href="#" id="pokeapilink">PokeApi</a>
 </li>
  <li><a href="#" id="pptlink">Piedra-Papel-Tijera-Lagarto-Spock</a></li>
   </div>

          <li>
        ${loginButton}
                  </li> 
                   <li><button id="backgroundlink">Change Background!</button> </li>
    </ul>
</nav>
`;
}




const addListeners = () => {
  document
    .querySelector("#homelink")
    .addEventListener("click", () => initContent("Home"));
  // document
  //   .querySelector("#quizlink")
  //   .addEventListener("click", () => initContent("Quiz"));
  document
    .querySelector("#loginlink")
    .addEventListener("click", () => initContent("Login"));
  document
    .querySelector("#backgroundlink")
    .addEventListener("click", () => initContent("BackgroundColor"));
    document
    .querySelector("#pptlink")
    .addEventListener("click", () => initContent("PPT"));
  document
    .querySelector("#pokeapilink")
    .addEventListener("click", () => initContent("PokeApi"));
  document
    .querySelector("#backgroundlink")
    .addEventListener("click", () => BackgroundFunction());
};

        //  <li>
        //     <a href="#" id="quizlink">Quiz</a>
        // </li>

export const printTemplate = () => {

  document.querySelector("header").innerHTML = template();

  addListeners();
};

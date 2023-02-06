import "./ppt.css";
import Swal from "sweetalert2";
import "animate.css";

const template = () => `
<section class="ppt">
<div class="text">
<h2>Piedra Papel Tijera Lagarto Spock!</h2>
<P>PLAYER vs COMPUTER</P> </div>
<div class="buttons">
<button class="player glowing-btn" role="button" data-value="0"><span class='glowing-txt'>P<span class='faulty-letter'>I</span>EDRA</span></button>
<button class="player glowing-btn" role="button" data-value="1"><span class='glowing-txt'>PA<span class='faulty-letter'>PE</span>L</span></button>
<button class="player glowing-btn" role="button" data-value="2"><span class='glowing-txt'>TIJ<span class='faulty-letter'>ER</span>A</span></button>
<button class="player glowing-btn" role="button" data-value="3"><span class='glowing-txt'><span class='faulty-letter'>LARG</span>ARTO</span></button>
<button class="player glowing-btn" role="button" data-value="4"><span class='glowing-txt'><span class='faulty-letter'>SPO</span>CK</span></button></DIV>


<div ><img class="rules" src="https://intervia.com/img/piedra-papel-tijera-lagarto-spock.png" alt="Piedra Papel Tijera Lagarto Spock"></div>


</section>
`;

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};

const addListeners = () => {
  document.querySelectorAll(".player").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let player_selection = Object.keys(results)[e.target.dataset.value];
      let computer_Selector =
        Object.keys(results)[Math.floor(Math.random() * 3)];
      console.log(player_selection, computer_Selector);
      game(player_selection, computer_Selector);
    });
  });
};

const results = {
  Piedra: ["Tijera", "Lagarto"],
  Papel: ["Piedra", "Spock"],
  Tijera: ["Papel", "Lagarto"],
  Lagarto: ["Spock", "Papel"],
  Spock: ["Tijera", "Piedra"],
};

const game = (a, b) => {
  let msg = `Jugador: ${a} | Computer: ${b}\n`;
  if (a == b) {
    Swal.fire({
      title: "Empate!",
      text: msg + "- Has empatado",
      confirmButtonText: "Bueno...",
    });
  } else if (results[a].indexOf(b) >= 0) {
    Swal.fire({
      title: "You Win!",
      text: msg + "- ¡Enhorabuena!",
      confirmButtonText: "¡Genial!",
    });
  } else {
    Swal.fire({
      title: "You Lose!",
      text: msg + "- Perdiste...",
    });
  }
};

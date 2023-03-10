import "./Login.css";


const template = () => `
<section class="login">
<h2>Login</h2>
<input type="text" id="loginInput"/>
<button id="loginBtn">Login</button>
</section>
`;

// const element = document.getElementById('navlist');
// element.remove();

const addListeners = () => {
  const loginInput = document.querySelector("#loginInput");
  document.querySelector("#loginBtn").addEventListener("click", () => {
    localStorage.setItem("user", loginInput.value);
    location.reload();
  });
};

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListeners();
};

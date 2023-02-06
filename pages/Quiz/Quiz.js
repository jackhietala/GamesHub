import "./Quiz.css";

 const template = () => `
 <section class="quiz">
    <h2>Quiz Game!</h2>
</section>
 `;

 export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
};



//     const questions = [
//       {
//         question: "What is the capital of United Kingdom?",
//         choices: ["Manchester", "Birmingham", "London", "Birmingham"],
//         answer: 2,
//       },

//       {
//         question: "What is the capital of United States?",
//         choices: ["California", "New York", "Miami", "Florida"],
//         answer: 1,
//       },
//     ];



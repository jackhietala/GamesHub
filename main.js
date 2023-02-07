import "./style.css";
import { printTemplate as HeaderTemplate } from "./components/Header/Header";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
// import { printTemplate as QuizTemplate } from "./pages/Quiz/Quiz";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as PokeApiTemplate } from "./pages/PokeApi/PokeApi";
import { printTemplate as PPTTemplate } from "./pages/PPT/ppt";


export const initContent = (route) => {
  switch (route) {
    case undefined:
      localStorage.getItem("user") ? HomeTemplate() : LoginTemplate();
      break;
    case "Home":
      HomeTemplate();
      break;
    case "PokeApi":
        PokeApiTemplate();
        break;
      case "PPT":
        PPTTemplate();
        break;
    case "Login":
      if (localStorage.getItem("user")) {
        localStorage.removeItem('user');
        location.reload();
      }
      LoginTemplate();
      break;
  }
};
HeaderTemplate();

initContent();

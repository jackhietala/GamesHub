import "./style.css";
import { printTemplate as HeaderTemplate } from "./components/Header/Header";
import { printTemplate as HomeTemplate } from "./pages/Home/Home";
import { printTemplate as QuizTemplate } from "./pages/Quiz/Quiz";
import { printTemplate as LoginTemplate } from "./pages/Login/Login";
import { printTemplate as PokeApiTemplate } from "./pages/PokeApi/PokeApi";
import { printTemplate as PPTTemplate } from "./pages/PPT/ppt";


// import { Background as  } from "./components/background/Background";

//Esta será la función que lance los templates según una "ruta", dependiendo de la palabra que le indiquemos por argumento
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
   //  case "Quiz":
   //   QuizTemplate();
  //    break;
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

//Aqui ya hemos pintado el Header, y solo se ejecuta esta vez para que se quedé siempre en la web
HeaderTemplate();

//Por defecto ejecutamos initContent que como es undefined el argumento pintará el Home al arrancar
initContent();

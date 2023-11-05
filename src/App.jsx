import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/css/bootstrap-4.0.0-dist/css/bootstrap.min.css";

// import "./assets/css/icofont.css";
import "./assets/css/slick.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/lightbox.css";
import "./assets/css/aos.css";
import "./assets/css/owl.carousel.min.css";

import "./assets/css/animate.min.css";
import "./assets/css/icofont/icofont.css";
import "./assets/css/icofont/icofont.min.css";
import Routing from "./routes";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <Router>
      <Routing />
      <FloatingWhatsApp
        phoneNumber="+40 765 569 064"
        avatar={require("./assets/images/bogdanwithoutbg.png")}
        accountName="Bogdan"
        chatMessage="Salutare! 🤝
        Cum putem ajuta? 🇷🇴
        How can i Help ? "
        allowClickAway
        notification
        notificationSound
      />
    </Router>
  );
}

export default App;

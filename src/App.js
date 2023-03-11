import "./App.css";
import Navbar from "./Componants/Navbar/Navbar";
import Landing from "./Componants/Landing/Landing";
import "./App.css";
import Services from "./Componants/Services/Services";
import Experianc from "./Componants/Experiances/Experiance";
import Works from "./Componants/Works/Works";
import Portofolio from "./Componants/Portofolio/Portofolio";
import Contact from "./Componants/Contact/Contact";
import Footer from "./Componants/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Landing />
      <Services />
      <Experianc />
      <Works />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

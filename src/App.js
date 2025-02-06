import NavBar from "../src/components/Others/NavBar.jsx";
import HorizontalLine from "./components/Line/HorizontalLine.jsx";
import "./App.css";
import MainHeading from "./components/Frames/MainHeading.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Frame2 from "./components/Frames/Frame2.jsx";
import Frame3 from "./components/Frames/Frame3.jsx";
import Frame4 from "./components/Frames/Frame4.jsx";
import Frame5 from "./components/Frames/Frame5.jsx";
import Frame6 from "./components/Frames/Frame6.jsx";
import Frame7 from "./components/Frames/Frame7.jsx";
import Frame8 from "./components/Frames/Frame8.jsx";
import Footer from "./components/Frames/Footer.jsx";

function App() {
  return (
    <div className="px-14 m-10 font-sans ">
      <NavBar />
      <HorizontalLine />
      <MainHeading />
      <Cards />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Footer />
    </div>
  );
}

export default App;

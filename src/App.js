import Cards from "./components/Cards/Cards";
import InputFunctions from "./components/Input/InputFunctions";
import About from "./components/About/About";
import Boost from "./components/Boost.jsx/Boost";
import Header from "./components/Header/Header";
import HeaderMobile from "./components/Header/HeaderMobile";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <About />
      <InputFunctions />
      <Cards />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;

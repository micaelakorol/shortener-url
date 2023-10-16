import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { geolocalization } from "./services/utils/localization";
import "./styles/global.css";
import RenderSectionInput from "./components/SectionInput/RenderSection";
import { MyContextProvider } from "./context/AppState";
import RenderPresentation from "./components/Presentation/RenderPresentation";

const App = () => {
  useEffect(() => {
    geolocalization();
  }, []);

  return (
    <MyContextProvider>
      <RenderPresentation />
      <RenderSectionInput />
      <Cards />
      <Footer />
    </MyContextProvider>
  );
};

export default App;

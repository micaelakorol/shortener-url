import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import { geolocalization } from "./services/utils/localization";
import "./styles/global.css";
import RenderSectionInput from "./components/InputShortenURL/RenderSection";
import { MyContextProvider } from "./context/ContextCaptureInputs";
import RenderPresentation from "./components/Main/RenderPresentation";
import RenderCard from "./components/Cards/RenderCard";


const App = () => {
  useEffect(() => {
    geolocalization();
  }, []);

  return (
    <MyContextProvider>
      <RenderPresentation />
      <RenderSectionInput />
      <RenderCard />
      <Footer />
    </MyContextProvider>
  );
};

export default App;

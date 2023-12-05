import ComplementaryFeatures from "./components/ComplementaryFeatures";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar/Navbar";
import Packages from "./components/Packages";

function App() {
  return (
    <div className="flex flex-col gap-y-14">
      <Navbar />
      <MainContent/>
      <ComplementaryFeatures/>
      <Packages/>
      <Features/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;

import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex flex-col gap-y-10">
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;

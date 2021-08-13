import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Titlebar from "./components/Titlebar/Titlebar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <>
      <Titlebar />
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;

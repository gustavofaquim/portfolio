import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import "./styles/components/app.sass";

function App() {


  return (
  <div id="portfolio">
    <Menu/>
    <Sidebar />
    <MainContent />
  </div>
  )
};

export default App

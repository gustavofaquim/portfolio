import { Routes, Route, useLocation } from 'react-router-dom';
import MainContent from "./components/MainContent";
import ProjectDetail from "./components/ProjectDetail";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";

import "./styles/components/app.sass";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div id="portfolio">
      <Menu />
      {isHome && <Sidebar />} {/* Só mostra Sidebar na página inicial */}

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;

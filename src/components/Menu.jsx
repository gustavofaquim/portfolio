import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/components/menu.sass";
import ThemeToggle from "./ThemeToggle";


const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id) => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      setTimeout(() => scrollToSection(id), 50);
    }
  };

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);



  const menuItems = [
    { id: '#sobre', label: 'Início' },
    { id: '#habilidades', label: 'Habilidades' },
    { id: '#projetos', label: 'Projetos' },
    { id: '#jornada', label: 'Jornada' },
  ];

  return (
    <nav className={`menu ${open ? 'menu--open' : ''}`}>
      <div className="menu-icon">
        {/* <div className="menu-left">{`<Gustavo Faquim/>`}</div> */}


        <div className="menu-right" role="menubar">
          {menuItems.map((item) => (
            <button key={item.id} role="menuitem" onClick={() => handleClick(item.id)}>
              {item.label}
            </button>
          ))}
        </div>
        <ThemeToggle />
      </div>

    
    </nav>
  );
};

export default Menu;

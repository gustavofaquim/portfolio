import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/components/menu.sass";

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
    // fecha o menu móvel caso esteja aberto
    setOpen(false);

    if (location.pathname !== '/') {
      // Se não estiver na home, navega e envia o id via state
      navigate('/', { state: { scrollTo: id } });
    } else {
      // Se já estiver na home, só rola até a seção
      scrollToSection(id);
    }
  };

  // Fecha o menu ao mudar de rota por qualquer motivo
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // trava o scroll do body quando o menu móvel estiver aberto
  useEffect(() => {
    if (open) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  // opcional: fechar com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const menuItems = [
    { id: '#sobre', label: 'Sobre mim' },
    { id: '#habilidades', label: 'Habilidades' },
    { id: '#tecnologias', label: 'Tecnologias' },
    { id: '#projetos', label: 'Projetos' },
    { id: '#jornada', label: 'Jornada' },
  ];

  return (
    <nav className={`menu ${open ? 'menu--open' : ''}`}>
      <div className="menu-icon">
        <div className="menu-left">{`<Gustavo Faquim/>`}</div>

        {/* botão hamburger - aparece em telas pequenas via CSS */}
        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <ul className="menu-right" role="menubar">
          {menuItems.map((item) => (
            <li
              key={item.id}
              role="menuitem"
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Menu móvel: overlay / slide down — visível apenas em resoluções < 576px */}
      <div
        id="menu-mobile"
        className={`menu-mobile ${open ? 'open' : ''}`}
        role="dialog"
        aria-hidden={!open}
      >
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* overlay semântica para fechar clicando fora (aparece quando open) */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </nav>
  );
};

export default Menu;

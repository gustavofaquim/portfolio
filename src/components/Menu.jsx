import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/components/menu.sass";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuMobileRef = useRef(null);

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
      // espera um tick para garantir que transição/fechamento visual ocorra
      // (não necessário, mas evita problemas caso você tenha animação que sobreponha)
      setTimeout(() => scrollToSection(id), 50);
    }
  };

  // Fecha o menu ao mudar de rota
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

  // fechar com ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Torna o menu realmente não interativo quando fechado:
  useEffect(() => {
    const node = menuMobileRef.current;
    if (!node) return;

    // se o navegador suportar inert, use (remove interatividade/foco)
    if ('inert' in HTMLElement.prototype) {
      node.inert = !open;
    } else {
      // fallback: pointer-events / visibility / aria-hidden / tabIndex
      node.style.pointerEvents = open ? 'auto' : 'none';
      node.style.visibility = open ? 'visible' : 'hidden';
      node.setAttribute('aria-hidden', String(!open));
      // remover foco/tabulação dos itens quando fechado
      const items = node.querySelectorAll('li');
      items.forEach((li) => {
        li.tabIndex = open ? 0 : -1;
      });
    }
  }, [open]);

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

      <div
        id="menu-mobile"
        ref={menuMobileRef}
        className={`menu-mobile ${open ? 'open' : ''}`}
        role="dialog"
        aria-hidden={!open}
      >
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.id)}
              // garante que não sejam focáveis quando fechado
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Menu;

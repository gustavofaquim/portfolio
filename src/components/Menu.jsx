import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/components/menu.sass";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id) => {
    if (location.pathname !== '/') {
      // Se não estiver na home, navega e envia o id via state
      navigate('/', { state: { scrollTo: id } });
    } else {
      // Se já estiver na home, só rola até a seção
      scrollToSection(id);
    }
  };

  return (
    <nav className="menu">
      <div className="menu-icon">
        <div className="menu-left">{`<Gustavo Faquim/>`}</div>
        <ul className="menu-right">
          <li onClick={() => handleClick('#sobre')}>Sobre mim</li>
          <li onClick={() => handleClick('#habilidades')}>Habilidades</li>
          <li onClick={() => handleClick('#tecnologias')}>Tecnologias</li>
          <li onClick={() => handleClick('#projetos')}>Projetos</li>
          <li onClick={() => handleClick('#jornada')}>Jornada</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

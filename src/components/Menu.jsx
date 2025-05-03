import { Link } from 'react-router-dom';
import "../styles/components/menu.sass";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-icon">
        <div className="menu-left">{`<Gustavo Faquim/>`}</div>
        <ul className="menu-right">
          <li>Sobre Mim</li>
          <li>
            <Link to="/#habilidades">Habilidades</Link>
          </li>
          <li>
            <Link to="/#project">Projetos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

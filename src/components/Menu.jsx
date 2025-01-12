import "../styles/components/menu.sass";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-icon">
        <div className="menu-left">Gustavo Faquim</div>
        <ul className="menu-right">
            <li>Sobre Mim</li>
            <li>Habilidades</li>
            <li>Projetos</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

import "../styles/components/menu.sass";

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-icon">
        <div className="menu-left">{`<Gustavo Faquim/>`}</div>
        <ul className="menu-right">
            <li>Sobre Mim</li>
            <li> <a href="#habilidades"></a>Habilidades</li>
            <li>Projetos</li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

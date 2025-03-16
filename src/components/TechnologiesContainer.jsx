
import Html from "../img/icones/html.png";
import Css from "../img/icones/css.svg"
import Js from "../img/icones/js.png";
import Node from "../img/icones/node.svg"
import React from "../img/icones/react.svg"
import Bootstrap from "../img/icones/boostrap.svg"
import Typescript from "../img/icones/typescript.png"
import Python from "../img/icones/python.png"
import Mysql from "../img/icones/mysql.svg";
import PostgreSQL from "../img/icones/postgresql.svg";
import Git from "../img/icones/git.svg";
import Php from "../img/icones/php.png";
import Sql from "../img/icones/sql.png";
import Mongo from "../img/icones/mongo.png";
import Srss from "../img/icones/report.png";
import Figma from "../img/icones/figma.png";
import Vite from "../img/icones/vite.png";
import Bi from "../img/icones/bi.png";

import "../styles/components/technologiesContainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: Html },
    { id: "css", name: "CSS3", icon: Css },
    { id: "js", name: "JavaScript", icon: Js },
    { id: "node", name: "Node.js", icon: Node },
    { id: "react", name: "React", icon: React },
    { id: "bootstrap", name: "Bootstrap", icon: Bootstrap },
    { id: "typescript", name: "Typescript", icon: Typescript },
    { id: "python", name: "Python", icon: Python },
    { id: "mysql", name: "MySQL", icon: Mysql},
    { id: "postgreSQL", name: "PostgreSQL", icon: PostgreSQL },
    { id: "php", name: "PHP", icon: Php},
    { id: "sql", name: "SQL Server", icon: Sql},
    { id:"mongo", name: "MongoDB", icon: Mongo},
    { id:"srss", name: "SQL Server Reporting Services", icon: Srss},
    { id: 'bi', name: 'Power Bi', icon: Bi},
    { id: "git", name: "Git", icon: Git },
    { id: "figma", name: "Figma", icon: Figma },
    { id: "vite", name: "Vite", icon: Vite },
    
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section id='habilidades' className="technologies-container">

      <div className="titulo">
        <h3>MINHAS <span>HABILIDADES</span></h3>
        
      </div>
        
        <div className="technologies">
            <div className="technologies-grid">
              {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                  <div className="card-icone"><img src={tech.icon} alt="" /></div>
                  {tech.name}
                </div>
              ))}
            </div>
          
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
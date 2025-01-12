import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPhp,
    DiMsqlServer,
    DiBootstrap
  } from "react-icons/di";
  
import Html from "../img/icones/html.png";
import Css from "../img/icones/css.svg"
import Js from "../img/icones/js.png";
import Node from "../img/icones/nodejs.svg"
import React from "../img/icones/react.svg"
import Bootstrap from "../img/icones/boostrap.svg"
import Typescript from "../img/icones/typescript.png"
import Python from "../img/icones/python.png"
import Mysql from "../img/icones/mysql.svg";
import PostgreSQL from "../img/icones/postgresql.svg";
import Git from "../img/icones/git.svg";


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
    { id: "php", name: "PHP", icon: <DiPhp />},
    { id: "sql", name: "SQL Server", icon: <DiMsqlServer />},
    { id:"mongo", name: "MongoDB"},
    { id:"srss", name: "SQL Server Reporting Services"},
    { id: "git", name: "Git", icon: Git },
    { id: "figma", name: "Figma", icon: <DiReact /> },
    { id: "vite", name: "Vite", icon: <DiReact /> },
    
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">

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
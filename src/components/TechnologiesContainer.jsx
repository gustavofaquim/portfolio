
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
import Sqlite from "../img/icones/sqlite.png";
import ReactNative from "../img/icones/reactnative.png";
import Oracle from "../img/icones/oracle.png";  
import Tailwindcss from "../img/icones/tailwindcss.png";  
import Nextjs from "../img/icones/nextjs.png";  

import { useState } from "react";

import "../styles/components/technologiesContainer.sass";
  
const technologies = [
  { id: "css", name: "CSS3", icon: Css, category: "frontend" },
  { id: "js", name: "JavaScript", icon: Js, category: "frontend" },
  { id: "react", name: "React", icon: React, category: "frontend" },
  { id: "reactnative", name: "React Native", icon: ReactNative, category: "frontend" },
  { id: "bootstrap", name: "Bootstrap", icon: Bootstrap, category: "frontend" },
  { id: "tailwindcss", name: "Tailwindcss", icon: Tailwindcss, category: "frontend" },

  { id: "node", name: "Node.js", icon: Node, category: "backend" },
  { id: "php", name: "PHP", icon: Php, category: "backend" },
  { id: "python", name: "Python", icon: Python, category: "backend" },

  { id: "mysql", name: "MySQL", icon: Mysql, category: "database" },
  { id: "postgreSQL", name: "PostgreSQL", icon: PostgreSQL, category: "database" },
  { id: "sqlite", name: "SQLite", icon: Sqlite, category: "database" },
  { id: "oracle", name: "Oracle", icon: Oracle, category: "database" },
  { id: "mongo", name: "MongoDB", icon: Mongo, category: "database" },

  { id: "git", name: "Git", icon: Git, category: "tools" },
  { id: "figma", name: "Figma", icon: Figma, category: "tools" },
  { id: "vite", name: "Vite", icon: Vite, category: "tools" },
  { id: "nextjs", name: "Nextjs", icon: Nextjs, category: "tools" },
  { id: "bi", name: "Power Bi", icon: Bi, category: "tools" },
  { id: "srss", name: "SQL Reporting", icon: Srss, category: "tools" },
];
  
  const TechnologiesContainer = () => {
    const [filter, setFilter] = useState("all");

    return (
      <section id='tecnologias' className="technologies-container">

      <div className="titulo">
        <p>O que uso para dar vida às minhas ideias</p>
        <h3>Stack de Desenvolvimento</h3>
        
        
      </div>
        
        <div className="technologies">

          <div className="filter-buttons">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Todos</button>
            <button className={filter === "frontend" ? "active" : ""} onClick={() => setFilter("frontend")}>Front-end</button>
            <button className={filter === "backend" ? "active" : ""} onClick={() => setFilter("backend")}>Back-end</button>
            <button className={filter === "database" ? "active" : ""} onClick={() => setFilter("database")}>Banco de Dados</button>
            <button className={filter === "tools" ? "active" : ""} onClick={() => setFilter("tools")}>Ferramentas</button>
          </div>


            <div className="technologies-grid">
              {technologies
                .filter((tech) => filter === "all" || tech.category === filter)
                .map((tech) => (
                  <div className="technology-card" id={tech.id} key={tech.id}>
                    <div className="card-icone">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                    <span>{tech.name}</span>
                  </div>
              ))}
            </div>
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
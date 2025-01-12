import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiPhp,
    DiMsqlServer
  } from "react-icons/di";
  
  import "../styles/components/technologiesContainer.sass";
  
  const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
    { id: "php", name: "PHP", icon: <DiPhp />},
    {id: "sql", name: "SQL Server", icon: <DiMsqlServer />},
    {id:"srss", name: "SQL Server Reporting Services"},
    {id:"mongo", name: "MongoDB"}
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">

      <div className="titulo">
        <h3>MINHAS HABILIDADES</h3>
        
      </div>
        
        <div className="technologies">
          <div className="technologies-grid-desc">
            <div className="technologies-grid-desc-title">
            </div>
            <div className="technologies-grid">
              {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
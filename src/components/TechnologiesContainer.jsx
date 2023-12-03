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
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <div className="technologies">
          <h2>Tecnologias</h2>
          <p></p>
          <div className="technologies-grid-desc">
            <div className="technologies-grid-desc-title">
              <p>Minha jornada pela programação web iniciou-se no PHP, linguagem que já possuo contato há alguns anos. 
                Já desenvolvi pequenos projetos web utilizando Java e Django, junto aos bancos MySQL, PostgreSQL e 
                SQL Server. Tenho me apaixonado pelo desenvolvimento com NodeJS por sua versatilidade e facilidade, 
                potencializados pelo framework Express. Também tenho experiência com Laravel e MongoDB.</p>
            </div>
            <div className="technologies-grid">
              {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
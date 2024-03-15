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
        <h3>SOBRE MIM</h3>
        <hr />
        <p>Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais.</p>
      </div>
        
        <div className="sobre">
          <h4>Me Conheça!</h4>
          <p>Desenvolvedor apaixonado por inovação, graduado em Sistemas de Informação pelo Instituto Federal de Educação Ciência e Tecnologia Goiano - Campus Ceres e e Pós-Graduado em Desenvolvimento Web Full Stack pela Faculdade Descomplica. Possuo experiência em projetos 
            nas áreas de desenvolvimento e analise de dados.</p>
        </div>
        
        <div className="technologies">
          <h4>Minhas Habilidades</h4>
          <p></p>
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
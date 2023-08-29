import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";


import '../styles/components/projectsContainer.sass';


import IntegracaoDiploma from '../img/integracao-diploma.jpeg';


const projects = [
    { id: "prontuario", name: "Prontuário", img: <AiOutlineApi />, link:'https://github.com/gustavofaquim/integracao-prontuario' ,  desc: 'Integração entre o GED Ábaris e prontuário de documentos do sistema acadêmico Lyceum. Consumindo a API de ambos os sistema foi possível integrar os documentos do GED no sistema acadêmico'},
    { id: "todo", name: "ToDo List", img: <BsListCheck />, link:'https://github.com/gustavofaquim/to-do-list',  desc: "Sistema simples de lista de tarefas desenvolvido com NodeJS como parte dos estudos da tecnlogia."},
    { id: "diploma", name: "Diploma Digital", link:'https://github.com/gustavofaquim/integracao_diploma_digital' , img: <PiCertificateLight />, desc: "Solução API para o carregamento automatizado de documentação necessária para emissão do diploma digital no sistema acadêmico Lyceum."},
    { id: "orcamento", name: "Orçamento", img:< RiMoneyDollarCircleLine />, link: 'https://github.com/gustavofaquim/generic-mvc',  desc: "Ferramenta de controle de despesas e receitas desenvolvido em PHP."}
];


const ProjectsContainer = () =>{
    return(
        <section className='projects-container'>
           <div className="projects">

            <div className="projects-container-title">
                    <h2>Meus Projetos</h2>
                    <p> Alguns dos projetos desenvolvidos recentemente. </p>
            </div>

                <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" id={project.id} key={project.id} >
                        
                        {project.img}
                        <h3>{project.name}</h3>
                
                        <p>{project.desc}</p>

                        <a href={project.link} className="exter" target="_blank"> 
                            <FiExternalLink /> Conheça 
                        </a>
                    </div>
                ))}
                </div>

           </div>

        </section>
    );
}

export default ProjectsContainer
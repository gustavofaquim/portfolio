import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

import ModalContainer from "./Modal";
import Button from 'react-bootstrap/Button';

import '../styles/components/projectsContainer.sass';


import IntegracaoDiploma from '../img/integracao-diploma.jpeg';


const projects = [
    { id: "prontuario", name: "Prontuário", img: <AiOutlineApi />, link:'https://github.com/gustavofaquim/integracao-prontuario' ,  desc: 'Integração entre o GED Ábaris e prontuário de documentos do sistema acadêmico Lyceum. Consumindo a API de ambos os sistema foi possível integrar os documentos do GED no sistema acadêmico'},
    { id: "todo", name: "ToDo List", img: <BsListCheck />, link:'https://github.com/gustavofaquim/to-do-list',  desc: "Sistema simples de lista de tarefas desenvolvido com NodeJS como parte dos estudos da tecnlogia."},
    { id: "orcamento", name: "Orçamento", img:< RiMoneyDollarCircleLine />, link: 'https://github.com/gustavofaquim/generic-mvc',  desc: "Ferramenta de controle de despesas e receitas desenvolvido em PHP."}
];


const ProjectsContainer = () =>{

    const [modalShow, setModalShow] = React.useState(false);
    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");

    return(
        <section className='projects-container'>
           <div className="projects">

            <div className="projects-container-title">
                    <h2>Projetos</h2>
                   
            </div>

                <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" id={project.id} key={project.id} >
                        
                        <div className="title-card">
                            {project.img} <p>{project.name}</p>
                        </div>
                
                        

                        <a  className="exter" target="_blank" onClick={() => {
                            
                            setText(project.desc)
                            setTitle(project.name)
                            setModalShow(true)
                            
                            }}> 
                            <FiExternalLink /> Conheça 
                        </a>
                    </div>
                ))}
                </div>

           </div>

         

           <ModalContainer show={modalShow} onHide={() => setModalShow(false)}  text={text} title={title} />
           

        </section>
    );
}

export default ProjectsContainer
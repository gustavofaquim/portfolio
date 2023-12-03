import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BsListCheck } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

import ModalContainer from "./Modal";
import Button from 'react-bootstrap/Button';

import '../styles/components/projectsContainer.sass';

import ToDoList from "../img/to_do_list2.png"
import Prontuario from "../img/integracao-prontuario.jpeg"
import Diploma from "../img/integracao-diploma.jpeg"


import IntegracaoDiploma from '../img/integracao-diploma.jpeg';


const projects = [
    { id: "prontuario",type: 'Integração', name: "Integração de Prontuário de Documentos", icon: <AiOutlineApi />, img: Prontuario, link:'https://github.com/gustavofaquim/integracao-prontuario' ,  desc: 'Integração entre o GED Ábaris e prontuário de documentos do sistema acadêmico Lyceum. Consumindo a API de ambos os sistema foi possível integrar os documentos do GED no sistema acadêmico'},
    { id: "todo", type: 'Desenvolvimento', name: "Gerenciador de Tarefas", icon: <BsListCheck />, img: ToDoList, link:'https://github.com/gustavofaquim/to-do-list',  desc: "Sistema simples de lista de tarefas desenvolvido com NodeJS como parte dos estudos da tecnlogia."},
    { id: "diploma", type: 'Integração', name: "Diploma Digital", icon: <PiCertificateLight />, img: Diploma , link:'https://github.com/gustavofaquim/integracao_diploma_digital',  desc: "Solução API para o carregamento automatizado de documentação necessária para emissão do diploma digital no sistema acadêmico Lyceum."},
    { id: "orcamento",type: 'Desenvolvimento', name: "Sistema de Acompanhamento de Despesas", icon:< RiMoneyDollarCircleLine />, img: '../img/to_do_list2.png', link: 'https://github.com/gustavofaquim/generic-mvc',  desc: "Ferramenta de controle de despesas e receitas desenvolvido em PHP."}
];


const ProjectsContainer = () =>{

    const [modalShow, setModalShow] = React.useState(false);
    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [img, setImg] = React.useState("");

    return(
        <section className='projects-container'>
           <div className="projects">

            <div className="projects-container-title">
                <h2>Projetos</h2>
                   
            </div>

                <div className="projects-grid">
                {projects.map((project) => (
                     <a  className="exter" target="_blank" onClick={() => {
                            
                        setText(project.desc)
                        setTitle(project.name)
                        setImg(project.img)
                        setModalShow(true)
                        }}> 
                   
                        <div className="project-card" id={project.id} key={project.id} >
                            <div className="project-icon">
                                <div id={project.id}>
                                    <img src={project.img} alt="" />
                                </div>
                            </div>

                            <div className="type-card">
                                <p>{project.type}</p>
                            </div>
                            
                            
                            <div className="title-card">
                                <p>{project.name}</p>
                            </div>
                    
                        </div>
                    </a>
                ))}
                </div>

           </div>

         

           <ModalContainer show={modalShow} onHide={() => setModalShow(false)}  text={text} title={title} img={img} />
           

        </section>
    );
}

export default ProjectsContainer
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
import SisParla from "../img/sisparla.png";
import IntegracaoDiploma from '../img/integracao-diploma.jpeg';


const projects = [
    { id: "mandatotec", technologies: [{name:'React', class: 'react'}, {name:'NodeJS', class: 'node'}, {name:'MySql', class: 'mysql'}], name: "mandatotec", img: SisParla, link:'https://github.com/gustavofaquim/sisparla-frontend' ,  desc: 'O MandatoTec é um software para gestão de mandatos políticos, ajudando parlamentares e suas equipes a organizar agendas, demandas e informações com eficiência e simplicidade, promovendo transparência e profissionalismo no dia a dia.'},
    { id: "prontuario",technologies: [{name:'React', class: 'react'}, {name:'NodeJS', class: 'node'}], name: "Integração Lyceum", icon: <AiOutlineApi />, img: Prontuario, link:'https://github.com/gustavofaquim/integracao-prontuario' ,  desc: 'Integração entre o GED Ábaris e prontuário de documentos do sistema acadêmico Lyceum. Consumindo a API de ambos os sistema foi possível integrar os documentos do GED no sistema acadêmico'},
    { id: "diploma", technologies: [{name:'HTML', class: 'html'}, {name:'PHP', class: 'php'}], name: "Diploma Digital", icon: <PiCertificateLight />, img: Diploma , link:'https://github.com/gustavofaquim/integracao_diploma_digital',  desc: "Solução API para o carregamento automatizado de documentação necessária para emissão do diploma digital no sistema acadêmico Lyceum."},
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
                <h3>PROJETOS <span>RECENTES</span></h3>
            </div>

                <div className="projects-grid">
                {projects.map((project) => (

                    <div className="project-card" id={project.id} key={project.id} >
                
                        <div className="text-card">
                            <p className="title-card">{project.name}</p>
                            <p className="desc-card">{project.desc}</p>
                        </div>

                        <div className="technologies">
                            {
                                project?.technologies.map((tec) => (
                                    <span className={`${tec.class} tag-technologies`}> {tec.name} </span>
                                ))
                            }
                        </div>

                        <div className="project-icon">
                            <img src={project.img} alt="" />
                        </div>

                
                    </div>
                    
                ))}
                </div>
           </div>

         

        </section>
    );
}

export default ProjectsContainer
import React from "react";
import { AiOutlineApi } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { PiCertificateLight } from "react-icons/pi";
import { SlArrowRight } from "react-icons/sl";

import '../styles/components/projectsContainer.sass';

import Prontuario from "../img/projetos/integracaocapa.png"
import Mandatotec from "../img/projetos/capamandatotec.png";
import AppDespesas from "../img/projetos/appdespesascapa.png";


const projects = [
    { id: "mandatotec",  name: "Mandatotec", type: 'Sistema', img: Mandatotec},
    { id: "appdespesa", name: "App Mobile Despesas",  type: 'App Mobile', img: AppDespesas},
    { id: "prontuario", name: "Integração Lyceum",  type: 'Integração', img: Prontuario },
];


const ProjectsContainer = () =>{

    const [modalShow, setModalShow] = React.useState(false);
    const [text, setText] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [img, setImg] = React.useState("");

    return(
        <section id='projetos' className='projects-container'>
           <div className="projects">

            <div className="projects-container-title">
                <h3>Projetos Recentes</h3>
                <p>Alguns dos meus trabalhos</p>
            </div>

                <div className="projects-grid">
                {projects.map((project) => (

                    <div className="project-card" id={project.id} key={project.id} >
                        <Link to={`/project/${project.id}`}>
                        <div className="project-icon">
                            <img src={project.img} alt="" />
                        </div>
                
                        <div className="card-info">
                            <div className="text-card">
                                <p className="title-card">{project.name}</p>
                                <p className="title-type">{project.type}</p>
                                {/*<p className="desc-card">{project.desc}</p> */}
                            </div>

                           
                            <SlArrowRight className="card-icone-navegacao" />
                            
                        </div>
                        </Link>

                        {/*<div className="technologies">
                            {
                                project?.technologies.map((tec) => (
                                    <span className={`${tec.class} tag-technologies`}> {tec.name} </span>
                                ))
                            }
                        </div> */}

                    
                
                    </div>
                    
                ))}
                </div>
           </div>

         

        </section>
    );
}

export default ProjectsContainer
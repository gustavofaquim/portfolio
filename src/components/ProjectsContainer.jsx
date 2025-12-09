import React from "react";
import { Link } from 'react-router-dom';


import '../styles/components/projectsContainer.sass';

import Arrow from "../img/icones/arrow-up-right-square.svg"
import Mandatotec from "../img/projetos/logo/mandatotec.png";
import AppDespesas from "../img/projetos/appdespesascapa.png";
import GestorFinanceiro from "../img/projetos/gestor_financeiro_add.png"
import Integracao from "../img/projetos/logo/integracao.png"
import ConectaAnapolis from "../img/projetos/logo/conectaanapolis.png"
import AquiTem from "../img/projetos/logo/aquitem.png"
import Zap24 from "../img/projetos/logo/zap24h.png"


const projects = [
  
  { 
    id: "conecta",  
    name: "Conecta Anápolis", 
    desc: "Aplicativo oficial que centraliza serviços públicos e solicitações do cidadão.",
    type: "App Mobile", 
    img: ConectaAnapolis
  },
    { 
    id: "zap24h",  
    name: "Zap da Prefeitura", 
    desc: "WhatsApp oficial da Prefeitura Municipal de Anápolis",
    type: "Integração", 
    img: Zap24
  },
  { 
    id: "aquitem",  
    name: "Aqui Tem", 
    desc: "App que conecta moradores a serviços, comércios e utilidades locais.",
    type: "App Mobile", 
    img: AquiTem
  },
  { 
    id: "mandatotec",  
    name: "Mandatotec", 
    desc: "Sistema para gestão de apoiadores, segmentação e análise de dados.",
    type: "Sistema", 
    img: Mandatotec
  },
  { 
    id: "gestorfinanceiro", 
    name: "Gestor Financeiro",  
    desc: "Sistema web para controle financeiro, organização e relatórios.",
    type: "Sistema", 
  },
  { 
    id: "prontuario", 
    name: "Integração Lyceum",  
    desc: "Integração para sincronização de dados acadêmicos entre sistemas.",
    type: "Integração", 
    img: Integracao, 
  }
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
                <h3>Projetos em Destaque</h3>
                <p>Alguns dos principais projetos que desenvolvi ou participei</p>
            </div>

                <div className="projects-grid">
                {projects.map((project) => (

                    <div className="project-card" id={project.id} key={project.id} >
                        
                       
                
                        <div className="card-info">

                            <div className="area-titulo">
                                {project.img ?
                                    <img src={project.img} className="img-projeto" alt={project.name}/>
                                    :
                                    <p className="title-card">{project.name}</p>
                                    }
                            </div>
                                

                            <div className="text-card">  
                                <p className="desc-card">{project.desc}</p>
                                
                                {/*<p className="desc-card">{project.desc}</p> */}
                            </div>   
                        </div>

                        <Link to={`/project/${project.id}`} className="btnMaisDetalhes">
                            <img src={Arrow} /> <span>detalhes</span>
                        </Link>

                
                    </div>
                    
                ))}
                </div>
           </div>

         

        </section>
    );
}

export default ProjectsContainer
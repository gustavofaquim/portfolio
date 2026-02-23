
import Typewriter from "typewriter-effect";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import MinhaFoto from "../img/minhaFoto.jpeg"
import MinhaFoto2 from "../img/minhaFoto2.png"
import { Linkedin } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import {AiFillPhone, AiOutlineMail, AiFillEnvironment, AiFillMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";


const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/gustavofaquim/' },
    { name: "github", icon: <FaGithub />, link: 'https://github.com/gustavofaquim'},
    { name: "whatsapp", icon: <FaWhatsapp />, link: 'https://wa.me/5562996828796'}
  ];


const AboutContainer = () =>{

    const location = useLocation();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);

    const [foto,setFoto] = useState(MinhaFoto);

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    useEffect(() => {
        if(theme === "light"){
            setFoto(MinhaFoto2)
        }else{
            setFoto(MinhaFoto)
        }
    },[theme])

    const handleClick = (id) => {

        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: 'projetos' } });
            } else {
            setTimeout(() => scrollToSection(id), 50);
        }
    };

    return(
       <section id='sobre' className='about-container'>
       {/* <ParticlesBackground /> */}

        <div className='about'>
        
            <div className='about-me'>

                
               <div className="container-titulo-texto">
                
                    <h1 className="title">Gustavo Faquim</h1>
                    <h2 className="subtitle">
                        <Typewriter
                            options={{
                            strings: ["Web Developer", "Full-Stack Developer", "Mobile Developer"],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 30,
                            }}
                        />
                    </h2>

                    <p className='titulo-descricao'>
                        Desenvolvedor full-stack comprometido com a excelência técnica. Da arquitetura do back-end ao design do front-end, busco soluções eficientes para desafios complexos.
                    </p>

                    <div className="container-buttons">
                        <button onClick={() => handleClick('projeto')}>Ver projetos <ChevronRight size={16}/></button>
                    </div>
                

                    <div class='about-contact'>
                        {socialNetworks.map((network) => (
                            <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
                        ))}
                    </div>

               </div>

               

                <div className="container-img">
                    <img src={foto} alt="Foto de Perfil" />
                </div>

                
               
            </div>

           
        </div>

        
        
       </section>
    );
}

export default AboutContainer
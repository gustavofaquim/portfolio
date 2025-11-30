
import ParticlesBackground from '../components/ParticlesBackground.jsx';
import MinhaFoto from "../img/eu.jpeg"
import Typewriter from "typewriter-effect";

const AboutContainer = () =>{
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
            
                
                    {/*<p className="container-texto">
                    Com mais de 5 anos de experiência em desenvolvimento de sistemas, 
                    tenho atuado em projetos que envolvem desde a criação de interfaces intuitivas até a integração 
                    de sistemas complexos. Sou movido por desafios que exigem criatividade e solução de problemas, 
                    e busco sempre aprender novas tecnologias para entregar resultados de alta qualidade.
                    </p>*/}
               </div>
               

                {/*<div className="container-img">
                    <img src={MinhaFoto} alt="Foto de Perfil" />
                </div>*/}

                
               
            </div>
        
        </div>
       </section>
    );
}

export default AboutContainer
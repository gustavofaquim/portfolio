
import ParticlesBackground from '../components/ParticlesBackground.jsx';
import MinhaFoto from "../img/eu.jpeg"

const AboutContainer = () =>{
    return(
       <section id='sobre' className='about-container'>
       <ParticlesBackground />

        <div className='about'>
        
            <div className='about-me'>

                <div className="container-img">
                    <img src={MinhaFoto} alt="Foto de Perfil" />
                </div>
               
                <div className="container-titulo">
                    <h1 className="title">Olá<br/>Eu sou <span className="destaque">Gustavo Faquim</span></h1>
                </div>

                <div>
                    <p className="container-texto">
                    Com mais de 5 anos de experiência em desenvolvimento de sistemas, 
                    tenho atuado em projetos que envolvem desde a criação de interfaces intuitivas até a integração 
                    de sistemas complexos. Sou movido por desafios que exigem criatividade e solução de problemas, 
                    e busco sempre aprender novas tecnologias para entregar resultados de alta qualidade.
                    </p>
                </div>
               
            </div>
        
        </div>
       </section>
    );
}

export default AboutContainer

import SocialNetworks from './SocialNetworks';

import Avatar from '../img/eu.jpg';

const AboutContainer = () =>{
    return(
       <section className='about-container'>
        <div className='about'>

            <h1 className="title">Olá 👋, Eu sou Gustavo Faquim 🏳️‍🌈</h1>
            <p className="subtitle">Analista de Sistemas, Desenvolvedor Full Stack</p>
            
            <div className='about-me'>
                <p>Desenvolvedor web apaixonado por inovação, formado em Sistemas de Informação pelo Instituto Federal de Educação Ciência e Tecnologia Goiano - Campus Ceres e com experiência em projetos 
                extracurriculares nas áreas de desenvolvimento, automação e educação. Habilidades em HTML, CSS, PHP, JavaScript 
                e Git, atualmente estou focando meu desenvolvimento profissional em Node JS e React. Estou preparado para 
                enfrentar desafios e proporcionar soluções eficientes e criativas.</p>

                <div className='container-img-avatar'>
                    <img src={Avatar} className='avatar' alt="Gustavo Faquim" />
                </div>

            </div>
        
        </div>
       </section>
    );
}

export default AboutContainer
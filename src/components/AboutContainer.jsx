

const AboutContainer = () =>{
    return(
       <section className='about-container'>
        <div className='about'>

            <div className='about-me'>
               
                <div className="container-titulo">
                    <h1 className="title">Olá<br/>Sou <span className="destaque">Gustavo Faquim</span></h1>
                    <p className="subtitle">desenvolvedor web</p>
                   
                </div>

                <div className="container-img">
                    <img src="/src/img/eu.jpeg" alt="Foto de Perfil" />
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
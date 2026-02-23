import { MdWebAsset } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaCode , FaSquarePollVertical, FaMagnifyingGlassChart    } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";


import '../styles/components/WhatIdoContainer.sass';

const WhatIdoContainer = () => {

    return(
        <section id='habilidades' className="what-container">

        <div className="area-what-container">

        
        
        <div className="container-titulo">
            <div className="titulo">
                <h3>Como eu posso ajudar?</h3>
                <p>Soluções sob medida para o seu negócio.</p>
            </div>
        </div>

        
        <div className="area-coisas">

            <div className='coisas' id='landing-page'>
              
                <div className="icone">
                    <MdWebAsset color='#0e77ff' />
                </div>

                <p className="titulo-coisas">Landing Pages</p>
                <p className="descricao-coisas">Páginas de alta conversão focadas em gerar vendas e leads.</p>
            </div>



            <div className='coisas' id='mobile'>
                
                <div className="icone">
                    <FaMobileAlt color='#ED1B24'  />
                </div>

                <p className="titulo-coisas">Aplicativos</p>
                <p className="descricao-coisas">Apps sob medida para potencializar seu negócio.</p>
            </div>

            <div className='coisas' id='sistemas'>
                
                <div className="icone">
                    <FaCode  color='#83CD29' />
                </div>

                <p className="titulo-coisas">Sistemas Web</p>
                <p className="descricao-coisas">Sistemas personalizados para automatizar processos.</p>
            </div>


            <div className='coisas' id='data'>            
                <div className="icone">
                    <FaSquarePollVertical color='#BD21F3' />
                </div>

                <p className="titulo-coisas">Dados</p>
                <p className="descricao-coisas">Transforme dados em decisões inteligentes.</p>

            </div>


            <div className='coisas' id='seo'>
                <div className="icone">
                    <FaMagnifyingGlassChart color='#F0DC4E'   />
                </div>
                
                <p className="titulo-coisas">SEO para Sites</p>
                <p className="descricao-coisas">Seu site nas primeiras posições do Google.</p>
            </div>


            <div className='coisas' id='consultoria'>
                
                <div className="icone">
                    <HiUserGroup color='#FE6036' />
                </div>

                <p className="titulo-coisas">Consultoria Técnica</p>
                <p className="descricao-coisas">Arquitetura, padrões e performance para escalar.</p>
            </div>

            

        </div>


        </div>
        </section>
    )
}


export default WhatIdoContainer;
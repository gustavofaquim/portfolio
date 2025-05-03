import { MdWebAsset } from "react-icons/md";
import { FaMagic, FaMobileAlt } from "react-icons/fa";
import { FaLink, FaSquarePollVertical } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";


import '../styles/components/WhatIdoContainer.sass';

const WhatIdoContainer = () => {

    return(
        <section id='habilidades' className="what-container">

        <div className="titulo">
            <h3>O que eu faço?</h3>
            <p>Meus trabalhos</p>
        </div>


        <div className="area-coisas">

            <div className='coisas' id='desenvolvimento-web'>
               <div className="icone">
                    <MdWebAsset />
               </div>

                <div className="textos">
                    <p className="titulo">Desenvolvimento Web</p>
                    <p className="descricao">
                        Da ideia à implementação, desenvolvo aplicações web modernas e responsivas que unem experiências de 
                        usuário intuitivas a sistemas robustos de back-end. Alinhando tecnologia aos seus objetivos.
                    </p>
                </div>
            </div>

            <div className='coisas' id='ui'>
               <div className="icone">
                    <FaMagic />
               </div>

                <div className="textos">
                    <p className="titulo">UI/UX Design</p>
                    <p className="descricao">
                    Transformo ideias em interfaces funcionais e visualmente atraentes, focando na experiência do usuário em cada detalhe. Através de prototipagem, testes e design centrado no usuário, crio soluções que são intuitivas, acessíveis e eficazes.
                    </p>
                </div>
            </div>

            <div className='coisas' id='mobile'>
               <div className="icone">
                    <FaMobileAlt />
               </div>

                <div className="textos">
                    <p className="titulo">Mobile (Apps)</p>
                    <p className="descricao">
                    Crio aplicativos móveis que combinam performance, usabilidade e design moderno. Seja Android ou iOS, entrego experiências fluidas e funcionais que conectam marcas ao dia a dia das pessoas, com foco em praticidade e inovação.
                    </p>
                </div>
            </div>

            <div className='coisas' id='integracao'>
               <div className="icone">
                    <FaLink />
               </div>

                <div className="textos">
                    <p className="titulo">Integrações de Sistemas</p>
                    <p className="descricao">
                    Conecto sistemas e plataformas para automatizar processos, melhorar fluxos de trabalho e garantir que as informações fluam com segurança e eficiência. Transformo operações isoladas em ecossistemas digitais integrados e inteligentes.
                    </p>
                </div>
            </div>


            <div className='coisas' id='data'>
               <div className="icone">
                    <FaSquarePollVertical />
               </div>

                <div className="textos">
                    <p className="titulo">Data & Analytics</p>
                    <p className="descricao">
                        A partir de dados brutos, desenvolvo soluções que revelam padrões, comportamentos e oportunidades. Com dashboards interativos e relatórios personalizados, entrego insights que orientam decisões estratégicas e geram valor real.
                    </p>
                </div>
            </div>


            <div className='coisas' id='consultoria'>
               <div className="icone">
                    <HiUserGroup />
               </div>

                <div className="textos">
                    <p className="titulo">Consultoria Técnica</p>
                    <p className="descricao">
                        Ofereço orientação estratégica para transformar ideias em soluções tecnológicas viáveis. Com base na minha experiência, ajudo a definir caminhos, escolher tecnologias e estruturar projetos com visão técnica e foco em resultados.
                    </p>
                </div>
            </div>

        </div>


        </section>
    )
}


export default WhatIdoContainer;
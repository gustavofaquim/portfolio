
import { FaUserGraduate } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";

import "../styles/components/journeyContainer.sass";

const JourneyContainer = () => {
  return (
    <section id='jornada' className='journey'>

      <div className="fundoAzul">

      </div>

      <div className="area-total">

        <div className="titulo-sub">
          <h3>Minha jornada até aqui</h3>
          <p>Um pouco do caminho trilhado</p>
        </div>

      <div className="area-coluna">

        <div className="educacao">

          <h3 className="titulo-area"><FaUserGraduate className="icone" /> Formação Acadêmica</h3>

          <div className="formacao" id='pos'>
              <p className="titulo">Pós-graduação em Desenvolvimento Web Full Stack</p> <br />
              <a className="link" href="https://descomplica.com.br/faculdade/a/" target="_blak">Faculdade Descomplica</a>
              <p className="descricao">A especialização me proporcionou domínio prático das principais tecnologias do desenvolvimento web moderno, tanto no front-end quanto no back-end. Aprofundei conhecimentos em frameworks, arquitetura de aplicações e boas práticas, consolidando minha atuação como desenvolvedor full stack.</p>
          </div>

          <div className="formacao" id='graduacao'>
              <p className="titulo">Bacharelado em Sistemas de Informação</p> <br />
              <a className="link" href="https://ifgoiano.edu.br/home/index.php" target="_blak">Instituto Federal de Educação, Ciência e Tecnologia Goiano</a>
              <p className="descricao">Na graduação, consolidei conhecimentos em lógica, estruturas de dados, engenharia de software e banco de dados, ampliando minha visão sistêmica e minha habilidade de solucionar problemas.</p>
          </div>

        </div>

        <div className="trabalho">
          <h3 className="titulo-area" id='titulo-experiencias'><BsPersonWorkspace className="icone" /> Experiências Profissionais</h3>

          <div className="emprego">
              <p className="titulo">Supervisor Técnico</p> <br />
              <a className="link" href="https://www.linkedin.com/company/icicuritiba" target="_blak">Instituto das Cidades Inteligentes</a>
              <div className="calendario"><FaCalendar/> <p>2024 - atualmente</p></div>
              <p className="descricao">Coordeno a equipe de suporte técnico das soluções para a Prefeitura de Anápolis, desenvolvendo integrações, BI e relatórios. Também realizo testes, documentação, implantações e automatizo fluxos de atendimento via WhatsApp.</p>
          </div>

          <div className="emprego">
              <p className="titulo">Empreendedorismo e Consultoria</p> <br />
              <div className="calendario"><FaCalendar/> <p>2023 - atualmente</p></div>
              <p className="descricao">Além da atuação profissional, sou proprietário de uma empresa de consultoria e desenvolvimento, onde realizo projetos sob demanda para clientes, criando soluções personalizadas em tecnologia.</p>
          </div>        

          <div className="emprego">
              <p className="titulo">Analista de Sistemas</p> <br />
              <a className="link" href="https://www.linkedin.com/school/unievangelica/" target="_blak">UniEvangélica</a>
              <div className="calendario"><FaCalendar/> <p>2021 - 2024</p></div>
              <p className="descricao">Atuei na manutenção do Lyceum, com desenvolvimento de integrações, relatórios e rotinas SQL, suporte a usuários e melhorias orientadas por análise de dados</p>
          </div>



        </div>

      </div>

      </div>

      

    </section>
  );
};

export default JourneyContainer;

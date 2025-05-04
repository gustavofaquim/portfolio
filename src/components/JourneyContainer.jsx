
import { FaUserGraduate } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";

import "../styles/components/journeyContainer.sass";

const JourneyContainer = () => {
  return (
    <section id='jornada' className='journey'>

      <div className="titulo">
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
              <p className="descricao">Durante a graduação, desenvolvi uma base sólida em lógica de programação, estruturas de dados, engenharia de software e banco de dados. Esse período foi essencial para minha compreensão sistêmica da tecnologia e para o desenvolvimento de um pensamento analítico voltado à resolução de problemas reais.</p>
          </div>

        </div>

        <div className="trabalho">
          <h3 className="titulo-area" id='titulo-experiencias'><BsPersonWorkspace className="icone" /> Experiências Profissionais</h3>

          <div className="emprego">
              <p className="titulo">Supervisor Técnico</p> <br />
              <a className="link" href="https://www.linkedin.com/company/icicuritiba" target="_blak">Instituto das Cidades Inteligentes</a>
              <div className="calendario"><FaCalendar/> <p>2024 - atualmente</p></div>
              <p className="descricao">Atualmente coordeno uma equipe de suporte técnico responsável pelas soluções oferecidas à Prefeitura Municipal de Anápolis. Minhas atividades incluem desenvolvimento de integrações entre sistemas, desenvolvimento de BI, produção de relatórios estratégicos, testes de software, documentação de requisitos e condução de implantações de novas soluções. Além disso, participo ativamente de reuniões com clientes e automatizo fluxos de atendimento via WhatsApp, tornando os contatos mais eficientes e inteligentes.</p>
          </div>


          <div className="emprego">
              <p className="titulo">Analista de Sistemas</p> <br />
              <a className="link" href="https://www.linkedin.com/school/unievangelica/" target="_blak">UniEvangélica</a>
              <div className="calendario"><FaCalendar/> <p>2021 - 2024</p></div>
              <p className="descricao">Atuei na sustentação e manutenção do sistema acadêmico Lyceum, realizando integrações entre sistemas, desenvolvimento de relatórios personalizados e rotinas de banco de dados. Também ofereci suporte técnico aos usuários, garantindo o funcionamento contínuo das operações e contribuindo com melhorias baseadas na análise dos dados da instituição.</p>
          </div>



        </div>

      </div>

    </section>
  );
};

export default JourneyContainer;

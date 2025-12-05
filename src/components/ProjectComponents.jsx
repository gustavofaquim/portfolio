import React, { useEffect } from 'react';

// imagens
import Mandatotectop from "../img/projetos/details/mandatotectopp.png";
import FormMantatotec from "../img/projetos/details/formmandatotec.png";
import TopoImagemDespesas from "../img/projetos/details/appdespesahome.png";
import TelaCadastroDespesa from "../img/projetos/details/appdespesacadastro.png";
import TelaSaldo from "../img/projetos/details/appdespesassaldo.png";
import TelaDetalhesApp from "../img/projetos/details/appdespesatela.png";
//import TopoImagemIntegracao from "../img/projetos/integracao.jpeg";
import DiagramaFluxoIntegracao from "../img/projetos/details/fluxoIntegracao.png";
import ImagemTopoFinanceiro from "../img/projetos/details/gestor_financeiro_add.png";
import ImagemSistemaFinanceiro from "../img/projetos/details/gestor_financeiro_recebidos.png";
import ConectaTop from "../img/projetos/details/conecta_inicial.jpeg";
import ConectaTela from "../img/projetos/details/conecta_inicial.jpeg";
import ConectaAreas from "../img/projetos/details/conecta_areas.jpeg";
import ConectaProtocolos from "../img/projetos/details/conecta_protocolos.jpeg";
import Aquitem from "../img/projetos/aquitem.png"
import AquitemHome from "../img/projetos/details/aquitem_home.png"

/*
  ProjectDetails atualizado:
  - Não renderiza mais uma gallery global.
  - Renderiza imagens que estão dentro de cada seção (sec.image ou sec.images).
*/
const ProjectDetails = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.title]);

  return (
    <div className="container-details">
      <div className="details">
        <div className="linha">
          <div className="topo">
            
            <div className="topo-textos">
              <span className={project.tagId}>{project.tag}</span>
              <h1>{project.title}</h1>
              <p>{project.intro}</p>
            </div>

            {project.imagemCapa && (
              <div className="imagem-capa" id={project.topoImageId || ''}>
                <img src={project.imagemCapa} alt={`Topo ${project.title}`} />
              </div>
            )}
          </div>
        </div>

        <div className="corpo">
          {/* removida a gallery global */}

          <div className="area-texto">
            {project.sections.map((sec, idx) => (
              <div className="texto" id={sec.id} key={idx}>
                <p className="titulo">{sec.title}</p>

                {typeof sec.content === 'string' ? (
                  <div className='descricao' dangerouslySetInnerHTML={{ __html: sec.content }} />
                ) : (
                  sec.content
                )}

                {/* Renderiza imagens da seção se houver */}
                {(sec.image || (sec.images && sec.images.length > 0)) && (
                  <div className="section-images" id={project.imageId || ''}>
                    {sec.image && <img src={sec.image} alt={`${project.title} - ${sec.title}`} />}
                    {sec.images && sec.images.map((src, i) => (
                      <img key={i} src={src} alt={`${project.title} - ${sec.title} - ${i}`} />
                    ))}
                  </div>
                )}

                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/*
  Dados dos projetos — agora com imagens dentro das sections.
  Observe como removi os campos `gallery` e usei `image` / `images` nas sections.
*/
const projects = {
  mandatotec: {
    title: 'Mandatotec',
    intro:
      'O mandatotec é uma plataforma inovadora desenvolvida para modernizar e otimizar a gestão de mandatos políticos. Ele busca oferecer ferramentas que facilitem a comunicação e a eficiência no dia a dia dos gabinetes parlamentares.',
    tag: 'Web',
    tagId: 'web',
    imagemCapa: Mandatotectop,
    topoImageId: 'mandatotec-imagem-topo',
    sections: [
      {
        title: 'O desafio',
        content:
          `Gerenciar um mandato político vai muito além de reuniões e discursos. Exige organização, escuta ativa da população, estratégias de comunicação, mobilização social e, principalmente, um relacionamento eficiente com apoiadores e cidadãos.
          Antes do Mandatotec, muitos gabinetes utilizavam planilhas dispersas, listas desatualizadas e não conseguiam mensurar o impacto das ações ou identificar os principais grupos de apoio.

          O Mandatotec nasceu para ser a plataforma completa de gestão de relacionamento com apoiadores, com foco em tecnologia, dados e inteligência estratégica.
          Criamos um sistema que permite centralizar informações, segmentar públicos, acompanhar interações, gerar relatórios detalhados e potencializar a atuação do mandato — tudo de forma simples, segura e acessível.`,
        // por exemplo, imagem ilustrativa do formulário dentro da seção
        image: FormMantatotec
      },
      {
        id: 'desenvolvimento',
        title: 'Processo de desenvolvimento',
        content: (
          <div className="lista">
            <div className="topico"><span>Imersão</span>
              <p>Entrevistas com equipes parlamentares</p>
              <p>Mapeamento das rotinas reais de trabalho</p>
            </div>

            <div className="topico"><span>Protótipo e Design UX/UI</span>
              <p>Interface moderna, leve e responsiva</p>
              <p>Navegação intuitiva, mesmo para usuários não técnicos</p>
            </div>

            <div className="topico"><span>Desenvolvimento Ágil</span>
              <p>Front-end com React + Vite</p>
              <p>Back-end com Node.js + banco relacional (Mysql)</p>
              <p>Versionamento via GitHub</p>
              <p>Deploy em nuvem automatizado</p>
            </div>

            <div className="topico"><span>Testes com equipes reais</span>
              <p>Ajustes com base em feedbacks diretos</p>
              <p>Implantação assistida com treinamento</p>
            </div>
          </div>
        ),
      },
    ],
  },


  aquitem: {
  title: 'Aqui Tem',
  intro:
    'O Aqui Tem é uma plataforma desenvolvida para conectar cidadãos a serviços, comércios e pontos importantes da cidade, oferecendo praticidade e rapidez na busca por informações essenciais.',
  tag: 'App',
  tagId: 'app',
  imagemCapa: AquitemHome,
  topoImageId: 'aquitem-imagem-topo',
  imageId: 'aquitem-imagem',
  sections: [
    {
      title: 'O desafio',
      content:
        'Antes do Aqui Tem, informações sobre serviços locais, estabelecimentos e pontos de interesse estavam dispersas e de difícil acesso. O desafio foi centralizar esses dados em uma única plataforma intuitiva, ao alcance de qualquer cidadão.',
      
    },
    {
      title: 'Meu papel no projeto',
      content:
        'No Aqui Tem, atuei no desenvolvimento e aperfeiçoamento da plataforma, garantindo organização dos dados, navegação eficiente e um layout limpo e moderno.',
      
    },
    {
      id: 'desenvolvimento',
      title: 'Processo de desenvolvimento',
      content: (
        <div className="lista">
          <div className="topico"><span>Levantamento de requisitos</span>
            <p>Mapeamento do que a população mais busca</p>
            <p>Identificação das categorias prioritárias</p>
          </div>

          <div className="topico"><span>Design UX/UI</span>
            <p>Interface simples, rápida e organizada por filtros</p>
            <p>Navegação otimizada para dispositivos móveis</p>
          </div>

          <div className="topico"><span>Desenvolvimento técnico</span>
            <p>React.js no front-end</p>
            <p>Node.js</p>
            <p>Banco de dados não relacional</p>
          </div>

          <div className="topico"><span>Testes e validação</span>
            <p>Feedback contínuo de usuários reais</p>
            <p>Ajustes de categorização, buscas e filtros</p>
          </div>
        </div>
      ),
      // opcional
      // images: [ImagemAquiTem1, ImagemAquiTem2]
    }
  ]
},


  conecta: {
    title: 'Conecta Anápolis',
    intro:
      'O Conecta Anápolis é um aplicativo inovador desenvolvido para reunir em um único lugar diversos serviços da Prefeitura de Anápolis. Criado para facilitar o acesso da população, o app integra funcionalidades essenciais do dia a dia, modernizando a relação entre o cidadão e a administração pública.',
    tag: 'App',
    tagId: 'app',
    imagemCapa: ConectaTop,
    topoImageId: 'conecta-imagem-topo',
    imageId: 'conecta-imagem',
    // agora as imagens do app estão dentro das sections
    sections: [
      {
        title: 'O desafio',
        content:
          'Antes do Conecta Anápolis, os cidadãos precisavam navegar entre diferentes portais, fazer ligações para setores distintos ou até mesmo se deslocar presencialmente para resolver tarefas simples. A ausência de centralização gerava filas, sobrecarga no atendimento interno e dificuldades tanto para servidores quanto para a população.',
        image: ConectaAreas
      },
      {
        title: 'Meu papel no projeto',
        content:
          'Atuei como Supervisor da Equipe de Suporte Técnico, sendo responsável por testar e validar cada sprint entregue pela equipe de desenvolvimento, garantindo que o aplicativo fosse funcional, coerente e aderente às necessidades reais da população.',
        image: ConectaProtocolos
      },
      {
        id: 'desenvolvimento',
        title: 'Processo de desenvolvimento',
        content: (
          <div className="lista">
            
            <div className="topico"><span>Imersão</span>
              <p>Levantamento das necessidades de serviços da Prefeitura</p>
              <p>Mapeamento de fluxos e gargalos no atendimento ao cidadão</p>
            </div>

            <div className="topico"><span>Design UX/UI</span>
              <p>Interface moderna, acessível e responsiva</p>
              <p>Experiência pensada para todos os públicos</p>
            </div>

            

            <div className="topico">
              <span>Testes e validações</span>
              <p>Testes de usabilidade e performance</p>
              <p>Ajustes feitos com feedback real de usuários</p>
              <p>Correções alinhadas entre suporte e desenvolvimento</p>
            </div>

            <div className="topico"><span>Implantação e Treinamento</span>
              <p>Apresentação pública do aplicativo</p>
              <p>Treinamentos para servidores e população</p>
              <p>Acompanhamento pós-lançamento</p>
            </div>
          </div>
        ),
        
      }
    ]
  },

  appDespesa: {
    title: 'App de Divisão de Despesas',
    intro:
      'Desenvolvido para facilitar a divisão de gastos entre amigos durante eventos, viagens ou situações do dia a dia, o app permite controle total das despesas e sincronização automática entre os participantes. Funciona de forma offline-first, garantindo usabilidade mesmo sem internet.',
    tag: 'App',
    tagId: 'app',
    imagemCapa: TopoImagemDespesas,
    topoImageId: 'divisao-imagem-topo',
    imageId: 'divisao-imagem',
    sections: [
      {
        title: 'O desafio',
        content:
          'Em encontros entre amigos, é comum que alguém pague por todos e depois precise dividir os custos. O desafio era criar um app simples, funcional e rápido que registrasse os gastos e mostrasse de forma clara quem deve o quê para quem — mesmo offline.',
        image: TelaCadastroDespesa
      },
      {
        id: 'desenvolvimento',
        title: 'Processo de desenvolvimento',
        content: (
          <div className="lista">
            <div className="topico"><span>Levantamento de requisitos</span>
              <p>Estudo de uso real em eventos entre amigos</p>
              <p>Foco em usabilidade offline e simplicidade</p>
            </div>

            <div className="topico"><span>Protótipo e Design</span>
              <p>Layout limpo e moderno com foco mobile-first</p>
              <p>Interface amigável para usuários leigos</p>
            </div>

            <div className="topico"><span>Desenvolvimento técnico</span>
              <p>React Native + TypeScript</p>
              <p>Banco de dados local com SQLite</p>
              <p>Sincronização automática com servidor remoto</p>
              <p>Persistência de dados com lógica offline-first</p>
            </div>

            <div className="topico"><span>Validação e testes</span>
              <p>Testes em Android real e emulador</p>
              <p>Simulação de uso sem internet</p>
              <p>Ajustes finos de performance e UX</p>
            </div>
          </div>
        
        ),
       // images: [TelaSaldo, TelaDetalhesApp]
      }
    ]
  },

  integracao: {
    title: 'Integração Ábaris ↔ Lyceum',
    intro:
      'Criamos uma ponte eficiente entre Ábaris e Lyceum para automatizar a importação de documentos e reduzir trabalho manual.',
    tag: 'Web',
    //imagemCapa: TopoImagemIntegracao,
    tagId: 'web',
    sections: [
      {
        title: 'O desafio',
        content:
          'A rotina de importar manualmente documentos anexados no sistema Ábaris para o Lyceum era repetitiva, sujeita a erros e demandava tempo. O desafio era criar uma integração automática entre os dois sistemas.',
        image: DiagramaFluxoIntegracao
      },
      {
        id: 'desenvolvimento',
        title: 'Solução técnica',
        content: (
          <div className='lista'>
            
            <div className="topico">
              <span>Utilizando o Node.js como base da arquitetura, desenvolvi um sistema de integração robusto e flexível:</span>
              <p>Criação de rotinas assíncronas com controle fino de execução</p>
              <p>Tratamento de erros e fallback automático para reenvio</p>
              <p>Logs estruturados para auditoria e análise de falhas</p>
              <p>Validação e normalização dos dados</p>
              <p>Envio automático dos documentos ao Lyceum via API</p>
            </div>
          </div>
        ),
      }
    ]
  },

  controleFinanceiro: {
    title: 'Sistema de Controle Financeiro por Projeto',
    intro:
      'Sistema para gerenciar emissão de notas fiscais e acompanhamento de pagamentos por projeto, com painel em Power BI.',
    imagemCapa: ImagemTopoFinanceiro,
    sections: [
      {
        title: 'O desafio',
        content:
          'A gestão financeira por projeto era feita de forma descentralizada. O objetivo: visibilidade, controle e padronização.',
        image: ImagemSistemaFinanceiro
      },
      {
        id: 'desenvolvimento',
        title: 'Solução técnica',
        content: (
          <div className='lista'>
            <div className="topico">
              <span>Para resolver esse problema foi desenvolvido um sistema web</span>
              <p>React.js frontend</p>
              <p>Node.js + PostgreSQL no backend</p>
              <p>Painel de BI com Power BI</p>
              <p>Controle por níveis de acesso</p>
            </div>
          </div>
        )
      }
    ]
  }
};

// Exports
export const Mandatotec = () => <ProjectDetails project={projects.mandatotec} />;
export const AquiTem = () => <ProjectDetails project={projects.aquitem} />;
export const ConectaAnapolis = () => <ProjectDetails project={projects.conecta} />;
export const AppDespesa = () => <ProjectDetails project={projects.appDespesa} />;
export const IntegracaoAbarysLyceum = () => <ProjectDetails project={projects.integracao} />;
export const ControleFinanceiroProjetos = () => <ProjectDetails project={projects.controleFinanceiro} />;

export default ProjectDetails;

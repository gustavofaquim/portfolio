import React, { useEffect } from 'react';

// Agrupe as imagens em um objeto e importe apenas o que for necessário
import Mandatotectop from "../img/projetos/details/mandatotectopp.png";
import FormMantatotec from "../img/projetos/details/formmandatotec.png";
import TopoImagemDespesas from "../img/projetos/details/appdespesahome.png";
import TelaCadastroDespesa from "../img/projetos/details/appdespesacadastro.png";
import TelaSaldo from "../img/projetos/details/appdespesassaldo.png";
import TelaDetalhesApp from "../img/projetos/details/appdespesatela.png";
import TopoImagemIntegracao from "../img/projetos/integracaocapa.png";
import DiagramaFluxoIntegracao from "../img/projetos/details/fluxoIntegracao.png";
import ImagemTopoFinanceiro from "../img/projetos/details/gestor_financeiro_add.png";
import ImagemSistemaFinanceiro from "../img/projetos/details/gestor_financeiro_recebidos.png";
import ConectaTop from "../img/projetos/details/conecta_inicial.jpeg";
import ConectaTela from "../img/projetos/details/conecta_inicial.jpeg";
import ConectaAreas from "../img/projetos/details/conecta_areas.jpeg";
import ConectaProtocolos from "../img/projetos/details/conecta_protocolos.jpeg";

/*
  Componente genérico ProjectDetails
  - recebe um objeto `project` com: title, intro, topoImage, gallery (array), sections (array de {id?, title, content})
  - centraliza o scrollToTop
  - mantém as classes CSS do seu design atual para minimizar mudanças no CSS
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
              <h1>{project.title}</h1>
              <p>{project.intro}</p>
            </div>

            {project.imagemCapa && (
              <div className="imagem-geral" id={project.topoImageId || ''}>
                <img src={project.imagemCapa} alt={`Topo ${project.title}`} />
              </div>
            )}
          </div>
        </div>

        <div className="corpo">
          {project.gallery && project.gallery.length > 0 && (
            <div className="imagem" id={project.galleryId || ''}>
              {project.gallery.map((src, i) => (
                <img key={i} src={src} alt={`${project.title} - ${i}`} />
              ))}
            </div>
          )}

          <div className="area-texto">
            {project.sections.map((sec, idx) => (
              <div className="texto" id={sec.id} key={idx}>
                <p className="titulo">{sec.title}</p>
                {typeof sec.content === 'string' ? (
                  <div dangerouslySetInnerHTML={{ __html: sec.content }} />
                ) : (
                  sec.content
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
  Dados dos projetos — aqui centralizamos todo o conteúdo. Assim fica fácil de manter,
  reduzir duplicidade e internacionalizar/alterar textos sem mexer na estrutura do JSX.
*/
const projects = {
  mandatotec: {
    title: 'Mandatotec',
    intro:
      'O mandatotec é uma plataforma inovadora desenvolvida para modernizar e otimizar a gestão de mandatos políticos. Ele busca oferecer ferramentas que facilitem a comunicação e a eficiência no dia a dia dos gabinetes parlamentares.',
    imagemCapa: Mandatotectop,
    gallery: [FormMantatotec],
    sections: [
      {
        title: 'O desafio',
        content:
          `Gerenciar um mandato político vai muito além de reuniões e discursos. Exige organização, escuta ativa da população, estratégias de comunicação, mobilização social e, principalmente, um relacionamento eficiente com apoiadores e cidadãos.
          Antes do Mandatotec, muitos gabinetes utilizavam planilhas dispersas, listas desatualizadas e não conseguiam mensurar o impacto das ações ou identificar os principais grupos de apoio.

          O Mandatotec nasceu para ser a plataforma completa de gestão de relacionamento com apoiadores, com foco em tecnologia, dados e inteligência estratégica.
          Criamos um sistema que permite centralizar informações, segmentar públicos, acompanhar interações, gerar relatórios detalhados e potencializar a atuação do mandato — tudo de forma simples, segura e acessível.`,
      },
      {
        id: 'desenvolvimento',
        title: 'Processo de desenvolvimento',
        content: (
          <ol className="lista">
            <li className="topico">Imersão
              <ul>
                <li>Entrevistas com equipes parlamentares</li>
                <li>Mapeamento das rotinas reais de trabalho</li>
              </ul>
            </li>

            <li className="topico">Protótipo e Design UX/UI
              <ul>
                <li>Interface moderna, leve e responsiva</li>
                <li>Navegação intuitiva, mesmo para usuários não técnicos</li>
              </ul>
            </li>

            <li className="topico">Desenvolvimento Ágil
              <ul>
                <li>Front-end com React + Vite</li>
                <li>Back-end com Node.js + banco relacional (Mysql)</li>
                <li>Versionamento via GitHub</li>
                <li>Deploy em nuvem automatizado</li>
              </ul>
            </li>

            <li className="topico">Testes com equipes reais
              <ul>
                <li>Ajustes com base em feedbacks diretos</li>
                <li>Implantação assistida com treinamento</li>
              </ul>
            </li>
          </ol>
        ),
      },
    ],
  },

  conecta: {
    title: 'Conecta Anápolis',
    intro:
      'O Conecta Anápolis é um aplicativo inovador desenvolvido para reunir em um único lugar diversos serviços da Prefeitura de Anápolis. Criado para facilitar o acesso da população, o app integra funcionalidades essenciais do dia a dia, modernizando a relação entre o cidadão e a administração pública.',
    imagemCapa: ConectaTop,
    topoImageId: 'conecta-imagem-topo',
    gallery: [ConectaTela, ConectaAreas, ConectaProtocolos],
    galleryId: 'conecta-imagem',
    sections: [
      {
        title: 'O desafio',
        content:
          'Antes do Conecta Anápolis, os cidadãos precisavam navegar entre diferentes portais, fazer ligações para setores distintos ou até mesmo se deslocar presencialmente para resolver tarefas simples. A ausência de centralização gerava filas, sobrecarga no atendimento interno e dificuldades tanto para servidores quanto para a população.'
      },
      {
        title: 'Meu papel no projeto',
        content:
          'Atuei como Supervisor da Equipe de Suporte Técnico, sendo responsável por testar e validar cada sprint entregue pela equipe de desenvolvimento, garantindo que o aplicativo fosse funcional, coerente e aderente às necessidades reais da população.'
      },
      {
        id: 'desenvolvimento',
        title: 'Processo de desenvolvimento',
        content: (
          <ol className="lista">
            <li className="topico">Imersão<ul><li>Levantamento das necessidades de serviços da Prefeitura</li><li>Mapeamento de fluxos e gargalos no atendimento ao cidadão</li></ul></li>
            <li className="topico">Design UX/UI<ul><li>Interface moderna, acessível e responsiva</li><li>Experiência pensada para todos os públicos</li></ul></li>
            <li className="topico">Desenvolvimento Ágil<ul><li>Metodologia SCRUM com entregas contínuas</li><li>Validação técnica a cada sprint (com minha participação direta)</li><li>Integração com sistemas internos da Prefeitura</li><li>Infraestrutura em nuvem</li></ul></li>
            <li className="topico">Testes e validações<ul><li>Testes de usabilidade e performance</li><li>Ajustes feitos com feedback real de usuários</li><li>Correções alinhadas entre suporte e desenvolvimento</li></ul></li>
            <li className="topico">Implantação e Treinamento<ul><li>Apresentação pública do aplicativo</li><li>Treinamentos para servidores e população</li><li>Acompanhamento pós-lançamento</li></ul></li>
          </ol>
        )
      }
    ]
  },

  appDespesa: {
    title: 'App de Divisão de Despesas',
    intro:
      'Desenvolvido para facilitar a divisão de gastos entre amigos durante eventos, viagens ou situações do dia a dia, o app permite controle total das despesas e sincronização automática entre os participantes. Funciona de forma offline-first, garantindo usabilidade mesmo sem internet.',
    imagemCapa: TopoImagemDespesas,
    gallery: [TelaCadastroDespesa, TelaSaldo, TelaDetalhesApp],
    sections: [
      {
        title: 'O desafio',
        content:
          'Em encontros entre amigos, é comum que alguém pague por todos e depois precise dividir os custos. O desafio era criar um app simples, funcional e rápido que registrasse os gastos e mostrasse de forma clara quem deve o quê para quem — mesmo offline.'
      },
      {
        id: 'desenvolvimento',
        title: 'Processo de desenvolvimento',
        content: (
          <ol className="lista">
            <li className="topico">Levantamento de requisitos<ul><li>Estudo de uso real em eventos entre amigos</li><li>Foco em usabilidade offline e simplicidade</li></ul></li>
            <li className="topico">Protótipo e Design<ul><li>Layout limpo e moderno com foco mobile-first</li><li>Interface amigável para usuários leigos</li></ul></li>
            <li className="topico">Desenvolvimento técnico<ul><li>React Native + TypeScript</li><li>Banco de dados local com SQLite</li><li>Sincronização automática com servidor remoto</li><li>Persistência de dados com lógica offline-first</li></ul></li>
            <li className="topico">Validação e testes<ul><li>Testes em Android real e emulador</li><li>Simulação de uso sem internet</li><li>Ajustes finos de performance e UX</li></ul></li>
          </ol>
        )
      }
    ]
  },

  integracao: {
    title: 'Integração Ábaris ↔ Lyceum',
    intro:
      'Criamos uma ponte eficiente entre Ábaris e Lyceum para automatizar a importação de documentos e reduzir trabalho manual.',
    imagemCapa: TopoImagemIntegracao,
    gallery: [DiagramaFluxoIntegracao],
    sections: [
      {
        title: 'O desafio',
        content:
          'A rotina de importar manualmente documentos anexados no sistema Ábaris para o Lyceum era repetitiva, sujeita a erros e demandava tempo. O desafio era criar uma integração automática entre os dois sistemas.'
      },
      {
        id: 'desenvolvimento',
        title: 'Solução técnica',
        content: (
          <div>
            <p>Utilizando o Node.js como base da arquitetura, desenvolvi um sistema de integração robusto e flexível:</p>
            <ul className="lista">
              <li>Criação de rotinas assíncronas com controle fino de execução</li>
              <li>Tratamento de erros e fallback automático para reenvio</li>
              <li>Logs estruturados para auditoria e análise de falhas</li>
              <li>Validação e normalização dos dados</li>
              <li>Envio automático dos documentos ao Lyceum via API</li>
            </ul>
          </div>
        )
      }
    ]
  },

  controleFinanceiro: {
    title: 'Sistema de Controle Financeiro por Projeto',
    intro:
      'Sistema para gerenciar emissão de notas fiscais e acompanhamento de pagamentos por projeto, com painel em Power BI.',
    imagemCapa: ImagemTopoFinanceiro,
    gallery: [ImagemSistemaFinanceiro],
    sections: [
      {
        title: 'O desafio',
        content:
          'A gestão financeira por projeto era feita de forma descentralizada. O objetivo: visibilidade, controle e padronização.'
      },
      {
        id: 'desenvolvimento',
        title: 'Solução técnica',
        content: (
          <div>
            <p>Para resolver esse problema foi desenvolvido um sistema web:</p>
            <ul className="lista">
              <li>React.js frontend</li>
              <li>Node.js + PostgreSQL no backend</li>
              <li>Painel de BI com Power BI</li>
              <li>Controle por níveis de acesso</li>
            </ul>
          </div>
        )
      }
    ]
  }
};

// Exportações específicas para manter compatibilidade com seu uso atual
export const Mandatotec = () => <ProjectDetails project={projects.mandatotec} />;
export const ConectaAnapolis = () => <ProjectDetails project={projects.conecta} />;
export const AppDespesa = () => <ProjectDetails project={projects.appDespesa} />;
export const IntegracaoAbarysLyceum = () => <ProjectDetails project={projects.integracao} />;
export const ControleFinanceiroProjetos = () => <ProjectDetails project={projects.controleFinanceiro} />;

export default ProjectDetails;

import React, { useEffect } from 'react';

// imagens
import Mandatotectop from "../img/projetos/details/mandatotectopp.png";
import FormMantatotec from "../img/projetos/details/formmandatotec.png";
import TopoImagemDespesas from "../img/projetos/details/appdespesahome.png";
import TelaCadastroDespesa from "../img/projetos/details/appdespesacadastro.png";
import DiagramaFluxoIntegracao from "../img/projetos/details/fluxoIntegracao.png";
import ImagemTopoFinanceiro from "../img/projetos/details/gestor_financeiro_add.png";
import ImagemSistemaFinanceiro from "../img/projetos/details/gestor_financeiro_recebidos.png";
import ConectaTop from "../img/projetos/details/conecta_inicial.png";
import ConectaAreas from "../img/projetos/details/conecta_areas.jpeg";
import ConectaProtocolos from "../img/projetos/details/conecta_protocolos.jpeg";
import AquitemHome from "../img/projetos/details/aquitem_home.png"
import ZapCapa from "../img/projetos/details/zap-capa.png"
import ZapEquipe from "../img/projetos/details/zap24-filas.jpg"

/*
  ProjectDetails atualizado:
  - Não renderiza mais uma gallery global.
  - Renderiza imagens que estão dentro de cada seção (sec.image ou sec.images).
*/
const ProjectDetails = ({ project }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.title]);

  // Componente Details (trecho completo adaptado)
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
        <div className="area-texto">
          {project.sections.map((sec, idx) => (
            <div className="texto" id={sec.id} key={idx}>
              <p className="titulo">{sec.title}</p>

              {/* --- NOVO: Renderiza cards de desafios quando existir sec.desafios --- */}
              {Array.isArray(sec.desafios) && sec.desafios.length > 0 ? (
                <div className="desafios-grid" role="list" aria-label={`${sec.title} - desafios`}>
                  {sec.desafios.map((d, i) => (
                    <article
                      className="card-desafio"
                      key={i}
                      role="listitem"
                      aria-labelledby={`desafio-${idx}-${i}-title`}
                      tabIndex={0}
                    >
                      <h3 id={`desafio-${idx}-${i}-title`} className="card-title">
                        {d.title}
                      </h3>
                      <p className="card-desc">{d.description}</p>
                    </article>
                  ))}
                </div>
              ) : (
                /* --- Comportamento antigo: se content for string, renderiza como HTML; se não, assume JSX --- */
                (typeof sec.content === 'string' ? (
                  <div className="descricao" dangerouslySetInnerHTML={{ __html: sec.content }} />
                ) : (
                  sec.content
                ))
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
        title: 'Principais Desafios',
        desafios: [
          {
            title: 'Falta de organização eficiente',
            description:
              'A gestão de um mandato político exige organização profunda, mas muitos gabinetes ainda operavam com processos manuais e desestruturados.',
          },
          {
            title: 'Uso de planilhas dispersas',
            description:
              'Antes do Mandatotec, informações importantes estavam espalhadas em diferentes planilhas e documentos, dificultando o acesso e o trabalho colaborativo.',
          },
          {
            title: 'Listas desatualizadas de apoiadores',
            description:
              'Sem uma base centralizada, era difícil manter listas atualizadas, acompanhar apoiadores e entender quem realmente participava das ações do mandato.',
          },
          {
            title: 'Dificuldade para mensurar resultados',
            description:
              'Gabinetes não conseguiam medir o impacto das ações, identificar grupos estratégicos ou analisar dados com precisão.',
          },
          {
            title: 'Ausência de inteligência estratégica',
            description:
              'Sem dados consolidados e fácil visualização, era quase impossível planejar ações de comunicação, mobilização e relacionamento com apoiadores.',
          },
        ],
      },
      {
      title: 'Meu papel no projeto',
      content:
        'No Aqui Tem, atuei no desenvolvimento e aperfeiçoamento da plataforma, garantindo organização dos dados, navegação eficiente e um layout limpo e moderno.',
      
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
      title: 'Principais Desafios',
      desafios: [
        {
          title: 'Informações dispersas',
          description:
            'Antes do Aqui Tem, os dados sobre serviços locais, estabelecimentos e pontos de interesse estavam espalhados em diferentes fontes, dificultando o acesso pelo cidadão.',
        },
        {
          title: 'Dificuldade para encontrar serviços',
          description:
            'A população não tinha um local único e confiável para consultar rapidamente onde encontrar serviços e comércios próximos.',
        },
        {
          title: 'Falta de centralização',
          description:
            'A ausência de uma plataforma unificada tornava o processo de busca demorado e pouco eficiente, tanto para moradores quanto para visitantes.',
        },
        {
          title: 'Necessidade de uma solução intuitiva',
          description:
            'O desafio foi concentrar todas essas informações em uma plataforma simples, acessível e fácil de navegar para qualquer cidadão.',
        },
      ],
    },
    {
      title: 'Meu papel no projeto',
      content:
        'No Aqui Tem, atuei no desenvolvimento e aperfeiçoamento da plataforma, garantindo organização dos dados, navegação eficiente e um layout limpo e moderno.',
      
    },
    
  ]
},

zap24h: {
  title: 'Zap 24h – Prefeitura de Anápolis',
  intro:
    'O Zap 24h é o canal oficial de atendimento via WhatsApp da Prefeitura de Anápolis, criado para oferecer ao cidadão uma forma rápida, moderna e acessível de solicitar serviços, registrar demandas e obter informações. Integrado a diversos sistemas internos, o canal funciona 24 horas por dia, automatizando atendimentos, reduzindo filas e tornando a comunicação mais eficiente.',
  tag: 'Sistema',
  tagId: 'system',
  imagemCapa: ZapCapa, 
  topoImageId: 'zap24h-imagem-topo',
  imageId: 'zap24h-imagem',

  sections: [
    {
      title: 'Principais Desafios',
      desafios: [
        {
          title: 'Múltiplos canais desconectados',
          description:
            'Antes do Zap 24h, o cidadão precisava recorrer a ligações, e-mails, atendimentos presenciais ou mensagens enviadas a diferentes setores, dificultando o atendimento.',
        },
        {
          title: 'Falta de centralização',
          description:
            'Não havia um ponto único de entrada para as solicitações, o que complicava o acompanhamento e aumentava o tempo de resposta.',
        },
        {
          title: 'Altas filas e retrabalho',
          description:
            'A ausência de automação e de comunicação integrada gerava filas, sobrecarga das equipes e necessidade constante de atender a mesma demanda em mais de um canal.',
        },
        {
          title: 'Necessidade de modernização',
          description:
            'A prefeitura precisava modernizar o atendimento, tornando-o mais rápido, acessível e eficiente sem perder a humanização.',
        },
      ],
    },

    {
      title: 'Meu papel no projeto',
      content:
        'Atuei em todas as fases do projeto, desde o levantamento de requisitos até o desenvolvimento, testes, implantação e melhorias contínuas. Contribuí diretamente na modelagem dos fluxos de conversa, no desenho das integrações com sistemas internos e na evolução constante da lógica de atendimento com base em métricas reais e feedback da população.',
      image: ZapEquipe
    },
  ],
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
        title: 'Principais Desafios',
        desafios: [
          {
            title: 'Canais dispersos e pouca centralização',
            description:
              'Antes do Conecta Anápolis, o cidadão precisava acessar diferentes portais, fazer ligações para vários setores ou até se deslocar presencialmente para resolver tarefas simples.',
          },
          {
            title: 'Sobrecarga no atendimento interno',
            description:
              'A falta de um ponto único de entrada gerava acúmulo de demandas, exigindo que servidores lidassem manualmente com solicitações vindas de vários canais.',
          },
          {
            title: 'Filas e processos lentos',
            description:
              'A ausência de integração fazia com que pedidos se acumulassem, resultando em filas e maior tempo de resposta para a população.',
          },
          {
            title: 'Dificuldade para servidores e cidadãos',
            description:
              'A experiência era complexa para todos: o cidadão não sabia qual canal utilizar e o servidor tinha dificuldade para acompanhar e responder às demandas.',
          },
        ],
      },
      {
        title: 'Meu papel no projeto',
        content:
          'Atuei como Supervisor da Equipe de Suporte Técnico, sendo responsável por testar e validar cada sprint entregue pela equipe de desenvolvimento, garantindo que o aplicativo fosse funcional, coerente e aderente às necessidades reais da população.',
        image: ConectaProtocolos
      },

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
        title: 'Principais Desafios',
        desafios: [
        {
          title: 'Processo totalmente manual',
          description:
            'A importação de documentos do Ábaris para o Lyceum era feita manualmente, tornando o fluxo lento e dependente da ação constante da equipe.',
        },
        {
          title: 'Alta chance de erros',
          description:
            'A repetição de tarefas manuais aumentava a probabilidade de falhas, inconsistências e documentos enviados para o local errado.',
        },
        {
          title: 'Baixa eficiência operacional',
          description:
            'A rotina demandava tempo da equipe, que poderia ser direcionado para tarefas mais estratégicas, mas acabava presa em operações repetitivas.',
        },
        {
          title: 'Falta de integração entre os sistemas',
          description:
            'Ábaris e Lyceum não se comunicavam de forma automática, dificultando a sincronização de dados e documentos entre as plataformas.',
        }
      ],
      },
      
    ]
  },

  controleFinanceiro: {
    title: 'Sistema de Controle Financeiro',
    intro:
      'Sistema para gerenciar emissão de notas fiscais e acompanhamento de pagamentos por projeto, com painel em Power BI.',
    imagemCapa: ImagemTopoFinanceiro,
    sections: [
      {
        title: 'Principais Desafios',
          desafios: [
        {
          title: 'Gestão financeira descentralizada',
          description:
            'Antes, o controle financeiro por projeto era realizado de forma fragmentada, com informações distribuídas em diferentes planilhas e documentos.',
        },
        {
          title: 'Falta de visibilidade e padronização',
          description:
            'A ausência de um processo unificado dificultava enxergar o cenário geral dos projetos, comprometendo o acompanhamento e a tomada de decisões.',
        },
        {
          title: 'Relatórios gerados manualmente',
          description:
            'Os relatórios precisavam ser montados manualmente, consumindo tempo, aumentando a chance de erros e dificultando a atualização de dados em tempo real.',
        },
        {
          title: 'Dificuldade de controle e auditoria',
          description:
            'Sem um sistema centralizado, era desafiador rastrear movimentações, validar informações e garantir a conformidade das operações.',
        },
        {
          title: 'Processos pouco eficientes',
          description:
            'A falta de automação tornava o fluxo lento, burocrático e dependente de retrabalho constante para manter dados atualizados.',
        },
      ],
      
      },
       {
        title: 'Meu papel no projeto',
        content:
          'Atuei como desenvolvedor no projeto, sendo responsável por implementar novas funcionalidades, corrigir falhas identificadas ao longo das sprints e garantir que cada entrega fosse tecnicamente consistente, eficiente e alinhada às necessidades reais dos usuários.',
      },
      
    ]
  }
};

// Exports
export const Mandatotec = () => <ProjectDetails project={projects.mandatotec} />;
export const AquiTem = () => <ProjectDetails project={projects.aquitem} />;
export const Zap24h = () => <ProjectDetails project={projects.zap24h} />;
export const ConectaAnapolis = () => <ProjectDetails project={projects.conecta} />;
export const AppDespesa = () => <ProjectDetails project={projects.appDespesa} />;
export const IntegracaoAbarysLyceum = () => <ProjectDetails project={projects.integracao} />;
export const ControleFinanceiroProjetos = () => <ProjectDetails project={projects.controleFinanceiro} />;

export default ProjectDetails;

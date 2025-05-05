import { useEffect } from "react";

import Mandatotectop from "../img/projetos/details/mandatotectopp.png"
import FormMantatotec from "../img/projetos/details/formmandatotec.png"
import TopoImagemDespesas from "../img/projetos/details/appdespesahome.png"
import TelaCadastroDespesa from "../img/projetos/details/appdespesacadastro.png"
import TelaSaldo from "../img/projetos/details/appdespesassaldo.png"
import TelaDetalhesApp from "../img/projetos/details/appdespesatela.png";
import TopoImagemIntegracao from "../img/projetos/integracaocapa.png"
import DiagramaFluxoIntegracao from "../img/projetos/details/fluxoIntegracao.png"
import ImagemTopoFinanceiro from "../img/projetos/details/gestor_financeiro_add.png"
import ImagemSistemaFinanceiro from "../img/projetos/details/gestor_financeiro_recebidos.png"

const Mandatotec = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-details">
      <div className="details">
          
          <div className="linha">
            <div className="topo">
                <div className="topo-textos">
                    <h1>Mandatotec</h1>
                    <hr />
                    <p>O mandatotec é uma plataforma inovadora desenvolvida para modernizar e otimizar a gestão de mandatos políticos. Ele busca oferecer ferramentas que facilitem a comunicação e a eficiência no dia a dia dos gabinetes parlamentares. </p>
                </div>

                  <div className="topo-imagem">
                    <img src={Mandatotectop} alt="" />
                  </div>
            </div>
          </div>

          <div className="corpo">

              <div className="imagem">
                <img src={FormMantatotec} alt="" />
              </div>

              <div className="area-texto">

                <div className="texto">
                  <p className="titulo">O desafio</p>
                  <p>
                    Gerenciar um mandato político vai muito além de reuniões e discursos. Exige organização, escuta ativa da população, estratégias de comunicação, mobilização social e, principalmente, um relacionamento eficiente com apoiadores e cidadãos.
                    Antes do Mandatotec, muitos gabinetes utilizavam planilhas dispersas, listas desatualizadas e não conseguiam mensurar o impacto das ações ou identificar os principais grupos de apoio.
                  </p>
                  <br />
                  <p>
                    O Mandatotec nasceu para ser a plataforma completa de gestão de relacionamento com apoiadores, com foco em tecnologia, dados e inteligência estratégica.
                    Criamos um sistema que permite centralizar informações, segmentar públicos, acompanhar interações, gerar relatórios detalhados e potencializar a atuação do mandato — tudo de forma simples, segura e acessível.
                  </p>
                  
                </div>

                <div className="texto" id='desenvolvimento'>
                  <p className="titulo">Processo de desenvolvimento</p>
                  
                  <ol className="lista">
                    <li className="topico">Imersão</li>
                      <ul>
                        <li>Entrevistas com equipes parlamentares</li>
                        <li>Mapeamento das rotinas reais de trabalho</li>
                      </ul>
                    <li className="topico">Protótipo e Design UX/UI</li>
                      <ul>
                        <li>Interface moderna, leve e responsiva</li>
                        <li>Navegação intuitiva, mesmo para usuários não técnicos</li>
                      </ul>
                    <li className="topico">Desenvolvimento Ágil</li>
                      <ul>
                        <li>Front-end com React + Vite</li>
                        <li>Back-end com Node.js + banco relacional (Mysql)</li>
                        <li>Versionamento via GitHub</li>
                        <li>Deploy em nuvem automatizado</li>
                      </ul>
                    <li className="topico">Testes com equipes reais</li>
                      <ul>
                        <li>Ajustes com base em feedbacks diretos</li>
                        <li>Implantação assistida com treinamento</li>
                      </ul>
                  </ol>
                  
                </div>

              </div>


          </div>


          </div>
    </div>
  );
};
  
const AppDespesa = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="container-details">
      <div className="details">
        
        <div className="linha">
          <div className="topo">
            <div className="topo-textos">
              <h1>App de Divisão de Despesas</h1>
              <hr />
              <p>
                Desenvolvido para facilitar a divisão de gastos entre amigos durante eventos, viagens ou situações do dia a dia, o app permite controle total das despesas e sincronização automática entre os participantes. Funciona de forma offline-first, garantindo usabilidade mesmo sem internet.
              </p>
            </div>

            <div className="topo-imagem">
              <img src={TopoImagemDespesas} id='imagem-app' alt="Tela inicial do app de despesas" />
            </div>
          </div>
        </div>

        <div className="corpo">

          <div className="imagem" id='imagem-app-card'>
            <img src={TelaCadastroDespesa} id='imagem-app-cadastro' alt="Tela de cadastro de despesa" />
            <img src={TelaSaldo} id='imagem-app-cadastro' alt="Tela de cadastro de despesa" />
            <img src={TelaDetalhesApp} id='imagem-app-cadastro' alt="Tela de cadastro de despesa" />
          </div>

          <div className="area-texto">

            <div className="texto">
              <p className="titulo">O desafio</p>
              <p>
                Em encontros entre amigos, é comum que alguém pague por todos e depois precise dividir os custos. Mas isso geralmente gera confusão, esquecimentos ou cálculos errados.
                O desafio era criar um app simples, funcional e rápido que registrasse os gastos e mostrasse de forma clara quem deve o quê para quem — mesmo offline.
              </p>
              <br />
              <p>
                A proposta era construir uma solução leve, com armazenamento local, que funcionasse sem depender de conexão com a internet, e que sincronizasse automaticamente com um servidor quando possível.
              </p>
            </div>

            <div className="texto" id="desenvolvimento">
              <p className="titulo">Processo de desenvolvimento</p>

              <ol className="lista">
                <li className="topico">Levantamento de requisitos</li>
                  <ul>
                    <li>Estudo de uso real em eventos entre amigos</li>
                    <li>Foco em usabilidade offline e simplicidade</li>
                  </ul>

                <li className="topico">Protótipo e Design</li>
                  <ul>
                    <li>Layout limpo e moderno com foco mobile-first</li>
                    <li>Interface amigável para usuários leigos</li>
                  </ul>

                <li className="topico">Desenvolvimento técnico</li>
                  <ul>
                    <li>React Native + TypeScript</li>
                    <li>Banco de dados local com SQLite</li>
                    <li>Sincronização automática com servidor remoto</li>
                    <li>Persistência de dados com lógica offline-first</li>
                  </ul>

                <li className="topico">Validação e testes</li>
                  <ul>
                    <li>Testes em Android real e emulador</li>
                    <li>Simulação de uso sem internet</li>
                    <li>Ajustes finos de performance e UX</li>
                  </ul>
              </ol>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};


const IntegracaoAbarysLyceum = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-details">
      <div className="details">
        
        <div className="linha">
          <div className="topo">
            <div className="topo-textos">
              <h1>Integração Ábaris ↔ Lyceum</h1>
              <hr />
              <p>
                Este projeto teve como objetivo criar uma ponte eficiente entre dois sistemas distintos — o Ábaris (origem dos documentos) e o Lyceum (destino de armazenamento e consulta) — automatizando completamente a importação de arquivos e reduzindo o trabalho manual das equipes operacionais.
              </p>
            </div>

            <div className="topo-imagem">
              <img src={TopoImagemIntegracao} alt="Diagrama da integração entre Ábaris e Lyceum" />
            </div>
          </div>
        </div>

        <div className="corpo">

          <div className="imagem">
            <img src={DiagramaFluxoIntegracao} alt="Fluxo técnico da integração entre APIs" />
          </div>

          <div className="area-texto">

            <div className="texto">
              <p className="titulo">O desafio</p>
              <p>
                A rotina de importar manualmente documentos anexados no sistema Ábaris para o Lyceum era repetitiva, sujeita a erros e demandava tempo. O desafio era criar uma integração automática entre os dois sistemas, respeitando as particularidades de suas APIs e garantindo precisão, segurança e desempenho.
              </p>
            </div>

            <div className="texto" id="desenvolvimento">
              <p className="titulo">Solução técnica</p>

              <p>
                Utilizando o Node.js como base da arquitetura, desenvolvi um sistema de integração robusto e flexível, capaz de lidar com diferentes fluxos de dados, exceções e variações nos tempos de resposta. Os principais pontos da solução foram:
              </p>

              <ul className="lista">
                <li>Criação de rotinas assíncronas com controle fino de execução</li>
                <li>Tratamento de erros e fallback automático para reenvio</li>
                <li>Logs estruturados para auditoria e análise de falhas</li>
                <li>Validação e normalização dos dados recebidos do Ábaris</li>
                <li>Envio automático e organizado dos documentos ao Lyceum via API</li>
              </ul>
            </div>

            <div className="texto" id="resultados">
              <p className="titulo">Resultados alcançados</p>
              <ul className="lista">
                <li>Conexão estável e confiável entre os sistemas Ábaris e Lyceum</li>
                <li>Redução significativa no tempo de importação dos documentos</li>
                <li>Melhoria direta na experiência dos usuários operacionais</li>
                <li>Ganhos expressivos de performance com a abordagem assíncrona</li>
              </ul>
            </div>

            <div className="texto" id="aprendizados">
              <p className="titulo">Lições aprendidas</p>
              <p>
                Este projeto foi um marco no meu domínio de integrações com Node.js. A prática intensiva com requisições síncronas e assíncronas ampliou minha visão sobre tratamento de exceções, escalabilidade e orquestração de APIs.
                Também aprendi que integrar sistemas é mais do que “ligar pontas” — é entender fluxos, dados e impactos reais no dia a dia das pessoas envolvidas.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};



const ControleFinanceiroProjetos = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-details">
      <div className="details">
        
        <div className="linha">
          <div className="topo">
            <div className="topo-textos">
              <h1>Sistema de Controle Financeiro por Projeto</h1>
              <hr />
              <p>
                Um sistema completo para gerenciar a emissão de notas fiscais e o acompanhamento dos pagamentos recebidos dentro de uma empresa. A proposta é dar mais autonomia aos gerentes de projeto e, ao mesmo tempo, oferecer à diretoria uma visão precisa e consolidada da saúde financeira de cada iniciativa.
              </p>
            </div>

            <div className="topo-imagem">
              <img src={ImagemTopoFinanceiro} alt="Painel do sistema de controle financeiro" />
            </div>
          </div>
        </div>

        <div className="corpo">

          <div className="imagem">
            <img src={ImagemSistemaFinanceiro} alt="Tela de controle de notas fiscais por projeto" />
          </div>

          <div className="area-texto">

            <div className="texto">
              <p className="titulo">O desafio</p>
              <p>
                Em muitas empresas, a gestão financeira dos projetos é feita de forma descentralizada e pouco integrada, dificultando o acompanhamento dos valores a receber, emissão de notas fiscais e análise do fluxo de caixa por projeto. O principal desafio era garantir visibilidade, controle e padronização em um processo que envolvia diferentes áreas da empresa.
              </p>
            </div>

            <div className="texto" id="desenvolvimento">
              <p className="titulo">Solução técnica</p>

              <p>
                Para resolver esse problema, foi desenvolvido um sistema web intuitivo que permite aos gerentes registrar as demandas de faturamento de forma prática, visualizar o status de cada nota e controlar os recebimentos. Os dados são consolidados em tempo real em um painel gerencial construído no Power BI.
              </p>

              <ul className="lista">
                <li>Interface desenvolvida com React.js (frontend leve e responsivo)</li>
                <li>Back-end robusto com Node.js e banco de dados PostgreSQL</li>
                <li>Painel de BI com Power BI conectado diretamente ao banco</li>
                <li>Controle por níveis de acesso: gerentes vs. diretoria</li>
                <li>Relatórios por projeto, cliente, valor e status de recebimento</li>
              </ul>
            </div>

            <div className="texto" id="resultados">
              <p className="titulo">Resultados alcançados</p>
              <ul className="lista">
                <li>Organização das demandas de faturamento por projeto</li>
                <li>Redução de falhas e retrabalho na emissão de notas</li>
                <li>Facilidade no acompanhamento de pagamentos pendentes</li>
                <li>Melhoria na comunicação entre gerentes e setor financeiro</li>
                <li>Visibilidade clara para a diretoria sobre a saúde financeira por projeto</li>
              </ul>
            </div>

            <div className="texto" id="aprendizados">
              <p className="titulo">Lições aprendidas</p>
              <p>
                Este projeto reforçou a importância de criar sistemas que conectam dados operacionais com visões estratégicas. A integração entre o sistema de gestão e o painel em Power BI trouxe ganhos reais de produtividade e tomada de decisão. Também foi uma excelente oportunidade para aprofundar práticas de modelagem de dados, usabilidade e integração entre tecnologias.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};


  
export { Mandatotec, AppDespesa, IntegracaoAbarysLyceum, ControleFinanceiroProjetos };
  
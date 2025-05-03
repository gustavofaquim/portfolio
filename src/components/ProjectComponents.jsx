import { useEffect } from "react";

import Mandatotectop from "../img/projetos/details/mandatotectopp.png"
import FormMantatotec from "../img/projetos/details/formmandatotec.png"

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
      <div className="topo-textos">
        <h1>App Despesa</h1>
        <hr />
        <p>Divisão de gastos entre amigos, fácil e rápida!</p>
      </div>
      <div className="topo-imagem">
        {/* Imagem aqui */}
      </div>
    </div>
  );
};
  
export { Mandatotec, AppDespesa };
  
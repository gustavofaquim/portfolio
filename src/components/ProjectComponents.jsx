const Mandatotec = () => {
    return (
      <div className="container-details">
        <div className="details">
            <div className="topo-textos">
                <h1>Mandatotec</h1>
                <hr />
                <p>O mandatotec é uma plataforma inovadora desenvolvida para modernizar e otimizar a gestão de mandatos políticos. Ele busca oferecer ferramentas que facilitem a comunicação e a eficiência no dia a dia dos gabinetes parlamentares. </p>
            </div>

                <div className="topo-imagem">
                {/* Imagem aqui, se desejar */}
            </div>
        </div>
      </div>
    );
  };
  
  const AppDespesa = () => {
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
  
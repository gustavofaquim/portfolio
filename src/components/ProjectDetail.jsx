import { useParams } from 'react-router-dom';
import { Mandatotec,ConectaAnapolis,  AppDespesa, IntegracaoAbarysLyceum, ControleFinanceiroProjetos } from './ProjectComponents';

import '../styles/components/projectComponents.sass'

const componentsMap = {
  conecta: ConectaAnapolis,
  mandatotec: Mandatotec,
  appdespesa: AppDespesa,
  prontuario: IntegracaoAbarysLyceum,
  gestorfinanceiro: ControleFinanceiroProjetos
};

const ProjectDetail = () => {
  const { id } = useParams();
  const ProjectComponent = componentsMap[id];

  if (!ProjectComponent) {
    return <div>Projeto não encontrado</div>;
  }

  return (
    <div className="project-detail">
      <ProjectComponent />
    </div>
  );
};

export default ProjectDetail;

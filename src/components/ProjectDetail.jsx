import { useParams } from 'react-router-dom';
import { Mandatotec, AquiTem, ConectaAnapolis,  AppDespesa, IntegracaoAbarysLyceum, ControleFinanceiroProjetos, Zap24h } from './ProjectComponents';

import '../styles/components/projectComponents.sass'

const componentsMap = {
  conecta: ConectaAnapolis,
  aquitem: AquiTem,
  zap24h: Zap24h,
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

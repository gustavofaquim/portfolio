import { useParams } from 'react-router-dom';
import { Mandatotec, AppDespesa } from './ProjectComponents';

import '../styles/components/projectComponents.sass'

const componentsMap = {
  mandatotec: Mandatotec,
  appdespesa: AppDespesa,
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

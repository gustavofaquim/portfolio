import '../styles/components/maincontent.sass'
import '../styles/components/findMe.sass';


import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer'
import FindMe from './FindMe';

const MainContent = () =>{
    return <main id='main-content'>
        <TechnologiesContainer />
        <ProjectsContainer />
        <FindMe />
    </main>;
};

export default MainContent;
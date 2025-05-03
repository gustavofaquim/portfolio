import '../styles/components/maincontent.sass'
import '../styles/components/findMe.sass';


import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer'
import WhatIdoContainer from './WhatIdoContainer';
import FindMe from './FindMe';
import JourneyContainer from './JourneyContainer';

const MainContent = () =>{
    return <main id='main-content'>
        <WhatIdoContainer/>
        <TechnologiesContainer />
        <ProjectsContainer />
        <JourneyContainer/>
        <FindMe />

    </main>;
};

export default MainContent;
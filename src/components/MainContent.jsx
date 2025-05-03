import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/components/maincontent.sass'
import '../styles/components/findMe.sass';


import ProjectsContainer from './ProjectsContainer';
import TechnologiesContainer from './TechnologiesContainer'
import WhatIdoContainer from './WhatIdoContainer';
import FindMe from './FindMe';
import JourneyContainer from './JourneyContainer';

const MainContent = () => {

    const location = useLocation();

    useEffect(() => {
        const scrollTo = location.state?.scrollTo;
        if (scrollTo) {
        const element = document.querySelector(scrollTo);
        if (element) {
            // Pequeno delay para garantir que o DOM esteja pronto
            setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        }
    }, [location]);


    return <main id='main-content'>
        <WhatIdoContainer/>
        <TechnologiesContainer />
        <ProjectsContainer />
        <JourneyContainer/>
        <FindMe />

    </main>;
};

export default MainContent;
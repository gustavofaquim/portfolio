import AboutContainer from './AboutContainer';
import FindMe from './FindMe';


import Devices from '../img/hero-devices.svg';


import '../styles/components/sidebar.sass';
import '../styles/components/aboutContainer.sass';
import '../styles/components/findMe.sass';




const Sidebar = () =>{
    return (
        <aside id='sidebar'>
            
            {/* C<img src={Devices} className='img-devices' alt="Devices" /> */}
            
            <AboutContainer />
            <FindMe />
            {/*  <a href="" className="btn">Download Curriculo</a>*/}
        </aside>
    );
};

export default Sidebar
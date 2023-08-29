import AboutContainer from './AboutContainer';
import FindMe from './FindMe';


import Devices from '../img/hero-devices.svg';


import '../styles/components/sidebar.sass';
import '../styles/components/aboutContainer.sass';





const Sidebar = () =>{
    return (
        <aside id='sidebar'>
            
            {/* C<img src={Devices} className='img-devices' alt="Devices" /> */}
            
            <AboutContainer />
            {/*  <a href="" className="btn">Download Curriculo</a>*/}
        </aside>
    );
};

export default Sidebar
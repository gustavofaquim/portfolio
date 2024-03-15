

import '../styles/components/socialnetworks.sass'
import '../styles/components/findMe.sass';


import {AiFillPhone, AiOutlineMail, AiFillEnvironment, AiFillMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";


const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/gustavofaquim/' },
    { name: "github", icon: <FaGithub />, link: 'https://github.com/gustavofaquim'},
    { name: "instagram", icon: <FaInstagram />, link: 'https://instagram.com/gustavofaquim' },
    { name: "whatsapp", icon: <FaWhatsapp />, link: 'https://wa.me/5562996828796'}
  ];


const FindMe = () => {

    return(
        <section className='find-me'>
            <div className='find-me-container'>
                
                <div className='contato'>

                    <div  className="title">
                        <h3>CONTATO</h3>
                    </div>
                    
                        
                    <div id='information'>
                        <div className='info-card'>
                            <p><AiFillPhone id='phone-icon' /> (62) 996828796</p>
                        </div>

                        <div className='info-card'>
                            <p> <AiFillMail /> gustavofaquim408@gmail.com</p>
                        </div>


                        <div className='info-card'>
                            <p><AiFillEnvironment id='pin-icon' /> Anápolis/GO</p>
                        </div>

                    </div>
                </div>


                <div className='social'>
                    
                    <div  className="title">
                        <h3>SOCIAL</h3>
                    </div>

                    <div id='social-networks'>

                        {socialNetworks.map((network) => (
                            <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
                        ))}

                    </div>

                </div>
                
                <hr />
            </div>

        </section>
    )
}


export default FindMe
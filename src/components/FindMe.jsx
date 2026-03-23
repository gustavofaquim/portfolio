

import '../styles/components/socialnetworks.sass'
import '../styles/components/findMe.sass';


import {AiFillPhone, AiOutlineMail, AiFillEnvironment, AiFillMail } from "react-icons/ai"
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';


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

                <div className="titulo">
                    <p>Interessado em trabalharmos juntos?</p>
                    <h3>Vamos conversar?</h3>
                </div>


                
                
               
                
                <div className='area-contato'>

                    
                
                    <div className='contato'>

                   <div className='area-btn-whatsapp'>
                    <a href="https://wa.me/5562996828796" target="_blank" rel="noopener noreferrer">
                        <div className='btn-whatsapp'>    
                            <FaWhatsapp className="icone_whatsapp" />
                            <p>WhatsApp</p>
                        </div>
                    </a>
                   </div>

                        <div id='information'>
                            <div className='info-card'>
                                <AiFillPhone id='phone-icon' />  <p>(62) 996828796</p>
                            </div>

                            <div className='info-card'>
                                <AiFillMail /> <p>gustavofaquim408@gmail.com</p>
                            </div>

                            <div className='info-card'>
                                <AiFillEnvironment id='pin-icon' /> <p>Anápolis/GO</p>
                            </div>


                            <div className='social'>
                                <div id='social-networks'>
                                    {socialNetworks.map((network) => (
                                        <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                
                <hr />
            </div>

        </section>
    )
}


export default FindMe

import '../styles/components/informationContainer.sass';
import '../styles/components/socialnetworks.sass'


import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"
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
                <h2>Me Encontre</h2>
                <p>Entre em contato, vamos bater um papo ;)</p>
                

                <div id='information'>
                    <div className='info-card'>
                        <AiFillPhone id='phone-icon' />
                        <h3>Telefone</h3>
                        <p>(62) 996828796</p>
                    </div>

                    <div className='info-card'>
                        <AiOutlineMail id='email-icon' />
                        <h3>E-mail</h3>
                        <p>gustavofaquim408@gmail.com</p>
                    </div>


                    <div className='info-card'>
                        <AiFillEnvironment id='pin-icon' />
                        <h3>Localização</h3>
                        <p>Ceres/GO</p>
                     
                    </div>

                </div>

                <div id='social-networks'>
                    {socialNetworks.map((network) => (
                        <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
                    ))}
                </div>
            </div>



        </section>
    )
}


export default FindMe
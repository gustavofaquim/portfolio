import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";



import '../styles/components/socialnetworks.sass'


const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/gustavofaquim/' },
    { name: "github", icon: <FaGithub />, link: 'https://github.com/gustavofaquim'},
    { name: "instagram", icon: <FaInstagram />, link: 'https://instagram.com/gustavofaquim' },
    { name: "whatsapp", icon: <FaWhatsapp />, link: 'https://wa.me/5562996828796'}
  ];
  

const SocialNetworks = () =>{

    return( 
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.link} target="_blank" className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
            ))}
        </section>
    );
};

export default SocialNetworks
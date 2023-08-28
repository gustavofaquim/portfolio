import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import '../styles/components/informationContainer.sass';


import React from 'react'


const InformationContainer = () => {
    return (
       <section id='information'>
        <div className='info-card'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(62) 996828796</p>
            </div>
        </div>

        <div className='info-card'>
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>gustavofaquim408@gmail.com</p>
            </div>
        </div>


        <div className='info-card'>
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>Localização</h3>
                <p>Ceres/GO</p>
            </div>
        </div>

       </section>
    );
};

export default InformationContainer
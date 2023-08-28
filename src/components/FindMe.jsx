import SocialNetworks from './SocialNetworks';
import InformationContainer from './informationContainer';

const FindMe = () => {

    return(
        <section className='find-me'>
            <h2>Me Encontre</h2>
            <p>Quer me dar uma oportunidade de demostrar o meu trabalho? Estes são os meus contatos.</p>
            <InformationContainer />
            <SocialNetworks />
        </section>
    )
}


export default FindMe
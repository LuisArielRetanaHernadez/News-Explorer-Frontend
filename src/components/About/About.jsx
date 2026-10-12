import './About.css'

import Avatar from '../../images/Avatar.jpg'


const About = () => {
    return (
        <section className='about'>
            <div className='about__container about__container--wrapper'>

                <figure className='about__content-image'>
                    <img className='about__img-avatar' src={Avatar} />
                </figure>

                <div className='about__content'>
                    <h2 className='about__title'>Acerca del autor</h2>
                    <p className='about__text'>
                        Este bloque describe al autor del proyecto.
                        Aquí debe indicar tu nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
                    </p>
                    <p className='about__text'>
                        También puedes hablar de tu experiencia con Practicum, de lo que aprendiste allí y de cómo puedes ayudar a los clientes potenciales
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About

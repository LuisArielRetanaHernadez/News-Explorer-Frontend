import './NotFound.css'

import NotFoundArticle from '../../images/not-found_v1.svg'

const NotFound = () => {

    return (
        <section className='not-found'>
            <figure className='not-found__figure'>
                <img className='not-found__figure-image' src={NotFoundArticle} alt="Page not found" />
            </figure>
            <h2 className='not-found__title'>No se encontraron nada</h2>
            <p className='not-found__text'>Lo sentimos, pero no hay nada que coincida con tus términos de búsqueda.</p>
        </section>
    )
}
export default NotFound
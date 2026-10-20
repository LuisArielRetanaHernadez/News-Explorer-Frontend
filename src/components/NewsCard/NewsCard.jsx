import './NewsCard.css'

import BookMark from "../../images/bookmark.svg"
import Image from "../../images/image_08.png"

const NewsCard = () => {

    return (
        <article className='news-card news-card--raunded'>

            <button className='news-card__button-save news-card__button-save--disable'> 
                <img className='news-card__save-icon' src={BookMark} />
            </button>

            <figure className='news-card__content-image'>
                <img src={Image} className='news-card__image' />
            </figure>

            <figcaption className='news-card__content'>
                <time className='news-card__time'> 4 de noviembre de 2020</time>
                <h3 className='news-card__title'>Todo el mundo necesita un lugar de reflexión en la naturaleza.</h3>
                <p className='news-card__text'>
                    Desde que leí el influyente libro de Richard Louv, "El último niño en el bosque",
                    la idea de tener un "lugar de reflexión" especial para mi se me ha 
                      quedado grabada. Este consejo, que.
                </p>
                <span className='news-card__source'> treehugger </span>
            </figcaption>
        </article>
    )
}

export default NewsCard

import './NewsCard.css'

import BookMark from "../../images/bookmark.svg"
import Image from "../../images/image_08.png"

const NewsCard = (props) => {

    return (
        <article className='news-card news-card--raunded'>

            <button className='news-card__button-save news-card__button-save--disable'> 
                <img className='news-card__save-icon' src={BookMark} />
            </button>

            <figure className='news-card__content-image'>
                <img src={props.image} className='news-card__image' />
            </figure>

            <figcaption className='news-card__content'>
                <time className='news-card__time'> {props.date}</time>
                <h3 className='news-card__title'> {props.title} </h3>
                <p className='news-card__text'>
                    {props.texts}
                </p>
                <span className='news-card__source'> {props.source} </span>
            </figcaption>
        </article>
    )
}

export default NewsCard

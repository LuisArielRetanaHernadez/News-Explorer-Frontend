import './NewsCardList.css'

import { Link } from 'react-router'

import NewsCard from '../NewsCard/NewsCard'


const NewCardList = () => {
    return (
        <section className='cards cards--wrapper'>

            <h2 className='cards__title'>Resultados de la búsqueda</h2>

            <ul className='cards__list'>
                {/* News Card */}
                <li className='cards__item'>
                    <Link className='cards__link'>
                        <NewsCard />
                    </Link>
                </li>
                <li className='cards__item'>
                    <Link className='cards__link'>
                        <NewsCard />
                    </Link>
                </li>
                
                <li className='cards__item'>
                    <Link className='cards__link'>
                        <NewsCard />
                    </Link>
                </li>
            </ul>
           

            <button className='cards__button-more'>Ver mas</button>
        </section>
    )
}

export default NewCardList

import './NewsCardList.css'

import { useState } from 'react'

import { Link } from 'react-router'


import NewsCard from '../NewsCard/NewsCard'
import Preloader from '../Preloader/Preloader'
import NotFound from '../NotFound/NotFound'

// -----------------------------------------------
// PENDIENTE: hacer estos dos componentes uno solo
import ErrorFound from '../ErrorFound/ErrorFound'
import InvalidText from '../InvalidText/InvalidText'
// -------------------------------------------

import { formatDateToSpanish } from '../../utils/formatDate'

import { create } from 'zustand';


export const useCardsNews = create(set => ({
  cards: [],
  status: {
    isError: false,
    status: '', 
    message: ''
  },
  isPreloader: false,
  getCardsNews: (cardsFind) => set({cards: cardsFind}),
  resetEmaptyCardsNews: () => set({cards: []}),
  setStatus: (status) => set({status}),
  setIsPreloader: (isPreloader) => set({isPreloader}),
}))


const NewCardList = () => {
    const cards = useCardsNews(state => state.cards)
    const status = useCardsNews(state => state.status)
    const isVisiblePreloader = useCardsNews(state => state.isPreloader)

    const numberCardsToRender = 3

    const [pagination, setPagination] = useState({
        countCards: null,
        indexToCard: numberCardsToRender,
        activeButtonMore: false,
    })

    const hasResults = status === 'ok' && cards.length > 0 && cards[0] !== null
    const isCurrentResultSet = pagination.countCards === cards.length
    const indexToCard = isCurrentResultSet
        ? pagination.indexToCard
        : numberCardsToRender
    const activeButtonMore = hasResults && (
        isCurrentResultSet ? pagination.activeButtonMore : true
    )
    const isVisibleSection = isVisiblePreloader || Boolean(status.status)

    const moreCardsToRender = () => {
        if (!hasResults) return

        setPagination(currentPagination => {
            const currentIndexToCard = currentPagination.countCards === cards.length
                ? currentPagination.indexToCard
                : numberCardsToRender

            if (currentIndexToCard >= cards.length) {
                return {
                    countCards: cards.length,
                    indexToCard: currentIndexToCard,
                    activeButtonMore: false,
                }
            }

            return {
                countCards: cards.length,
                indexToCard: currentIndexToCard + numberCardsToRender,
                activeButtonMore: true,
            }
        })
    }


    return (
        <section className={`${ isVisibleSection && 'cards cards--wrapper'}`}>

            {isVisiblePreloader && <Preloader />}

            {status.status === 'clave invalid' && <InvalidText />}

            {(status.status === 'empty' && cards[0] === null) && <NotFound />}

            {(status.status === 'error') && <ErrorFound />}

            {(cards.length > 0 && status === 'ok' && cards[0] !== null) && <h2 className='cards__title'>Resultados de la búsqueda</h2>}

            <ul className='cards__list'>
                {
                    hasResults &&
                    cards.map((card, index) => (
                        <li key={index} className='cards__item'>
                            <Link className='cards__link' to=''>
                                <NewsCard 
                                    key={index} 
                                    image={card.urlToImage} 
                                    date={formatDateToSpanish(card.publishedAt)}
                                    title={card.title}
                                    texts={card.description}
                                    source={card.source.name} 
                                />
                            </Link>
                        </li>
                    )).slice(0, indexToCard)
                }

            </ul>
           

            {activeButtonMore && <button className='cards__button-more' onClick={() => moreCardsToRender()}>Ver mas</button>} 
        </section>
    )
}

export default NewCardList

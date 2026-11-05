import './NewsCardList.css'

import { useEffect, useState } from 'react'

import { Link } from 'react-router'

import NewsCard from '../NewsCard/NewsCard'
import Preloader from '../Preloader/Preloader'
import NotFound from '../NotFound/NotFound'

import { create } from 'zustand';


export const useCardsNews = create(set => ({
  cards: [],
  status: '',
  isPreloader: false,
  getCardsNews: (cardsFind) => set(state => ({cards: cardsFind})),
  resetEmaptyCardsNews: () => set(state =>({cards: []})),
  setStatus: (status) => set(state => ({status: status})),
  setIsPreloader: (isPreloader) => set(state => ({isPreloader: isPreloader})),
}))


const NewCardList = () => {
    const cards = useCardsNews(state => state.cards)
    const status = useCardsNews(state => state.status)
    const isVisiblePreloader = useCardsNews(state => state.isPreloader)

    const numberCardsToRender = 3

    const [indexFromCard, setIndexFromCard] = useState(0)
    const [indexToCard, setIndexToCard] = useState(numberCardsToRender)
    const [activeButtonMore, setActiveButtonMore] = useState(false)
    const [isVisisbleSection, setIsVisibleSection] = useState(false)

    const moreCardsToRender = () => {
        if (cards.length <= 0 || cards[0] === null) return
        
        if (indexToCard >= cards.length) {
            setActiveButtonMore(false)
            return
        }

        setIndexToCard(state => state + numberCardsToRender)
    }

    useEffect(() => {
        if (cards.length <= 0) {
            setIsVisibleSection(false)
            setActiveButtonMore(false)
            return
        }

        if (status === 'ok' && cards.length[0] === null) { 
            setIsVisibleSection(true)
            return
        }

        if (status !== 'ok') {
            setIsVisibleSection(false)
            setActiveButtonMore(false)
            return
        }

        if (status === 'ok' && cards.length > 0 && cards[0] !== null) {
            setIsVisibleSection(true)
            setIndexFromCard(0)
            setIndexToCard(numberCardsToRender)
            setActiveButtonMore(true)
        }
        
    }, [cards, status])

    useEffect(() => {
        if (isVisiblePreloader) {
            setIsVisibleSection(true)
        }
    }, [isVisiblePreloader])


    return (
        <section className={`${ isVisisbleSection && 'cards cards--wrapper'}`}>

            {isVisiblePreloader && <Preloader />}

            {(status === 'ok' && cards[0] === null) && <NotFound />}

            {(cards.length > 0 && status === 'ok' && cards[0] !== null) && <h2 className='cards__title'>Resultados de la búsqueda</h2>}

            <ul className='cards__list'>
                {
                    (status === 'ok' && cards.length > 0 && cards[0] !== null) &&
                    cards.map((card, index) => (
                        <li key={index} className='cards__item'>
                            <Link className='cards__link'>
                                <NewsCard 
                                    key={index} 
                                    image={card.urlToImage} 
                                    date={card.publishedAt}
                                    title={card.title}
                                    texts={card.description}
                                    source={card.source.name} 
                                />
                            </Link>
                        </li>
                    )).slice(indexFromCard, indexToCard)
                }

            </ul>
           

            {activeButtonMore && <button className='cards__button-more' onClick={() => moreCardsToRender()}>Ver mas</button>} 
        </section>
    )
}

export default NewCardList

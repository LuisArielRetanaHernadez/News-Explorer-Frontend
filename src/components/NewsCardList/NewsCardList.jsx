import './NewsCardList.css'

import { useEffect, useState } from 'react'

import { Link } from 'react-router'

import { api } from '../../utils/ThirdPartyApi'

import NewsCard from '../NewsCard/NewsCard'

import { create } from 'zustand';


export const useCardsNews = create(set => ({
  cards: [],
  status: '',
  getCardsNews: (cardsFind) => set(state => ({cards: cardsFind})),
  resetEmaptyCardsNews: () => set(state =>({cards: []})),
  setStatus: (status) => set(state => ({status: status}))
}))


const NewCardList = () => {
    const cards = useCardsNews(state => state.cards)
    const status = useCardsNews(state => state.status)

    const [cardsRender, setCardsRender] = useState([])
    const [indexFromCard, setIndexFromCard] = useState(0)
    const [indexToCard, setIndexToCard] = useState(3)

    const getCardsNews = useCardsNews(state => state.getCardsNews)
    const resetCardsNewsEmpary = useCardsNews(state => state.resetCardsNewsEmpary)
    const setStatus = useCardsNews(state => state.setStatus)

    const numberCardsToRender = 3

    const addCardsToListCardsRender = (isInitial = false) => {
        if (cards.length < 0 || cards[0] === null || status !== 'ok') return
        if (cardsRender.length === cards.length) return

        if (isInitial) {
            setCardsRender(state => [...cards.slice(indexFromCard, indexToCard) ])
            return
        }

        setIndexFromCard(state => state + numberCardsToRender)
        setIndexToCard(state => state + numberCardsToRender)

        setCardsRender(state => [...state, ...cards.slice(indexFromCard, indexToCard) ])
    }

    useEffect(() => {
        if (cards.length < 0) return

        if (cardsRender.length <= 0) addCardsToListCardsRender(true)

        if (cardsRender.length > 0) {
            setIndexFromCard(0)
            setIndexToCard(numberCardsToRender)
            addCardsToListCardsRender(true)
        }
        
    }, [cards, status])
    return (
        <section className='cards cards--wrapper'>

            <h2 className='cards__title'>Resultados de la búsqueda</h2>

            <ul className='cards__list'>
                {
                    (status === 'ok' && cards.length > 0) &&
                    cardsRender.map((card, index) => (
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
                    ))
                }

            </ul>
           

            <button className='cards__button-more' onClick={() => addCardsToListCardsRender()}>Ver mas</button>
        </section>
    )
}

export default NewCardList

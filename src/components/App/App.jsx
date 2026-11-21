import './App.css'

import Home from '../Home/Home.jsx'

import LayoutBase from '../layouts/LayoutBase/LayoutBase.jsx'

import { Routes, Route } from 'react-router'

import { useCardsNews } from '../NewsCardList/NewsCardList.jsx';
import { api } from '../../utils/ThirdPartyApi';

function App() {

  const getCardsNews = useCardsNews(state => state.getCardsNews)
  const setStatus = useCardsNews(state => state.setStatus)
  const resetEmaptyCardsNews = useCardsNews(state => state.resetEmaptyCardsNews)
  const setIsPreloader = useCardsNews(state => state.setIsPreloader)

  const handleSearchCardsNews = async(text) => {
    const fromSevenDays = new Date()
    fromSevenDays.setDate(fromSevenDays.getDate() - 7)

    setIsPreloader(true)
  
    try {
      const response = await api.getSearchCardsNews({
        q: text,
        from: fromSevenDays.toLocaleDateString('en-CA'),
        to: new Date().toLocaleDateString('en-CA'),
        sortBy: 'popularity',
        pageSize: 100
      })

      if (response.status === 'ok' && response.articles.length > 0) {
        getCardsNews(response.articles)
        setStatus('ok')
      }

      if (response.status !== 'ok') {
        setStatus(response.status)
        resetEmaptyCardsNews()
      }

      if (response.status === 'ok' && response.articles.length <= 0) {
        setStatus('ok')
        getCardsNews([null])
      }
      } catch (error) {
        setStatus(error.message)
        resetEmaptyCardsNews()
      } finally {
        setIsPreloader(false)
      }
  }

  return (
    <>
      <Routes>
        <Route element={<LayoutBase handleSearch={handleSearchCardsNews}/>}>
          <Route index element={<Home />} />
          <Route path="save-news" element={<h1>Save News</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

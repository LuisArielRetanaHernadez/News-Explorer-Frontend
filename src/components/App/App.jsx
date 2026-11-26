import './App.css'

import Home from '../Home/Home.jsx'

import LayoutBase from '../layouts/LayoutBase/LayoutBase.jsx'

import { Routes, Route } from 'react-router'

import { useCardsNews } from '../../CustomHooks/store/useCardsNews/useCardsNews';
import { api } from '../../utils/ThirdPartyApi';



const validatorTextSearch = (text) => {

  if (!text) return false

  const isOnlyEscapeText = text

  if (!isOnlyEscapeText.trim()) return false

  return true

}

// Quitar los espacio al inicio del texto y los multiples espacios consecutivos
const clearTextSearch = (text) => text.trimStart().replace(/\s+/g, " ")


function App() {

  const getCardsNews = useCardsNews(state => state.getCardsNews)
  const setStatus = useCardsNews(state => state.setStatus)
  const resetEmaptyCardsNews = useCardsNews(state => state.resetEmaptyCardsNews)
  const setIsPreloader = useCardsNews(state => state.setIsPreloader)



  const handleSearchCardsNews = async(text) => {

    const textClear = clearTextSearch(text)

    const isValidText = validatorTextSearch(text)

    if (!isValidText) {
      setStatus({
        isError: true,
        status: 'clave invalid',
        message: 'Error: Introduce un caracter valido'
      })
      return
    }

    const fromSevenDays = new Date()
    fromSevenDays.setDate(fromSevenDays.getDate() - 7)

    setIsPreloader(true)
  
    try {
      const response = await api.getSearchCardsNews({
        q: textClear,
        from: fromSevenDays.toLocaleDateString('en-CA'),
        to: new Date().toLocaleDateString('en-CA'),
        sortBy: 'popularity',
        pageSize: 100
      })

      if (response.status === 'ok' && response.articles.length > 0) {
        getCardsNews(response.articles)
        setStatus({
          isError: false,
          status: 'ok',
          message: 'Cards encontradas'
        })
      }

      if (response.status !== 'ok') {
        setStatus(response.status)
        resetEmaptyCardsNews()
      }

      if (response.status === 'ok' && response.articles.length <= 0) {
        setStatus({
          isError: false,
          status: 'empty',
          message: 'No se encontro Cards'
        })
        resetEmaptyCardsNews()
      }
      } catch {
        setStatus({
          isError: true,
          status: 'error', 
          message: 'Error: error en la conexión al internt o error en el servidor'
        })
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

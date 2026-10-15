import './Home.css'

import About from '../About/About'
import NewCardList from '../NewsCardList/NewsCardList'
import PopupWithForm from '../PopupWithForm/PopupWithForm'

const Home = () => {
  return (
    <section className="home">
      <NewCardList />
      <About />
      <PopupWithForm />
    </section>
  )
}

export default Home

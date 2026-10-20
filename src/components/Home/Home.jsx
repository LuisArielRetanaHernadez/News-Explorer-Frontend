import './Home.css'

import About from '../About/About'
import NewCardList from '../NewsCardList/NewsCardList'
import PopupLoginForm from '../PopupLoginForm/PopupLoginForm'

const Home = () => {
  return (
    <section className="home">
      <NewCardList />
      <About />
      <PopupLoginForm />
    </section>
  )
}

export default Home

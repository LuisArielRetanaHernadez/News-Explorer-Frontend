import './Home.css'

import About from '../About/About'
import NewCardList from '../NewsCardList/NewsCardList'

const Home = () => {
  return (
    <section className="home">
      <NewCardList />
      <About />
    </section>
  )
}

export default Home

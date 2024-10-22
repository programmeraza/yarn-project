import './App.scss'
import About from './components/About/About'
import Empower from './components/Emprower/Empower'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Prices from './components/Prices/Prices'
import Contacts from './components/Contacts/Contact'
import Innovate from './components/Innovate/Innovate'
import Footer from './components/Footer/Footer'
import Swiper from './components/Swipper/Swipper'
import Advanteges from './components/Advanteges/Advanteges'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Gallery/>
      <Swiper/>
      <Empower/>
      <Advanteges/>
      <Prices/>
      <Innovate/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App

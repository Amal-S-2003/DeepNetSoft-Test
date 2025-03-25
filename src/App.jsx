
import './App.css'
import Banner from './components/Banner'
import Buttons from './components/Buttons'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import MiddleBanner from './components/MiddleBanner'

function App() {

  return (
    <>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Header/>
  <Banner/>
  <Buttons/>
  <MiddleBanner/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default App

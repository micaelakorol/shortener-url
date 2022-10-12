import Cards from './components/Cards/Cards'
import  InputFunctions  from './components/Input/InputFunctions'
import About from './pures/About'
import Header from './pures/Header/Header'
import HeaderMobile from './pures/Header/HeaderMobile'

const App = () => {

  return (
    <div><Header/>
    <HeaderMobile/>
    <About/>
    <InputFunctions />
    <Cards/>
    </div>
  )
}

export default App
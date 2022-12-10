// 1ro: Nativas
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// 2do: Componentes nuestros
import NavBar from './components/NavBar/NavBar'
import Carousel from './components/Carousel/Carousel'
import Welcome from './components/Welcome/Welcome'
import AboutMe from './components/AboutMe/AboutMe'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
// 3ro: Css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'



// Los componentes Contenedor son los que manejan lógica de estado
function App() { // App es un componente Contenedor

  // valor definidos en App son estados

  return (
    <BrowserRouter className="App">

      <header>
        <NavBar />
      </header>

      <Routes >
      <Route path='/' element={ <Carousel /> } />
        <Route path='/productos' element={ <ItemListContainer /> } />
        <Route path='/detail' element={ <ItemDetailContainer /> } />
        {/* <Route path='/cart' element={ <CartContainer /> } /> */}
        {/* <Route path='/welcome' element={  } /> */}
        <Route path='/aboutMe' element={ <AboutMe /> } />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      <Welcome />

    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'


import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

// Los componentes Contenedor son los que manejan lógica de estado
function App() { // App es un componente Contenedor

  // valor definidos en App son estados
  let greeting = 'Greetings!!!'
  // let saludar = () => alert('Soy func de App')

  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer greeting={greeting} />
      </header>
      {/* <HomeContainer
        propGreetings={greeting}
        greeting={saludar}
      >
      <Item />
      </HomeContainer> */}
    </div>
  )
}

export default App

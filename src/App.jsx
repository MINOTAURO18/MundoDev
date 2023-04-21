import './App.css'
import Articulos from './components/Articulos/Articulos'
import Inicio from './components/Inicio/Inicio'
import Info from './components/Info/Info'
import Contacto from './components/Contacto/Contacto'
import { Routes , Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Formulario from './components/Formulario/Formulario'

function App() {

  return (
    <main>
      <Nav/>
      <Routes>
        <Route path="/MundoDev/" element={<Inicio />} />
        <Route path="/MundoDev/articulos" element={<Articulos />} />
        <Route path="/MundoDev/info" element={<Info />} />
        <Route path="/MundoDev/contacto" element={<Contacto />} />
        <Route path="/MundoDev/formulario" element={<Formulario />} />
      </Routes>

    </main>
  )
}

export default App

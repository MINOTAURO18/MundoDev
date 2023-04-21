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
        <Route path="/" element={<Inicio />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>

    </main>
  )
}

export default App

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favourite from './pages/Favourites'

function App() {
 return(
  <main className="main-content">
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/favourites" element = {<Favourite />} />
    </Routes>
  </main>
 )
}
export default App


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </div>
  )
}

export default App

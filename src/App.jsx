
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path="/project" element={<h1>This is project page</h1>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App

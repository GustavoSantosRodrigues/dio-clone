import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

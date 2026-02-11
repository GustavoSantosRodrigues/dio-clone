import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import FeedPage from './pages/Feed/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Área pública */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Área logada */}
        <Route element={<AppLayout />}>
          <Route path="/feed" element={<FeedPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

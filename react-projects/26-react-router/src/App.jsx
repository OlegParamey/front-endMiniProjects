import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

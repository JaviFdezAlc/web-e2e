import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Home } from '@pages/Home'
import { About } from '@pages/About'
import { NotFound } from '@pages/NotFound'
import { Layout } from '@components/Layout'
import { Prices } from '@pages/Prices'
import { Services } from '@pages/Services'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/services' element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}


export default App

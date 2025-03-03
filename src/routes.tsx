import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Result from './pages/Result'
import Page404 from './pages/404'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/result" element={<Result />} />
    <Route path="*" element={<Page404 />} />
  </Routes>
)

export default Rotas

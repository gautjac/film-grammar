import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ConceptPage } from './pages/ConceptPage'
import { ReviewPage } from './pages/ReviewPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/c/:id" element={<ConceptPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Route>
    </Routes>
  )
}

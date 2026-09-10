import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import ResultsPage from './pages/Results/ResultsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resultados" element={<ResultsPage />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
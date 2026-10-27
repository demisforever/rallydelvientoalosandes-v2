import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import StagesPage from './pages/Stages/StagesPage'
import ResultsPage from './pages/Results/ResultsPage'
import RegulationPage from './pages/Documents/RegulationPage'
import MedicalCertificatePage from './pages/Documents/MedicalCertificatePage'
import MinorAuthorizationPage from './pages/Documents/MinorAuthorizationPage'
import LiabilityWaiverPage from './pages/Documents/LiabilityWaiverPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stages" element={<StagesPage />} />
        <Route path="/resultados" element={<ResultsPage />} />
        <Route
          path="/documentos/reglamento"
          element={<RegulationPage />}
        />
        <Route
          path="/documentos/certificado-medico"
          element={<MedicalCertificatePage />}
        />
        <Route
          path="/documentos/autorizacion-menores"
          element={<MinorAuthorizationPage />}
        />
        <Route
          path="/documentos/deslinde"
          element={<LiabilityWaiverPage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

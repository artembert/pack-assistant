import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TripListPage } from 'pages/TripListPage'
import { PackingListPage } from 'pages/PackingListPage'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TripListPage />} />
        <Route path="/trip/:id" element={<PackingListPage />} />
      </Routes>
    </Router>
  )
}

export default App

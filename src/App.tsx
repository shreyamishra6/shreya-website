import { Navigate, Route, Routes } from 'react-router-dom'
import Work from './components/Work'
import Interface from './components/Interface'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Work />} />
      <Route path="/work" element={<Work />} />
      <Route path="/personal" element={<Interface onEnter={() => {}} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
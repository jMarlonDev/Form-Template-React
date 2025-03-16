import './App.css'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import SuccesPage from './components/SuccesPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/success' element={<SuccesPage />} />
    </Routes>
  )
}

export default App

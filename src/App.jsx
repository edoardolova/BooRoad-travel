import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import TripDetails from './pages/TripDetails'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout/>}>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/api/trip-detail' element={<TripDetails/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

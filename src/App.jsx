import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import TripDetails from './pages/TripDetails';
import { TripProvider } from './contexts/TripContext.jsx';

function App() {
  return (
    <TripProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/trip/:tripId' element={<TripDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TripProvider>
  );
}

export default App;

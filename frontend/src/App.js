
import './App.css';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CarPage from './pages/CarPage';
import UploadPage from './pages/UploadPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/cars/:carId' element={<CarPage />}></Route>
        <Route path='/list-car' element={<UploadPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

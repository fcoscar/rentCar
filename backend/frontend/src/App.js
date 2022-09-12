
import './App.css';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CarPage from './pages/CarPage';
import UploadPage from './pages/UploadPage';
import UploadImagesPage from './pages/UploadImagesPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
        <Route path='/signin' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/car/:carId' element={<CarPage />}></Route>
        <Route path='/list-car' element={<UploadPage />}></Route>
        <Route path='/upload-images' element={<UploadImagesPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

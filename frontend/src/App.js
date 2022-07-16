
import './App.css';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

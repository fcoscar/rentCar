
import './App.css';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} exact/>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Forum } from './pages/Forum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Forum />} />
      </Routes>
    </Router>
  );
}

export default App;

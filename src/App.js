import './App.css';
import Inicio from './pages/InicioPage';
import MoviePage from './pages/MoviePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/moviePage' element={<MoviePage />} />
        <Route path='*' element={<h1>Not Found!</h1>} />
      </Routes>
    </Router>

  );
}

export default App;
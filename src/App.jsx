import './Home.css';
import Home from './Home';
import GameRule from './GameRule';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './Game';
import NoPage from './NoPage';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-rule" element={<GameRule />} />
          <Route path="/game/:difficulty" element={<Game />} />
          {/* handling invalid url case below */}
          <Route path="*" element={<NoPage />} /> 
        </Routes>
      </>
    </Router>
  );
}

export default App;

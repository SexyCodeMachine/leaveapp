import './App.css';
import TimeRemain from './TimeRemian';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Leave from './takeleavegenerator';
import Draw from './LunchLuckyDraw';
/*
        <ul>
          <li className="nav"><Link to="/">Time Remain  </Link></li>
          <li className="nav"><Link to="takeleave">takeLeave</Link></li>
          <li className="nav"><Link to="/LunchLuckyDraw">LunchLuckyDraw</Link></li>
        </ul>
 */

function App() {
  
  return (
    <Router>
      <nav>
        <span className="nav"><Link to="/">Time Remain  </Link></span>
        <span className="nav"><Link to="takeleave">takeLeave</Link></span>
        <span className="nav"><Link to="/LunchLuckyDraw">LunchLuckyDraw</Link></span>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<TimeRemain/>}></Route>
        <Route path="/takeleave" element={<Leave/>}></Route>
        <Route path="/LunchLuckyDraw" element={<Draw/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;

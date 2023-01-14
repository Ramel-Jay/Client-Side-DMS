import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import DonateNow from "./pages/donateNow";
import About from "./pages/About";
import Logo from "./Image/Logo.png";
import InKind from "./pages/inKind";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navBar">
            <div>
              <img  className="logo" src={Logo} alt="Logo" />
              <Link to="/donateNow" className='btnNavBarActive'>Donate Now</Link>
              <Link to="/" className="btnNavBar">Home</Link>
              <Link to="/about" className="btnNavBar">About</Link>
              <Link to="/inKind" className='btnNavBar'>In Kind</Link>
            </div>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/donateNow" exact element={<DonateNow />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/inKind" exact element={<InKind />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

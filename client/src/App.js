import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import DonateNow from "./pages/Cash/donateNow";
import About from "./pages/About/About";
import InKind from "./pages/In-Kind/inKind";

function App() {
  return (
    <div className="App">
      <Router>
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

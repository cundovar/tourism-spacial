// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Destination from "./page/Destination";
import Crew from "./page/crew";
import Technology from "./page/technology";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/equipe" element={<Crew/>} />
          <Route path="/technologie" element={<Technology/>} />
        </Routes>
         
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";



function App() {


  return (
    <div>
      
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Dashboard" element={<DashBoard />} />
      </Routes>
      
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

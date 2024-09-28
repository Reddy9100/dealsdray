import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

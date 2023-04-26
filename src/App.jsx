import { Routes, Route } from "react-router-dom";
import Endscreen from "./screens/Endscreen";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/Dashboard";
import Question from "./screens/Question";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="w-full h-[100vh]">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="question" element={<Question />} />
          <Route path="end" element={<Endscreen />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="home" element={<Homepage />} />
          <Route path="end" element={<Endscreen />} />
         
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;

import Login from "./pages/Login/Login";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import UserDashboard from "./pages/User/UserDashboard";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

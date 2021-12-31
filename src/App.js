import Login from "./pages/Login/Login";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import User from "./pages/User";
import Doctor from "./pages/Doctor";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </div>
  );
}

export default App;

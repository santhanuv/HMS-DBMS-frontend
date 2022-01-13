import Login from "./pages/Login/Login";
import GlobalStyles from "./components/styles/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import User from "./pages/User";
import Doctor from "./pages/Doctor";
import Admin from "./pages/Admin";
import DatePicker from "./components/DatePicker";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/date"
          element={
            <div className="w-[500px] h-[500px] bg-white shadow-2xl rounded-[20px] m-20 p-[20px]">
              <DatePicker />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

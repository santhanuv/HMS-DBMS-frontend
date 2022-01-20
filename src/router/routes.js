import { Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { Admin, AdminAddDoc, AdminDashboard } from "../pages/Admin";
import {
  Doctor,
  DoctorAppointments,
  DoctorDashboard,
  DoctorPrescribe,
} from "../pages/Doctor";
import {
  User,
  UserDashboard,
  UserAppointment,
  UserPayments,
} from "../pages/User";

const routes = [
  {
    path: "/",
    element: <Navigate replace to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "addDoc",
        element: <AdminAddDoc />,
      },
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "appointments",
        element: <UserAppointment />,
      },
      {
        path: "payments",
        element: <UserPayments />,
      },
    ],
  },
  {
    path: "/doctor",
    element: <Doctor />,
    children: [
      {
        index: true,
        element: <DoctorDashboard />,
      },
      {
        path: "appointments",
        element: <DoctorAppointments />,
      },
      {
        path: "prescribe",
        element: <DoctorPrescribe />,
      },
    ],
  },
];

export default routes;
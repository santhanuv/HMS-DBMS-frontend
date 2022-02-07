import { Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RequireAuth from "../components/RequireAuth";
import PersistLogin from "../components/PersistLogin";
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

const Roles = {
  admin: "Admin",
  patient: "Patient",
  doctor: "Doctor",
};

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
    element: <PersistLogin />,
    children: [
      {
        element: <RequireAuth allowedRoles={[Roles.admin]} />,
        children: [
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
        ],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.patient]} />,
        children: [
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
        ],
      },
      {
        element: <RequireAuth allowedRoles={[Roles.doctor]} />,
        children: [
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
                element: <DoctorPrescribe />, // Have to make the prescribe appear at /doctor/appointments/:id/prescribe
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;

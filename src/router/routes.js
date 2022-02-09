import { Navigate, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RequireAuth from "../components/RequireAuth";
import PersistLogin from "../components/PersistLogin";
import { AdminAddDoc, AdminDashboard } from "../pages/Admin";
import {
  DoctorAppointments,
  DoctorDashboard,
  DoctorPrescribe,
} from "../pages/Doctor";
import {
  PatientDashboard,
  PatientAppointments,
  PatientPayments,
} from "../pages/Patient";

import User from "../pages/User";
import Roles from "./allowedRoles";
import StaffVerification from "../pages/Staff/StaffVerification";
import StaffRegistration from "../pages/Staff/StaffRegisteration";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/confirmation/staff/:token"
        element={<StaffVerification />}
      />
      <Route path="/staffRegistration" element={<StaffRegistration />} />

      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[Roles.user.name]} />}>
          {/* User Routes */}
          <Route path="/user" element={<User />}>
            {/* Patient Routes */}
            <Route
              element={<RequireAuth allowedRoles={[Roles.patient.name]} />}
            >
              <Route path="patient" element={<PatientDashboard />} />
              <Route
                path="patient/appointments"
                element={<PatientAppointments />}
              />
              <Route path="patient/payments" element={<PatientPayments />} />
            </Route>

            {/* Doctor Routes */}
            <Route element={<RequireAuth allowedRoles={[Roles.doctor.name]} />}>
              <Route path="doctor" element={<DoctorDashboard />} />
              <Route
                path="doctor/appointments"
                element={<DoctorAppointments />}
              />
              <Route path="doctor/prescribe" element={<DoctorPrescribe />} />
            </Route>

            {/*Admin Routes*/}
            <Route element={<RequireAuth allowedRoles={[Roles.admin.name]} />}>
              <Route path="admin" element={<AdminDashboard />} />
              <Route path="admin/addDoc" element={<AdminAddDoc />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export { CustomRoutes };

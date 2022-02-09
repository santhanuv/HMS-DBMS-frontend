import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaCreditCard, FaRegCalendarPlus } from "react-icons/fa";
import Notification from "../../components/Notification";
import Avatar from "../../components/Avatar";
import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";
import { ItemButton } from "../../components/Menu/Styles";
import { AiOutlineUser } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Roles from "../../router/allowedRoles";
import { deleteSession } from "../../api/session.api";

const PatientSideBarItems = [
  {
    text: "Dashboard",
    path: `${Roles.patient.path}`,
    icon: <BsFillGridFill />,
    id: "0",
  },
  {
    text: "Appointments",
    path: `${Roles.patient.path}/appointments`,
    icon: <FaRegCalendarPlus />,
    id: "1",
  },
  {
    text: "Payments",
    path: `${Roles.patient.path}/payments`,
    icon: <FaCreditCard />,
    id: "2",
  },
];

const DoctorSideBarItems = [
  {
    id: "0",
    text: "Dashboard",
    path: `${Roles.doctor.path}`,
    icon: <BsFillGridFill />,
  },
  {
    text: "Appointments",
    path: `${Roles.doctor.path}/appointments`,
    icon: <FaRegCalendarPlus />,
    id: "1",
  },
];

const AdminSideBarItems = [
  {
    id: "0",
    text: "Dashboard",
    path: `${Roles.admin.path}`,
    icon: <BsFillGridFill />,
  },
  {
    text: "Add Doctor",
    path: `${Roles.admin.path}/addDoc`,
    icon: <FaUserMd />,
    id: "1",
  },
];

function User() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const location = useLocation();
  const [selectedSideBar, setSelectedSideBar] = useState();

  // useEffect(() => {
  //   const redirect = () => {
  //     if (location.pathname === "/user") {
  //       if (auth?.roles) {
  //         const allowedRoles = Object.values(Roles);
  //         const res = allowedRoles.find(
  //           (role) => auth.roles.indexOf(role.name) > -1
  //         );
  //         if (res && res.path) return navigate(res.path, { replace: true });
  //       }
  //       navigate("/error", { replace: true });
  //     }
  //   };

  //   redirect();
  // }, []);

  useEffect(() => {
    const selectSideBarItem = () => {
      const allowedRoles = Object.values(Roles);

      const selectedRole = location.pathname
        ? allowedRoles.find((role) => {
            const i = location.pathname.includes(role.path);
            return i;
          })
        : "";

      if (!selectedRole) return;

      switch (selectedRole.name) {
        case "Patient":
          setSelectedSideBar(PatientSideBarItems);
          break;
        case "Doctor":
          setSelectedSideBar(DoctorSideBarItems);
          break;
        case "Admin":
          setSelectedSideBar(AdminSideBarItems);
          break;
        default:
          break;
      }
    };

    selectSideBarItem();
  }, [location]);

  const handleLogout = async (e) => {
    e.preventDefault();
    navigate("/logout", { replace: true });
  };

  return (
    <div className="bg-white">
      <div className="h-screen fixed h-screen block top-0 left-0 z-[1]">
        <SideBar items={selectedSideBar || []} />
      </div>
      <div className={` ml-[150px] w-9/12 relative`}>
        <span className="absolute z-10 top-[50px] right-[0px] flex gap-[10px] justify-center items-center">
          <Avatar name="Santhanu" />
          <Menu name="Santhanu">
            <ItemButton>
              <span>
                <AiOutlineUser className="text-2xl" />
              </span>
              <span>Profile</span>
            </ItemButton>
            <ItemButton onClick={handleLogout}>
              <span>
                <MdLogout className="text-2xl" />
              </span>
              <span>Logout</span>
            </ItemButton>
          </Menu>
          <Notification />
        </span>
        <Outlet />
      </div>
    </div>
  );
}

export default User;

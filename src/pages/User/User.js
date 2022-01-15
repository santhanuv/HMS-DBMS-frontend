import React from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaCreditCard, FaRegCalendarPlus } from "react-icons/fa";
import Notification from "../../components/Notification";
import Avatar from "../../components/Avatar";
import { Outlet } from "react-router-dom";

function User() {
  const sideBarItems = [
    {
      text: "Dashboard",
      path: "/user",
      icon: <BsFillGridFill />,
      id: "0",
    },
    {
      text: "Appointments",
      path: "/user/appointments",
      icon: <FaRegCalendarPlus />,
      id: "1",
    },
    {
      text: "Payments",
      path: "/user/payments",
      icon: <FaCreditCard />,
      id: "2",
    },
  ];

  return (
    <div className="bg-white">
      <div className="h-screen fixed h-screen block top-0 left-0 z-[1]">
        <SideBar items={sideBarItems} />
      </div>
      <div className={` ml-[150px] w-9/12 relative`}>
        <span className="absolute z-10 top-[50px] right-[0px] flex gap-[10px]">
          <Avatar name="Santhanu" />
          <Notification />
        </span>
        <Outlet />
      </div>
    </div>
  );
}

export default User;

import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaRegCalendarPlus } from "react-icons/fa";
import Notification from "../../components/Notification";
import Avatar from "../../components/Avatar";
import { Outlet } from "react-router-dom";

const sideBarItems = [
  {
    id: "0",
    text: "Dashboard",
    path: "/doctor",
    icon: <BsFillGridFill />,
  },
  {
    text: "Appointment",
    path: "/doctor/appointments",
    icon: <FaRegCalendarPlus />,
    id: "1",
  },
];

function Doctor() {
  return (
    <div className="bg-white">
      <div className="h-screen fixed h-screen block top-0 left-0 z-[1]">
        <SideBar items={sideBarItems} />
      </div>
      <div className={`ml-[150px] w-9/12 relative`}>
        <span className="absolute z-10 top-[50px] right-[0px] flex gap-[10px]">
          <Avatar name="Santhanu" />
          <Notification />
        </span>
        {/* {contentSelector(selected)} */}
        <Outlet />
      </div>
    </div>
  );
}

export default Doctor;

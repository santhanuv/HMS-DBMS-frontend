import React, { useState, useRef, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaCreditCard, FaRegCalendarPlus } from "react-icons/fa";
import UserDashboard from "./UserDashboard";
import MainHeading from "../../components/MainHeading";
import UserAppointment from "./UserAppointment";
import UserPayments from "./UserPayments";

function User() {
  const [selected, setSelected] = useState("0");
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const onSideBarToggle = (state) => {
    setSideBarOpen(state);
  };

  const contentSelector = (selected) => {
    switch (selected) {
      case "0":
        return <UserDashboard />;
        break;
      case "1":
        return <UserAppointment />;
        break;
      case "2":
        return <UserPayments />;
        break;
    }
  };

  const sideBarItems = [
    {
      text: "Dashboard",
      selected: true,
      icon: <BsFillGridFill />,
      id: "0",
    },
    {
      text: "Appointments",
      selected: false,
      icon: <FaRegCalendarPlus />,
      id: "1",
    },
    {
      text: "Payments",
      selected: false,
      icon: <FaCreditCard />,
      id: "2",
    },
  ];

  return (
    <div className="bg-white w-screen h-screen">
      <div className="h-screen fixed h-screen block top-0 left-0">
        <SideBar
          items={sideBarItems}
          selected={selected}
          selector={setSelected}
          onChange={onSideBarToggle}
        />
      </div>
      <div
        className={`${sideBarOpen ? "ml-[380px]" : "ml-[150px]"}   ${
          selected === "0" ? "w-3/5" : "w-9/12"
        }`}
      >
        {contentSelector(selected)}
      </div>
    </div>
  );
}

export default User;

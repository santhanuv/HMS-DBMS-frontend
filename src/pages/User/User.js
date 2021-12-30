import React, { useState, useRef } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaCreditCard, FaRegCalendarPlus } from "react-icons/fa";
import UserDashboard from "./UserDashboard";
import MainHeading from "../../components/MainHeading";
import UserAppointment from "./UserAppointment";
import UserPayments from "./UserPayments";

function User() {
  const [selected, setSelected] = useState("0");

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
    <div className="bg-white w-screen h-screen relative">
      <div className="h-screen fixed">
        <SideBar
          items={sideBarItems}
          selected={selected}
          selector={setSelected}
        />
      </div>
      <div
        className={`ml-[300px] inline-block absolute left-[80px] ${
          selected === "0" ? "w-3/5" : "w-9/12"
        }`}
      >
        {contentSelector(selected)}
      </div>
    </div>
  );
}

export default User;

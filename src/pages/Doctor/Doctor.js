import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaRegCalendarPlus } from "react-icons/fa";
import DoctorDashboard from "./DoctorDashboard";
import DoctorAppointments from "./DoctorAppointments";

const contentSelector = (selected) => {
  switch (selected) {
    case "0":
      return <DoctorDashboard />;
      break;

    case "1":
      return <DoctorAppointments />;
      break;
  }
};

const sideBarItems = [
  {
    id: "0",
    text: "Dashboard",
    selected: false,
    icon: <BsFillGridFill />,
  },
  {
    text: "Appointment",
    selected: false,
    icon: <FaRegCalendarPlus />,
    id: "1",
  },
];

function Doctor() {
  const [selected, setSelected] = useState("0");
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const onSideBarToggle = (state) => {
    setSideBarOpen(state);
  };

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

export default Doctor;

import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaUserMd } from "react-icons/fa";
import AdminDashboard from "./AdminDashboard";
import AdminAddDoc from "./AdminAddDoc";
import Notification from "../../components/Notification";
import Avatar from "../../components/Avatar";

const contentSelector = (selected) => {
  switch (selected) {
    case "0":
      return <AdminDashboard />;
      break;

    case "1":
      return <AdminAddDoc />;
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
    text: "Add Doctor",
    selected: false,
    icon: <FaUserMd />,
    id: "1",
  },
];

function Admin() {
  const [selected, setSelected] = useState("0");
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const onSideBarToggle = (state) => {
    setSideBarOpen(state);
  };

  return (
    <div className="bg-white">
      <div className="h-screen fixed h-screen block top-0 left-0">
        <SideBar
          items={sideBarItems}
          selected={selected}
          selector={setSelected}
          onChange={onSideBarToggle}
        />
      </div>
      <div
        className={`${
          sideBarOpen ? "ml-[380px]" : "ml-[150px]"
        }   w-9/12 relative`}
      >
        <span className="absolute z-10 top-[50px] right-[0px] flex gap-[10px]">
          <Avatar name="Santhanu" />
          <Notification />
        </span>
        {contentSelector(selected)}
      </div>
    </div>
  );
}

export default Admin;

import React from "react";
import { MdNotifications } from "react-icons/md";

function Notification() {
  return (
    <div className="relative flex">
      <button>
        <span
          className="bg-primaryGrey text-white absolute right-[-5px] top-[-10px] rounded-[100px] w-[25px] 
      aspect-square text-center text-lg"
        >
          3
        </span>
        <MdNotifications className="text-4xl" />
      </button>
    </div>
  );
}

export default Notification;

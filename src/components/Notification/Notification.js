import React from "react";
import { MdNotifications } from "react-icons/md";

function Notification() {
  return (
    <div className="relative">
      <button>
        <span
          className="bg-primaryGrey text-white absolute right-[-2px] top-[-5px] rounded-[100px] w-[30px] 
      aspect-square text-center text-xl"
        >
          3
        </span>
        <MdNotifications className="text-5xl" />
      </button>
    </div>
  );
}

export default Notification;

import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainHeading from "../../components/MainHeading";
import {
  FaCreditCard,
  FaRegCalendarPlus,
  FaUser,
  FaUserMd,
  FaBed,
} from "react-icons/fa";
import { MdLocalPharmacy } from "react-icons/md";
import ShowCard from "../../components/ShowCard";

function AdminDashboard() {
  const showCardList = [
    {
      icon: <FaRegCalendarPlus className="text-6xl" />,
      texts: ["Appointments", 500, "Last 7 Days"],
    },
    {
      icon: <FaCreditCard className="text-6xl" />,
      texts: ["Payments", 204600, "Last 7 Days"],
    },
    {
      icon: <FaCreditCard className="text-6xl" />,
      texts: ["Pharmacy Sales", 1740, "Last 7 Days"],
    },
    {
      icon: <FaUser className="text-6xl" />,
      texts: ["Patients", 2124, "Last 7 Days"],
    },
    {
      icon: <FaUserMd className="text-6xl" />,
      texts: ["Doctors", 54],
    },
    {
      icon: <FaBed className="text-6xl" />,
      texts: ["Rooms", 440],
    },
  ];

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Dashboard
      </MainHeading>
      <div className="grid grid-cols-3 gap-[100px]">
        {showCardList.map((showCard) => {
          return (
            <ShowCard icon={showCard.icon} classNames=" w-[400px] h-[300px]">
              {showCard.texts.map((text, index) => (
                <h1
                  className={`${
                    index === 1 ? "text-4xl" : "text-xl"
                  } font-semibold text-primaryGrey`}
                >
                  {text}
                </h1>
              ))}
            </ShowCard>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default AdminDashboard;

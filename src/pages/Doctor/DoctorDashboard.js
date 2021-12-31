import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainHeading from "../../components/MainHeading";
import ShowCard from "../../components/ShowCard";
import { FaCreditCard, FaRegCalendarPlus } from "react-icons/fa";

const showCardList = [
  {
    icon: <FaRegCalendarPlus className="text-6xl" />,
    texts: ["Appointments", 26, "Last 7 Days"],
  },
  {
    icon: <FaCreditCard className="text-6xl" />,
    texts: ["Payments", 2046, "Last 7 Days"],
  },
];

function DoctorDashboard() {
  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Dashboard
      </MainHeading>
      <div className="flex gap-[100px] justify-center">
        {showCardList.map((showCard) => {
          return (
            <ShowCard icon={showCard.icon} classNames=" w-[300px] h-[200px]">
              {showCard.texts.map((text, index) => (
                <h1
                  className={`${
                    index === 1 ? "text-2xl" : "text-xl"
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

export default DoctorDashboard;

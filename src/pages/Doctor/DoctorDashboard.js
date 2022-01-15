import React, { useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainHeading from "../../components/MainHeading";
import ShowCard from "../../components/ShowCard";
import { FaCreditCard, FaRegCalendarPlus, FaAngleRight } from "react-icons/fa";
import { BsCalendarPlusFill } from "react-icons/bs";
import Card from "../../components/Card";
import CardSlider from "../../components/CardSlider";
import CardButton from "../../components/CardButton";
import DatePicker from "../../components/DatePicker";

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
const docAppointments = [
  {
    id: 1,
    category: "Category",
    time: "10:00-11:00",
    docName: "Doctor Name",
  },
  {
    id: 2,
    category: "Category",
    time: "10:00-11:00",
    docName: "Doctor Name",
  },
  {
    id: 3,
    category: "Category",
    time: "10:00-11:00",
    docName: "Doctor Name",
  },
  {
    id: 4,
    category: "Category",
    time: "10:00-11:00",
    docName: "Doctor Name",
  },
  {
    id: 5,
    category: "Category",
    time: "10:00-11:00",
    docName: "Doctor Name",
  },
];

function DoctorDashboard() {
  const [datePickerValue, setDatePickerValue] = useState();

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
      <Card classNames="p-[20px] flex justify-between mt-[50px] h-[600px]">
        <Card classNames="p-[40px] basis-1/2 justify-center items-center">
          <DatePicker
            selectedDate={datePickerValue}
            setSelectedDate={setDatePickerValue}
          />
        </Card>
        <div className="basis-5/12">
          <CardSlider cap={3} varient={1}>
            {docAppointments.map((appointment) => (
              <CardButton
                text={
                  <div className="flex flex-col gap-[2px]">
                    <h1 className="font-montserrat font-bold text-2xl">
                      {appointment.time}
                    </h1>
                    <h1 className="font-montserrat font-bold text-xl">
                      {appointment.docName}
                    </h1>
                    <h1 className="font-montserrat text-xl">
                      {appointment.category}
                    </h1>
                  </div>
                }
                icon={<BsCalendarPlusFill className="text-5xl" />}
                btnIcon={<FaAngleRight className="text-5xl" />}
                onClick={() => {}}
                id={appointment.id}
              />
            ))}
          </CardSlider>
        </div>
      </Card>
    </Wrapper>
  );
}

export default DoctorDashboard;

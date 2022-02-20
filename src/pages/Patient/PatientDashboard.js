import React from "react";
import { BsFileMedicalFill, BsFileArrowDownFill } from "react-icons/bs";
import MainHeading from "../../components/MainHeading";
import CardButton from "../../components/CardButton";
import CardSlider from "../../components/CardSlider";
import InfoCard from "../../components/InfoCard";
import EmptyCard from "../../components/EmptyCard";
import Wrapper from "../../components/Wrapper/Wrapper";

function PatientDashboard() {
  // Remove This
  const billList = [
    {
      total: 2000,
      medicines: 250,
      appointment: 750,
      rooms: 1000,
      paidOn: "28/02/2021",
    },
    {
      total: 3000,
      medicines: 550,
      appointment: 150,
      rooms: 1300,
      paidOn: "17/03/2020",
    },
  ];

  // Remove this
  const reportList = [
    { text: "Report 1", id: "rlink1" },
    { text: "Report 2", id: "rlink2" },
    { text: "Report 3", id: "rlink3" },
    { text: "Report 4", id: "rlink3" },
    { text: "Report 5", id: "rlink3" },
  ];

  // Remove This
  const roomList = [
    {
      id: 203,
      type: "SB",
      checkIn: "26/11/21",
      checkOut: "27/11/21",
      rent: 504,
    },
    {
      id: 205,
      type: "SB",
      checkIn: "16/11/21",
      checkOut: "17/11/21",
      rent: 574,
    },
  ];

  const createBillInfoList = (bill) => [
    { headText: "Total", headValue: bill.total },
    { text: "Medicines", value: bill.medicines },
    { text: "Appointment", value: bill.appointment },
    { text: "Rooms", value: bill.rooms },
    { text: "Paid On", value: bill.paidOn },
  ];

  const createRoomInfoList = (room) => [
    { headText: "Room No", headValue: room.id },
    { text: "Type", value: room.type },
    { text: "Check In", value: room.checkIn },
    { text: "Check Out", value: room.checkOut },
    { text: "Rent", value: room.rent },
  ];

  const reportCardClickHandler = (e) => console.log(e.currentTarget.id);

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-5">Dashboard</MainHeading>
      <div className="grid grid-cols-2 gap-x-[25px] gap-y-[75px]">
        <div className="h-[500px] w-full">
          <h1 className="text-xl font-montserrat text-primaryGrey font-semibold my-[20px]">
            Medications
          </h1>
          <EmptyCard>No Medications</EmptyCard>
        </div>
        <div className="h-[500px] w-full">
          <h1 className="text-xl font-montserrat text-primaryGrey font-semibold my-[20px]">
            Reports
          </h1>
          <CardSlider cap={3} varient={1}>
            {reportList.map((report, index) => (
              <CardButton
                key={index}
                text={report.text}
                icon={<BsFileMedicalFill className="text-4xl" />}
                btnIcon={<BsFileArrowDownFill className="text-4xl" />}
                onClick={reportCardClickHandler}
                id={report.id}
              />
            ))}
          </CardSlider>
        </div>
        <div className="h-[500px] w-full">
          <h1 className="text-xl font-montserrat text-primaryGrey font-semibold my-[20px]">
            Recent Bills
          </h1>
          <CardSlider varient={1}>
            {billList.map((bill, index) => {
              const billInfoList = createBillInfoList(bill);
              return <InfoCard key={index} infoList={billInfoList} />;
            })}
          </CardSlider>
        </div>
        <div className="h-[500px] w-full">
          <h1 className="text-xl font-montserrat text-primaryGrey font-semibold my-[20px]">
            Current Rooms
          </h1>
          <CardSlider varient={1}>
            {roomList.map((room, index) => {
              const roomInfoList = createRoomInfoList(room);
              return <InfoCard key={index} infoList={roomInfoList} />;
            })}
          </CardSlider>
        </div>
      </div>
    </Wrapper>
  );
}

export default PatientDashboard;

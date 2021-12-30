import React, { useState, useEffect } from "react";
import { BsFileMedicalFill, BsFileArrowDownFill } from "react-icons/bs";
import MainHeading from "../../components/MainHeading";
import CardButton from "../../components/CardButton";
import CardSlider from "../../components/CardSlider";
import InfoCard from "../../components/InfoCard";
import EmptyCard from "../../components/EmptyCard";
import UserWrapper from "./UserWrapper";

function UserDashboard() {
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

  const reportCardClickHandler = (e) => console.log(e.id);

  return (
    <UserWrapper>
      <MainHeading classNames="text-primaryGrey mb-5">Dashboard</MainHeading>
      {/* Content Section */}
      <div className="grid grid-cols-2 gap-10 h-4/5">
        {/* Current Medication Card*/}

        <div className="">
          <h1 className="font-montserrat font-bold text-2xl my-5">
            Medications
          </h1>
          <div className="h-4/5">
            <EmptyCard>No Medications</EmptyCard>
          </div>
        </div>

        <div className="">
          <h1 className="font-montserrat font-bold text-2xl my-5">Reports</h1>
          <div className="h-4/5">
            <CardSlider cap={3} varient={1}>
              {reportList.map((report) => (
                <CardButton
                  text={report.text}
                  icon={<BsFileMedicalFill className="text-3xl" />}
                  btnIcon={<BsFileArrowDownFill className="text-3xl" />}
                  onClick={reportCardClickHandler}
                  id={report.id}
                />
              ))}
            </CardSlider>
          </div>
        </div>

        <div className="">
          <h1 className="font-montserrat font-bold text-2xl my-5">
            Recent Bills
          </h1>
          <div className="h-4/5">
            <CardSlider>
              {billList.map((bill) => {
                const billInfoList = createBillInfoList(bill);
                return <InfoCard infoList={billInfoList} />;
              })}
            </CardSlider>
          </div>
        </div>
        <div>
          <h1 className="font-montserrat font-bold text-2xl my-5">
            Current Rooms
          </h1>
          <div className="h-4/5">
            <CardSlider>
              {roomList.map((room) => {
                const roomInfoList = createRoomInfoList(room);
                return <InfoCard infoList={roomInfoList} />;
              })}
            </CardSlider>
          </div>
        </div>
      </div>
    </UserWrapper>
  );
}

export default UserDashboard;

import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { FaCreditCard, FaRegCalendarPlus } from "react-icons/fa";
import Card from "../../components/Card";
import MainHeading from "../../components/MainHeading";
import ReportCard from "../../components/UserComponents/ReportCard";
import CardSlider from "../../components/CardSlider";
import InfoCard from "../../components/UserComponents/InfoCard";
import EmptyCard from "../../components/EmptyCard";

function UserDashboard() {
  const updateSelection = (btnId) => (prevDashBoadItems) => {
    return prevDashBoadItems.map((item) => {
      return item.id === btnId
        ? { ...item, selected: true }
        : { ...item, selected: false };
    });
  };

  const handleSelection = (e) => {
    setDashBoardItems(updateSelection(e.currentTarget.id));
  };

  const [openState, setOpenState] = useState(true);
  const [dashBoardItems, setDashBoardItems] = useState([
    {
      text: "Dashboard",
      selected: true,
      icon: <BsFillGridFill />,
      id: "0",
      onClick: handleSelection,
    },
    {
      text: "Appointments",
      selected: false,
      icon: <FaRegCalendarPlus />,
      id: "1",
      onClick: handleSelection,
    },
    {
      text: "Payments",
      selected: false,
      icon: <FaCreditCard />,
      id: "2",
      onClick: handleSelection,
    },
  ]);

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

  const toggleHandle = (e) => {
    if (e.currentTarget.id === "close_btn" && openState) setOpenState(false);
    else if (e.currentTarget.id === "open_btn" && !openState)
      setOpenState(true);
  };

  return (
    <div className="bg-white w-screen h-screen flex">
      <div className={`h-full ${openState ? "basis-1/6" : "w-[100px]"}`}>
        <SideBar
          items={dashBoardItems}
          onClick={toggleHandle}
          openState={openState}
        />
      </div>
      <div className="bg-white h-screen px-[50px] py-[50px] w-3/5">
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
              <Card>
                <ReportCard
                  reportList={[
                    { text: "Report 1", link: "rlink1" },
                    { text: "Report 2", link: "rlink2" },
                    { text: "Report 3", link: "rlink3" },
                    { text: "Report 4", link: "rlink3" },
                    { text: "Report 5", link: "rlink3" },
                  ]}
                />
              </Card>
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
      </div>
    </div>
  );
}

export default UserDashboard;
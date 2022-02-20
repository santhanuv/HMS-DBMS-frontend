import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import MainHeading from "../../components/MainHeading";
import Table from "../../components/Table";
import { FaEdit, FaWindowClose, FaAngleRight } from "react-icons/fa";
import { BsCalendarPlusFill } from "react-icons/bs";
import Card from "../../components/Card";
import Wrapper from "../../components/Wrapper/Wrapper";
import Badge from "../../components/Badge";
import DatePicker from "../../components/DatePicker";
import CardSlider from "../../components/CardSlider";
import CardButton from "../../components/CardButton";
import AppointmentForm from "./AppointmentForm";
import {
  getAllAppointments,
  deleteAppointment,
} from "../../api/appointment.api";
import useAuthAxios from "../../hooks/useAuthAxios";
import formatTime from "../../utils/formatTime";

function PatientAppointments() {
  const [addCardVisible, setAddCardVisible] = useState(false);
  const [datePickerValue, setDatePickerValue] = useState(new Date());
  const [appointmentData, setAppointmentData] = useState();
  const axios = useAuthAxios();
  const addCardRef = useRef(null);

  const deleteAppointmentHandler = async (appointmentID) => {
    const { response, err } = await deleteAppointment(axios, appointmentID);
    if (response) {
      const newData = appointmentData.filter((appointment) => {
        return appointment.appointmentID !== parseInt(appointmentID);
      });
      setAppointmentData(newData);
    } else {
      console.log(err);
    }
  };

  const formatAppointments = (data) => {
    const list = data.map((appointment) => {
      const formated = {
        doctor: `${appointment.doctor.firstName} ${appointment.doctor.lastName}`,
        date: appointment.date,
        time: `${formatTime(appointment.timeSlot.startTime)}-${formatTime(
          appointment.timeSlot.endTime
        )}`,
        price: appointment.charge,
        isCompleted: appointment.isCompleted ? (
          <Badge varient={"success"}>Completed</Badge>
        ) : (
          <Badge varient={"pending"}>Pending</Badge>
        ),
        btns: (
          <div className="flex w-full gap-5">
            {!appointment.isCompleted && false && (
              <Button
                id={`edit_${appointment.appointmentID}`}
                icon={<FaEdit />}
                isCustom={true}
                classNames="text-3xl text-primaryBlue"
              />
            )}
            <Button
              id={`del_${appointment.appointmentID}`}
              onClick={async (e) => {
                const idStr = e.currentTarget.id;
                if (idStr) {
                  const id = idStr.split("del_")[1];
                  await deleteAppointmentHandler(id);
                }
              }}
              icon={<FaWindowClose />}
              isCustom={true}
              classNames="text-3xl text-primaryBlue"
            />
          </div>
        ),
      };
      return formated;
    });
    return list;
  };

  const handleExitCard = (e) => {
    if (
      (addCardRef &&
        addCardRef.current &&
        !addCardRef.current.contains(e.target)) ||
      e.currentTarget.id === "addCardClose"
    )
      setAddCardVisible(false);
  };

  const handleOpenCard = (e) => {
    e.preventDefault();

    setAddCardVisible(true);
  };

  const addAppointmentCallback = (data) => {
    setAppointmentData((prevData) => {
      return [...prevData, data];
    });
    setAddCardVisible(false);
  };

  useEffect(() => document.addEventListener("click", handleExitCard, true));

  useEffect(() => {
    const fetch = async () => {
      const { response, err } = await getAllAppointments(axios, "Patient");
      if (response) {
        setAppointmentData(response.data);
      } else {
        console.log("\n\nError: ", err);
      }
    };

    fetch();
  }, []);

  const data = React.useMemo(() =>
    formatAppointments(appointmentData ? appointmentData : [])
  );
  const columns = React.useMemo(() => [
    {
      Header: "Doctor",
      accessor: "doctor",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Time",
      accessor: "time",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Status",
      accessor: "isCompleted",
    },
    {
      Header: "Actions",
      accessor: "btns",
    },
  ]);

  const userAppointments = [
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

  return (
    <Wrapper className="">
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        APPOINTMENT
      </MainHeading>
      <Button
        text="Add Appointment"
        classNames="p-5 text-2xl rounded-[10px]"
        wrapperClassNames="mt-6"
        onClick={handleOpenCard}
      />
      {/* {
        <Card classNames="p-[20px] flex justify-between mt-[50px] h-[600px]">
          <Card classNames="p-[40px] basis-1/2 justify-center items-center">
            <DatePicker
              selectedDate={datePickerValue}
              setSelectedDate={setDatePickerValue}
            />
          </Card>
          <div className="basis-5/12">
            <CardSlider cap={3} varient={1}>
              {userAppointments.map((appointment, index) => (
                <CardButton
                  key={index}
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
      } */}
      {
        <Card classNames="my-[40px] min-h-[600px]">
          <Table columns={columns} data={data} />
        </Card>
      }
      {addCardVisible && (
        <div
          className="w-[1450px] h-[700px] absolute top-[160px] static"
          ref={addCardRef}
        >
          <span className="absolute text-primaryBlue z-10 top-[20px] right-[20px] text-5xl">
            <Button
              icon={<FaWindowClose />}
              isCustom={true}
              id="addCardClose"
              onClick={handleExitCard}
            />
          </span>
          <Card
            classNames="w-full h-full flex  bg-white
      justify-center items-center p-[50px] flex-col relative"
          >
            <div className="w-1/2">
              <h1 className="font-montserrat font-bold text-3xl mb-[30px] text-primaryGrey">
                Add Appointment
              </h1>
              <AppointmentForm callback={addAppointmentCallback} />
            </div>
          </Card>
        </div>
      )}
    </Wrapper>
  );
}

export default PatientAppointments;

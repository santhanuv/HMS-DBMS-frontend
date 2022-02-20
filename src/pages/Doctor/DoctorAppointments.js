import React, { useState, useEffect } from "react";
import Badge from "../../components/Badge";
import MainHeading from "../../components/MainHeading";
import Wrapper from "../../components/Wrapper/Wrapper";
import { FaAngleRight } from "react-icons/fa";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Table from "../../components/Table";
import {
  getAllAppointments,
  getLatestAppointments,
} from "../../api/appointment.api";
import useAuthAxios from "../../hooks/useAuthAxios";
import formatTime from "../../utils/formatTime";

// Creates mock data
const remove = () => {
  const list = [];
  const names = ["A", "B", "Z", "S", "M"];
  for (let i = 0; i < 10; i++) {
    list.push({
      id: i,
      pat_name: names[i % 5],
      date: `${10 + i}/01/2026`,
      time: "10:00-11:00",
      status:
        i % 2 === 0 ? (
          <Badge varient="success">Complete</Badge>
        ) : (
          <Badge varient="pending">Pending</Badge>
        ),
      btns: (
        <Button
          id={`del_${i}`}
          icon={<FaAngleRight />}
          isCustom={true}
          classNames="text-3xl text-primaryBlue"
        />
      ),
    });
  }
  return list;
};

function DoctorAppointments() {
  const [appointmentData, setAppointmentData] = useState();
  const axios = useAuthAxios();

  useEffect(() => {
    const fetch = async () => {
      const { response, err } = await getAllAppointments(axios, "Doctor");
      if (response) {
        setAppointmentData(response.data);
      } else {
        console.log(err);
      }
    };

    fetch();
  }, []);

  const formatAppointments = (data) => {
    const list = data.map((appointment) => {
      const formated = {
        patient: `${appointment.patient.firstName} ${appointment.patient.lastName}`,
        date: appointment.date,
        time: `${formatTime(appointment.timeSlot.startTime)}-${formatTime(
          appointment.timeSlot.endTime
        )}`,
        isCompleted: appointment.isCompleted ? (
          <Badge varient={"success"}>Completed</Badge>
        ) : (
          <Badge varient={"pending"}>Pending</Badge>
        ),
        btns: (
          <div className="flex w-full gap-5">
            <Button
              id={`del_${appointment.appointmentID}`}
              icon={<FaAngleRight />}
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

  const data = React.useMemo(() =>
    formatAppointments(appointmentData ? appointmentData : [])
  );

  const columns = React.useMemo(() => [
    {
      Header: "Patient",
      accessor: "patient",
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
      Header: "Status",
      accessor: "isCompleted",
    },
    {
      Header: "Actions",
      accessor: "btns",
    },
  ]);

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Appointments
      </MainHeading>
      <Card classNames="my-[40px] min-h-[600px]">
        <Table columns={columns} data={data} />
      </Card>
    </Wrapper>
  );
}

export default DoctorAppointments;

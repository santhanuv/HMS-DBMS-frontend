import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Select from "../../components/Select";
import DateFeild from "../../components/TextInput/DateFeild";
import { addYears } from "date-fns";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { string } from "yup";
import { getAllATS } from "../../api/ats.api";
import { getAllDoctors, getAllDepartments } from "../../api/staff.api";
import { createAppointment } from "../../api/appointment.api";
import useAuthAxios from "../../hooks/useAuthAxios";

const appointmentSchema = yup.object().shape({
  doctorID: yup.number().required("Doctor is required"),
  date: yup
    .date()
    .strict(true)
    .typeError("Date is not valid")
    .min(new Date(), "Select a date in the future!")
    .required("Date is required"),
  timeSlotID: yup.number().required("Time Slot is required"),
});

const initialFormState = {
  doctorID: "",
  date: "",
  timeSlotID: "",
};

// Will Change the time selector component with a custom component

const hourOptions = [...Array(12)].map((_, index) =>
  index + 1 > 9 ? `${index + 1}` : `0${index + 1}`
);
const minuteOptions = [...Array(6)].map((_, index) => `${index}0`);

const formatTimeSlot = (timeSlot) => {
  const matchPattern = /\d{2}:\d{2}/;
  const name = `${timeSlot.startTime.match(
    matchPattern
  )}-${timeSlot.endTime.match(matchPattern)}`;
  const id = timeSlot.slotID;
  return { id, name };
};

function AppointmentForm({ callback }) {
  const axios = useAuthAxios();

  const {
    register,
    onSubmit,
    formData,
    onChange: formOnChange,
    setField,
  } = useForm(initialFormState, appointmentSchema);

  const [departments, setDepartments] = useState([]);
  const [dptDocs, setDptDocs] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { response: doctorRes, err: doctorErr } = await getAllDoctors(
        axios
      );
      // const { response: departmentRes, err: departmentErr } =
      //   await getAllDepartments(axios);
      if (doctorRes) {
        setDptDocs(doctorRes.data);
        const departments = Object.keys(doctorRes?.data);
        setDepartments(departments);
      } else {
        console.log(doctorErr);
      }

      // if (departmentRes) {
      //   setDepartments(departmentRes.data);
      // } else {
      //   console.log(departmentErr);
      // }
    };

    fetch();
  }, []);

  useEffect(() => {
    const docList = dptDocs[formData.department] || [];
    setDoctors(docList);
  }, [formData.department, dptDocs]);

  useEffect(() => {
    const fetch = async () => {
      if (formData.doctorID && formData.date) {
        const { response, err } = await getAllATS(axios, {
          doctor: formData.doctorID,
          date: formData.date,
        });

        if (response) {
          const timeSlots = response.data.map((timeSlot) =>
            formatTimeSlot(timeSlot)
          );
          setTimeSlots(timeSlots);
        } else {
          console.log(err);
        }
      }
    };
    fetch();
  }, [formData.doctorID, formData.date]);

  const postAppointment = async (data) => {
    const { response, err } = await createAppointment(axios, data);
    if (response) {
      const { department: omit, ...newData } = response.data;
      callback(newData);
    } else {
      console.log(err);
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e, postAppointment)}>
      <Select
        options={departments}
        varient="form"
        {...register("department")}
        btnClassName={`h-[70px]`}
      />
      <Select
        optionsObj={doctors}
        varient="form"
        {...{
          ...register("doctor"),
          onChange: ({ id, name, value }) => {
            formOnChange({ name, value });
            setField("doctorID", id);
          },
        }}
        btnClassName={`h-[70px]`}
      />
      <DateFeild
        text="Appointment Date"
        id="date"
        {...register("date")}
        isTop={false}
      />
      <Select
        optionsObj={timeSlots}
        varient="form"
        {...{
          ...register("timeSlot"),
          onChange: ({ id, name, value }) => {
            formOnChange({ name, value });
            setField("timeSlotID", id);
          },
        }}
        btnClassName={`h-[70px]`}
      />
      <Button
        text="ADD"
        id="add_btn"
        classNames="text-4xl p-7 w-full rounded-[10px]"
      />
    </form>
  );
}

export default AppointmentForm;

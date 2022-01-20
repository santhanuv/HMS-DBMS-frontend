import React from "react";
import * as yup from "yup";
import Select from "../../components/Select";
import DateFeild from "../../components/TextInput/DateFeild";
import { addYears } from "date-fns";
import useForm from "../../hooks/useForm";
import Button from "../../components/Button";
import { string } from "yup";

const appointmentSchema = yup.object().shape({
  doctorName: yup.string().min(3, "Doctor Name should be atleast 3 characters"),
  date: yup
    .date()
    .strict(true)
    .typeError("Date is not valid")
    .min(new Date(), "Select a date in the future!"),
  hour: string().required("Hour is required"),
  minute: string().required("Minute is required"),
  period: string(),
});

const initialFormState = {
  doctorName: "",
  date: "",
  hour: "",
  minute: "",
  period: "",
};

// Will Change the time selector component with a custom component

const hourOptions = [...Array(12)].map((_, index) =>
  index + 1 > 9 ? `${index + 1}` : `0${index + 1}`
);
const minuteOptions = [...Array(6)].map((_, index) => `${index}0`);

function AppointmentForm() {
  // Fetch doctor names
  const doctorNames = [
    "Doctor Name",
    "Santhanu",
    "Shefton",
    "Seira",
    "Sandhu",
    "Doctor2",
  ];

  const { register, onSubmit } = useForm(initialFormState, appointmentSchema);
  return (
    <form onSubmit={onSubmit}>
      <Select
        options={doctorNames}
        varient="form"
        {...register("doctorName")}
        btnClassName={`h-[70px]`}
      />
      <DateFeild
        text="Appointment Date"
        id="date"
        {...register("date")}
        isTop={false}
      />
      <div className="flex justify-between gap-[30px]">
        <Select
          disableFirst={false}
          options={hourOptions}
          varient="form"
          {...register("hour")}
          btnClassName={`h-[70px]`}
          wrapperClassName="w-full"
        />
        <Select
          disableFirst={false}
          options={minuteOptions}
          varient="form"
          {...register("minute")}
          btnClassName={`h-[70px]`}
          wrapperClassName="w-full"
        />
        <Select
          disableFirst={false}
          varient="form"
          options={["AM", "PM"]}
          {...register("period")}
          btnClassName={`h-[70px]`}
          wrapperClassName="w-full"
        />
      </div>
      <Button
        text="ADD"
        id="add_btn"
        classNames="text-4xl p-7 w-full rounded-[10px]"
      />
    </form>
  );
}

export default AppointmentForm;

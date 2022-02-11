import React, { useEffect, useState } from "react";
import TextField from "../../components/TextInput/TextField";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";
import registerSchema from "./registerSchema";
import useForm from "../../hooks/useForm";
import DateField from "../../components/TextInput/DateFeild";
import TextAreaField from "../../components/TextInput/TextAreaField";
import { getDistricts } from "../../api/districts.api";
import { getGenders } from "../../api/gender.api";
import { registerPatient } from "../../api/patient.api";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  dob: "",
  phoneNumber: "",
  gender: "",
  emergencyNumber: "",
  state: "",
  district: "",
  address: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const registerationCallback = async (data) => {
  const registerRes = await registerPatient(data);
  if (registerRes.data) {
    return true;
  } else {
    console.log("Error", registerRes.err);
    return false;
  }
};

function RegisterForm({ formState, setFormState }) {
  const navigate = useNavigate();

  const [districts, setDistricts] = useState([]);
  const [states, setStates] = useState([]);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const districtRes = await getDistricts();
      const genderRes = await getGenders();

      if (genderRes.data) {
        setGenders(genderRes.data);
      } else {
        console.log(genderRes.err);
      }

      if (districtRes.data) {
        const states = Object.keys(districtRes.data);
        const districts = districtRes.data;
        setDistricts(districts);
        setStates(states);
      } else {
        console.log(districtRes.err);
      }
    };

    fetch();
  }, []);

  const { register, onSubmit, formData } = useForm(
    initialFormState,
    registerSchema
  );

  const doRegister = async (e) => {
    const status = await onSubmit(e, registerationCallback);
    if (status) {
      navigate("/login", { replace: true });
    }
  };

  const TextFieldClassName = `h-[70px]`;
  const handleToggle = (setFormState) => (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (!id) return;

    switch (id) {
      case "next_btn":
        setFormState(true);
        break;
      case "back_btn":
        setFormState(false);
        break;
      default:
        break;
    }
  };

  return (
    <Card classNames="mx-[30px] mt-[10px] p-[30px] w-3/4">
      <form
        onSubmit={doRegister}
        className={
          !formState
            ? "grid grid-cols-2 gap-x-10 gap-y-[50px]"
            : "flex flex-col gap-[50px]"
        }
      >
        {!formState ? (
          <>
            <TextField
              text="First Name"
              id="firstName"
              {...register("firstName")}
              className={TextFieldClassName}
            />
            <TextField
              text="Last Name"
              id="lastName"
              {...register("lastName")}
              className={TextFieldClassName}
            />
            <DateField
              text="Date Of Birth"
              id="dob"
              startYear="1900"
              endYear={new Date().getFullYear()}
              {...register("dob")}
              className={TextFieldClassName}
            />
            <TextField
              text="Phone Number"
              id="phoneNumber"
              {...register("phoneNumber")}
              className={TextFieldClassName}
            />
            <Select
              options={genders ? genders : []}
              varient="form"
              {...register("gender")}
              btnClassName={`h-[70px]`}
            />
            <TextField
              text="Emergency Number"
              id="emergencyNumber"
              {...register("emergencyNumber")}
              className={TextFieldClassName}
            />
            <Select
              options={states ? states : []}
              varient="form"
              {...register("state")}
              btnClassName={`h-[70px]`}
            />
            <Select
              options={formData?.state ? districts[formData.state] : []}
              varient="form"
              {...register("district")}
              btnClassName={`h-[70px]`}
            />
            <TextAreaField
              text="Address"
              id="address"
              {...register("address")}
              className={TextFieldClassName}
              wrapperClassName={`col-span-2`}
            />
            <div className="col-end-3 flex flex-row-reverse">
              <Button
                onClick={handleToggle(setFormState)}
                id="next_btn"
                icon={<FaAngleRight />}
                classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
              />
            </div>
          </>
        ) : (
          <>
            <TextField
              text="Email"
              id="email"
              type="text"
              {...register("email")}
              className={TextFieldClassName}
            />
            <TextField
              text="Password"
              id="password"
              type="password"
              {...register("password")}
              className={TextFieldClassName}
            />
            <TextField
              text="Confirm Password"
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={TextFieldClassName}
            />
            <div className="col-end-3 flex flex-row justify-between">
              <Button
                id="back_btn"
                onClick={handleToggle(setFormState)}
                icon={<FaAngleLeft />}
                classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
              />
              <Button
                id="complete_btn"
                icon={<FaCheck />}
                classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
              />
            </div>
          </>
        )}
      </form>
    </Card>
  );
}

export default RegisterForm;

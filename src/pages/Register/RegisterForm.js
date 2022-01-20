import React from "react";
import TextField from "../../components/TextInput/TextField";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";
import formSchema from "./formSchema";
import useForm from "../../hooks/useForm";
import DateField from "../../components/TextInput/DateFeild";
import TextAreaField from "../../components/TextInput/TextAreaField";

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

function RegisterForm({ formState, setFormState }) {
  const { register, onSubmit, errors } = useForm(initialFormState, formSchema);

  const TextFieldClassName = `h-[70px]`;
  const GenderOptions = ["Gender", "Male", "Female", "Other"];
  const stateOptions = ["State", "Kerala", "Tamil Nadu", "Karnataka"];
  const districtOptions = [
    "District",
    "Kottayam",
    "Kochi",
    "Kollam",
    "Malappuram",
  ];

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
    }
  };

  return (
    <Card classNames="mx-[30px] mt-[10px] p-[30px] w-3/4">
      <form
        onSubmit={onSubmit}
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
              errMsg={errors.firstName}
              className={TextFieldClassName}
            />
            <TextField
              text="Last Name"
              id="lastName"
              {...register("lastName")}
              errMsg={errors.lastName}
              className={TextFieldClassName}
            />
            <DateField
              text="Date Of Birth"
              id="dob"
              startYear="1900"
              endYear={new Date().getFullYear()}
              {...register("dob")}
              errMsg={errors.dob}
              className={TextFieldClassName}
            />
            <TextField
              text="Phone Number"
              id="phoneNumber"
              {...register("phoneNumber")}
              errMsg={errors.phoneNumber}
              className={TextFieldClassName}
            />
            <Select
              options={GenderOptions}
              varient="form"
              {...register("gender")}
              errMsg={errors.gender}
              btnClassName={`h-[70px]`}
            />
            <TextField
              text="Emergency Number"
              id="emergencyNumber"
              {...register("emergencyNumber")}
              errMsg={errors.emergencyNumber}
              className={TextFieldClassName}
            />
            <Select
              options={stateOptions}
              varient="form"
              {...register("state")}
              errMsg={errors.state}
              btnClassName={`h-[70px]`}
            />
            <Select
              options={districtOptions}
              varient="form"
              {...register("district")}
              errMsg={errors.district}
              btnClassName={`h-[70px]`}
            />
            <TextAreaField
              text="Address"
              id="address"
              {...register("address")}
              errMsg={errors.address}
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
              errMsg={errors.email}
              className={TextFieldClassName}
            />
            <TextField
              text="Password"
              id="password"
              type="password"
              {...register("password")}
              errMsg={errors.password}
              className={TextFieldClassName}
            />
            <TextField
              text="Confirm Password"
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              errMsg={errors.confirmPassword}
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

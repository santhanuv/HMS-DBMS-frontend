import React, { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
import staffRegisterationSchema from "./staffRegistrationSchema";
import TextField from "../../components/TextInput/TextField";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";
import DateField from "../../components/TextInput/DateFeild";
import TextAreaField from "../../components/TextInput/TextAreaField";
import { getDistricts } from "../../api/districts.api";
import { getGenders } from "../../api/gender.api";
import { createStaff } from "../../api/staff.api";
import { useLocation, useNavigate } from "react-router-dom";
import MainHeading from "../../components/MainHeading";
import { VscCircleFilled, VscCircleOutline } from "react-icons/vsc";

const TextFieldClassName = `h-[70px]`;
const initValue = {
  firstName: "",
  lastName: "",
  password: "",
  dob: "",
  phoneNumber: "",
  gender: "",
  state: "",
  district: "",
  address: "",
  confirmPassword: "",
};

const StaffRegistration = () => {
  const { register, onSubmit, formData, resetField } = useForm(
    initValue,
    staffRegisterationSchema
  );
  const [states, setStates] = useState([]);
  const [genders, setGenders] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [staffInfo, setStaffInfo] = useState([]);

  const [formState, setFormState] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

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

    if (location.state?.staffData) {
      setStaffInfo(location.state?.staffData);
    }
  }, []);

  useEffect(() => {
    resetField("district");
  }, [formData.state]);

  const registerationCallback = async (data) => {
    console.log("registeration on going");
    const { response, err } = await createStaff(data);
    if (response) return true;
    else {
      console.log(err);
      return false;
    }
  };

  const doRegister = async (e) => {
    console.log("registering");
    const status = await onSubmit(e, registerationCallback);
    if (status) {
      navigate("/login", { state: { type: "staff" }, replace: true });
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center gap-[30px]">
        <MainHeading classNames="pt-[80px] text-primaryBlue">
          Staff Registration
        </MainHeading>

        <div
          className={`flex gap-2 w-full justify-center ${
            formState ? "flex-row-reverse" : ""
          }`}
        >
          <VscCircleOutline className={`text-xl text-disabledGrey`} />
          <VscCircleFilled className="text-2xl text-primaryBlue" />
        </div>
        <div className="flex justify-center items-center w-full">
          {!formState && (
            <Button
              icon={<FaAngleLeft className="text-4xl" />}
              isCustom={true}
              classNames="text-primaryBlue"
              onClick={(e) => {
                e.preventDefault();
                setFormState(true);
              }}
            />
          )}
          <Card
            classNames={`mx-[30px] p-[30px] ${formState ? "w-1/2" : "w-4/12"}`}
          >
            <form
              onSubmit={doRegister}
              className={
                formState
                  ? "grid grid-cols-2 gap-x-10 gap-y-[50px]"
                  : "flex flex-col gap-[50px]"
              }
            >
              {formState ? (
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
                  <Select
                    options={genders ? genders : []}
                    varient="form"
                    {...register("gender")}
                    btnClassName={`h-[70px]`}
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
                </>
              ) : (
                <>
                  <TextField
                    text="Phone Number"
                    id="phoneNumber"
                    {...register("phoneNumber")}
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
                </>
              )}
            </form>
          </Card>
          {formState ? (
            <Button
              icon={<FaAngleRight className="text-4xl" />}
              isCustom={true}
              classNames="text-primaryBlue"
              onClick={(e) => {
                e.preventDefault();
                setFormState(false);
              }}
            />
          ) : (
            <Button
              icon={<FaCheck className="text-4xl" />}
              isCustom={true}
              classNames="text-primaryBlue"
              onClick={doRegister}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default StaffRegistration;

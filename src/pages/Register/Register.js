import React, { useState } from "react";
import Card from "../../components/Card";
import Form from "../../components/Form";
import MainHeading from "../../components/MainHeading";
import TextInput from "../../components/TextInput";
import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";
import SelectInput from "../../components/SelectInput";
import Select from "../../components/Select";

import Button from "../../components/Button";

function Register() {
  const [formState, setFormState] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    console.log(id);
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

  const formInputs1 = [
    <div className="grid grid-cols-2 gap-x-10">
      <TextInput
        text="First Name"
        id="fname"
        name="fname"
        wrapperClassNames=""
      />
      <TextInput
        text="Last Name"
        id="lname"
        name="lname"
        wrapperClassNames=""
      />
      <TextInput
        text="Date Of Birth"
        id="dob"
        name="dob"
        wrapperClassNames=""
      />
      <TextInput
        text="Phone Number"
        id="phNum"
        name="phNum"
        wrapperClassNames=""
      />
      {/* <TextInput text="Gender" id="gender" name="gender" wrapperClassNames="" /> */}
      <SelectInput
        options={["Gender", "Male", "Female", "Other"]}
        text="Gender"
        id="gender"
      />
      <TextInput
        text="Emergency Number"
        id="emnum"
        name="emnum"
        wrapperClassNames=""
      />
      <TextInput text="Address" id="addr" name="addr" wrapperClassNames="" />
      <div className="flex flex-row gap-x-10">
        {/* <TextInput text="State" id="state" name="state" wrapperClassNames="" /> */}
        <SelectInput
          options={["State", "Kerala", "Tamil Nadu", "Karnataka"]}
          text="State"
          id="state"
        />
        {/* <TextInput text="District" id="district" name="district" /> */}
        <SelectInput
          options={["District", "Kottayam", "Kochi", "Kollam", "Malappuram"]}
          text="District"
          id="district"
        />
      </div>
      <div className="col-end-3 flex flex-row-reverse">
        <Button
          onClick={handleToggle}
          id="next_btn"
          icon={<FaAngleRight />}
          classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
        />
      </div>
    </div>,
  ];

  const formInputs2 = [
    <TextInput text="Email" id="email" name="email" wrapperClassNames="" />,
    <TextInput text="Password" id="password" name="password" type="password" />,
    <TextInput
      text="Confirm Password"
      id="cpassword"
      name="cpassword"
      type="password"
    />,
    <div className="col-end-3 flex flex-row justify-between">
      <Button
        id="back_btn"
        onClick={handleToggle}
        icon={<FaAngleLeft />}
        classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
      />
      <Button
        id="complete_btn"
        onClick={handleToggle}
        icon={<FaCheck />}
        classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
      />
    </div>,
  ];

  return (
    <div className="flex flex-row">
      <div className="basis-1/4 bg-primaryBlue h-screen">
        <MainHeading classNames="ml-[50px] my-[80px] text-white">
          Register
        </MainHeading>
        <div className="flex justify-start gap-4 items-center pl-[50px] pr-[10px]">
          <Button
            disabled={true}
            id="pi_btn"
            text={<h1 className="font-montserrat font-bold text-2xl">1</h1>}
            isCustom={true}
            classNames={`h-16 w-16 text-2xl flex justify-center items-center rounded-[100px] 
          ${
            !formState
              ? "text-white bg-primaryGrey"
              : "text-primaryBlue bg-white"
          }`}
          />
          <Button
            disabled={true}
            text="Personal Information"
            isCustom={true}
            classNames="font-montserrat font-bold text-xl text-white"
          ></Button>
        </div>

        <div className="flex justify-start gap-4 items-center pl-[50px] pr-[10px] mt-[30px]">
          <Button
            disabled={true}
            id="slc_btn"
            text={<h1 className="font-montserrat font-bold text-2xl">2</h1>}
            isCustom={true}
            classNames={`h-16 w-16 text-2xl flex justify-center items-center rounded-[100px] 
          ${
            formState
              ? "text-white bg-primaryGrey"
              : "text-primaryBlue bg-white"
          }`}
          />
          <Button
            disabled={true}
            text="Set Login Credentials"
            isCustom={true}
            classNames="font-montserrat font-bold text-xl text-white"
          ></Button>
        </div>
      </div>
      <div className="bg-white w-full h-screen flex flex-col gap-0 items-center">
        <MainHeading classNames=" mt-[80px] mb-[50px] text-primaryGrey">
          {formState ? "LOGIN CREDENTIALS" : "PERSONAL INFORMATION"}
        </MainHeading>
        <Card classNames="mx-[30px] mt-[10px] p-[30px] w-3/4">
          {formState ? (
            <Form formInputs={formInputs2} classNames="mt-10" />
          ) : (
            <Form formInputs={formInputs1} classNames="mt-10" />
          )}
        </Card>
      </div>
    </div>
  );
}

export default Register;

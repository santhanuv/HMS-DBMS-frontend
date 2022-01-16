import React from "react";
import TextInput from "../../components/TextInput";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";

const handleToggle = (setFormState) => (e) => {
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

function FormInput({ formState, setFormState }) {
  const formInputs1 = [
    <div className="grid grid-cols-2 gap-x-10">
      <TextInput text="First Name" id="fname" name="fname" />
      <TextInput text="Last Name" id="lname" name="lname" />
      <TextInput text="Date Of Birth" varient="date" id="dob" name="dob" />
      <TextInput text="Phone Number" id="phNum" name="phNum" />
      <Select
        options={["Gender", "Male", "Female", "Other"]}
        initVal={0}
        varient="form"
      />
      <TextInput text="Emergency Number" id="emnum" name="emnum" />
      <TextInput text="Address" id="addr" name="addr" />
      <div className="flex flex-row gap-x-10">
        <Select
          options={["State", "Kerala", "Tamil Nadu", "Karnataka"]}
          initVal={0}
          varient="form"
        />
        <Select
          options={["District", "Kottayam", "Kochi", "Kollam", "Malappuram"]}
          initVal={0}
          varient="form"
        />
      </div>
      <div className="col-end-3 flex flex-row-reverse">
        <Button
          onClick={handleToggle(setFormState)}
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
        onClick={handleToggle(setFormState)}
        icon={<FaAngleLeft />}
        classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
      />
      <Button
        id="complete_btn"
        onClick={handleToggle(setFormState)}
        icon={<FaCheck />}
        classNames="h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]"
      />
    </div>,
  ];

  return (
    <Card classNames="mx-[30px] mt-[10px] p-[30px] w-3/4">
      {formState ? (
        <Form formInputs={formInputs2} classNames="mt-10" />
      ) : (
        <Form formInputs={formInputs1} classNames="mt-10" />
      )}
    </Card>
  );
}

export default FormInput;

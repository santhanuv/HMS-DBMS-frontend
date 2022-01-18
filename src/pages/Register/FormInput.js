import React from "react";
import TextInput from "../../components/TextInput";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";
import { FaAngleRight, FaAngleLeft, FaCheck } from "react-icons/fa";
import { Children } from "react/cjs/react.production.min";

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

function FormInput({ formState, setFormState }) {
  const newFormProps1 = { className: "grid grid-cols-2 gap-x-10" };
  const Div = ({ children, className }) => (
    <div className={className}>{children}</div>
  );

  const newFormInput1 = [
    {
      Element: TextInput,
      name: "firstName",
      props: {
        text: "First Name",
        id: "first-name",
      },
    },
    {
      Element: TextInput,
      name: "lastName",
      props: {
        text: "Last Name",
        id: "last-name",
      },
    },
    {
      Element: TextInput,
      name: "dob",
      props: {
        text: "Date Of Birth",
        id: "date-of-birth",
        varient: "date",
        startYear: "1900",
        endYear: new Date().getFullYear(),
      },
    },
    {
      Element: TextInput,
      name: "phoneNum",
      props: {
        text: "Phone Number",
        id: "phone-number",
      },
    },
    {
      Element: Select,
      name: "gender",
      props: {
        options: ["Gender", "Male", "Female", "Other"],
        initVal: 0,
        varient: "form",
      },
    },
    {
      Element: TextInput,
      name: "emergencyNum",
      props: {
        text: "Emergency Number",
        id: "emergency-num",
      },
    },
    {
      Element: TextInput,
      name: "address",
      props: {
        text: "Address",
        id: "address",
      },
    },
    {
      Element: Div,
      props: { className: "flex flex-row gap-x-10" },
      children: [
        {
          Element: Select,
          name: "state",
          props: {
            options: ["State", "Kerala", "Tamil Nadu", "Karnataka"],
            initVal: 0,
            varient: "form",
          },
        },
        {
          Element: Select,
          name: "district",
          props: {
            options: ["District", "Kottayam", "Kochi", "Kollam", "Malappuram"],
            initVal: 0,
            varient: "form",
          },
        },
      ],
    },
    {
      Element: Div,
      props: { className: "col-end-3 flex flex-row-reverse" },
      children: [
        {
          isInForm: false,
          Element: Button,
          name: "nextBtn",
          props: {
            onClick: handleToggle(setFormState),
            id: "next_btn",
            icon: <FaAngleRight />,
            classNames:
              "h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]",
          },
        },
      ],
    },
  ];

  const newFormInput2 = [
    {
      Element: TextInput,
      name: "email",
      props: {
        text: "Email",
        id: "email",
        type: "email",
      },
    },
    {
      Element: TextInput,
      name: "password",
      props: {
        text: "Password",
        id: "password",
        type: "password",
      },
    },
    {
      Element: TextInput,
      name: "confirmPassword",
      props: {
        text: "Confirm Password",
        id: "confirm-password",
        type: "password",
      },
    },
    {
      Element: Div,
      props: { className: "col-end-3 flex flex-row justify-between" },
      children: [
        {
          isInForm: false,
          Element: Button,
          name: "backBtn",
          props: {
            id: "back_btn",
            onClick: handleToggle(setFormState),
            icon: <FaAngleLeft />,
            classNames:
              "h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]",
          },
        },
        {
          isInForm: false,
          Element: Button,
          name: "completeBtn",
          props: {
            id: "complete_btn",
            icon: <FaCheck />,
            classNames:
              "h-16 w-16 text-2xl flex justify-center items-center rounded-[100px]",
          },
        },
      ],
    },
  ];

  return (
    <Card classNames="mx-[30px] mt-[10px] p-[30px] w-3/4">
      {formState ? (
        <Form formInputs={newFormInput2} />
      ) : (
        <Form formInputs={newFormInput1} formProps={newFormProps1} />
      )}
    </Card>
  );
}

export default FormInput;

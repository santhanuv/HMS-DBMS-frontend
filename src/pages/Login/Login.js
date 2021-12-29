import React, { useState } from "react";
import MainHeading from "../../components/MainHeading";
import Selector from "../../components/Selector.Login";
import TextInput from "../../components/TextInput";
import Form from "../../components/Form";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Card from "../../components/Card";
import mainImage from "../../assets/images/mainImg.svg";

function Login() {
  const [patientSelected, setPatientSelected] = useState(true);
  const selectorBtnInfo = [
    { text: "Patient", id: "selector_btn_0" },
    { text: "Doctor", id: "selector_btn_1" },
  ];

  const formInputs = [
    <TextInput text="Email" id="id_email" name="email" />,
    <TextInput text="Password" id="id_password" name="password" />,
    <div className="flex flex-row justify-between">
      <CheckBox
        text="Remember Password"
        id="id_rempass"
        name="remPass"
        value="rememberPassword"
        wrapperClassNames="mb-10"
      />
      <Link to="/" wrapperClassNames="flex flex-row-reverse mb-10 font-medium">
        Forget?
      </Link>
    </div>,
    <Button classNames="rounded-[15px] h-20 w-full text-3xl" text="LOGIN" />,
    patientSelected ? (
      <Link
        to="/register"
        wrapperClassNames="flex flex-row-reverse mt-10 font-bold"
      >
        Register
      </Link>
    ) : null,
  ];

  const handleSlectorClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id !== `selector_btn_${patientSelected ? "0" : "1"}`)
      setPatientSelected(!patientSelected);
  };

  return (
    <>
      <div className="flex flex-column flex-wrap">
        <div className="bg-secondBlue text-white p-20 h-screen flex flex-col basis-1/2 flex-auto">
          <h1 className="font-montserrat font-bold text-7xl text-center text-primaryBlue">
            WELCOME TO
            <br />
            MEDICARE
          </h1>
          <p className="font-montserrat text-primaryGrey text-xl text-center mt-[30px]">
            We care about your health <br /> more than you
          </p>
          <img src={mainImage} />
        </div>
        <div className="bg-white h-screen px-24 pt-[50px] flex flex-col w-full basis-1/2 flex-auto">
          <MainHeading classNames="text-center m-[10px] text-primaryGrey">
            LOGIN
          </MainHeading>
          <Card classNames="px-[50px] py-[30px] mt-[50px]">
            <Selector
              selected={patientSelected}
              btnInfo={selectorBtnInfo}
              onClick={handleSlectorClick}
            />
            <Form formInputs={formInputs} classNames="mt-20" />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;

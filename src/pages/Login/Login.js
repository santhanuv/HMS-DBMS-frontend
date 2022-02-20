import React, { useState } from "react";
import MainHeading from "../../components/MainHeading";
import Selector from "../../components/Selector.Login";
import TextInput from "../../components/TextInput";
import LoginForm from "./LoginForm";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Card from "../../components/Card";
import mainImage from "../../assets/images/mainImg.svg";
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();
  const type = location?.state?.type;
  const [patientSelected, setPatientSelected] = useState(
    type && type === "staff" ? false : true
  );
  const selectorBtnInfo = [
    { text: "Patient", id: "selector_btn_0" },
    { text: "Staff", id: "selector_btn_1" },
  ];

  const handleSlectorClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id !== `selector_btn_${patientSelected ? "0" : "1"}`)
      setPatientSelected(!patientSelected);
  };

  return (
    <>
      <div className="flex justify-end flex-wrap relative w-full relative bg-secondBlue">
        <div
          className="w-1/2 flex flex-col items-center justify-center bg-secondBlue 
        absolute top-0 left-0 fixed h-screen gap-[15px]"
        >
          <h1 className=" font-montserrat font-bold text-7xl text-center text-primaryBlue">
            WELCOME TO
            <br />
            MEDICARE
          </h1>
          <p className="font-montserrat text-primaryGrey font-medium text-xl text-center">
            We challenge the limits of traditional
            <br />
            healthcare with innovative self-care solutions
          </p>
          <img src={mainImage} />
        </div>
        <div className="z-[1] w-1/2 bg-white px-[80px] py-[60px]">
          <MainHeading classNames="text-center text-primaryGrey">
            LOGIN
          </MainHeading>
          <Card classNames="p-[50px]">
            <Selector
              selected={patientSelected}
              btnInfo={selectorBtnInfo}
              onClick={handleSlectorClick}
            />
            <div className="">
              <LoginForm
                className="mt-[50px]"
                patientSelected={patientSelected}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import MainHeading from "../../components/MainHeading";
import ProgressBar from "../../components/ProgressBar";
import RegisterForm from "./RegisterForm";

function Register() {
  const [formState, setFormState] = useState(false);

  return (
    <div className="flex flex-row relative mb-[20px]">
      <div className="w-[350px] z-[1] bg-primaryBlue h-full fixed">
        <MainHeading classNames="ml-[50px] my-[80px] text-white">
          Register
        </MainHeading>
        <div className="relative">
          <ProgressBar
            classNames="absolute right-[35px]"
            textList={["Personal Information", "Login Information"]}
            completedTill={formState ? 1 : 0}
          />
        </div>
      </div>
      <div className="bg-white w-full h-fit flex flex-col gap-0 items-center ml-[300px]  mb-[20px]">
        <MainHeading classNames="mt-[80px] mb-[50px] text-primaryGrey">
          {formState ? "LOGIN CREDENTIALS" : "PERSONAL INFORMATION"}
        </MainHeading>
        <RegisterForm formState={formState} setFormState={setFormState} />
      </div>
    </div>
  );
}

export default Register;

import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainHeading from "../../components/MainHeading";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Form from "../../components/Form";

function AdminAddDoc() {
  const formInputs = [
    <TextInput text="First Name" id="fname" name="fname" />,
    <TextInput text="Last Name" id="lname" name="lname" />,
    <TextInput text="Phone Number" id="phNum" name="phNum" />,
    <TextInput text="Email" id="email" name="email" type="email" />,
    <Button
      text="ADD DOCTOR"
      classNames="text-2xl p-[30px] w-full rounded-[10px]"
    />,
  ];

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Add Doctor
      </MainHeading>

      <Card classNames="w-[800px] p-[50px] ">
        <form>
          <Form formInputs={formInputs} />
        </form>
      </Card>
    </Wrapper>
  );
}

export default AdminAddDoc;

import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainHeading from "../../components/MainHeading";
import TextField from "../../components/TextInput";
import Button from "../../components/Button";
import Card from "../../components/Card";
import useForm from "../../hooks/useForm";
import addDocSchema from "./addDocSchema";

const initValue = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
};

function AdminAddDoc() {
  const { register, onSubmit } = useForm(initValue, addDocSchema);

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Add Doctor
      </MainHeading>

      <Card classNames="w-[800px] p-[50px]">
        <form onSubmit={onSubmit} className=" flex flex-col gap-5">
          <TextField
            text="First Name"
            id="first-name"
            {...register("firstName")}
          />
          <TextField
            text="Last Name"
            id="last-name"
            {...register("lastName")}
          />
          <TextField
            text="Phone Number"
            id="phone-number"
            {...register("phoneNumber")}
          />
          <TextField text="Email" id="email" {...register("email")} />
          <Button
            text="ADD DOCTOR"
            classNames="text-2xl p-[30px] w-full rounded-[10px]"
          />
        </form>
      </Card>
    </Wrapper>
  );
}

export default AdminAddDoc;

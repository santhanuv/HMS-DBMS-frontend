import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import MainHeading from "../../components/MainHeading";
import TextField from "../../components/TextInput";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Card from "../../components/Card";
import useForm from "../../hooks/useForm";
import addDocSchema from "./addDocSchema";
import { getAllRoles } from "../../api/roles.api";
import useAuthAxios from "../../hooks/useAuthAxios";
import { getAllDepartments, inviteStaff } from "../../api/staff.api";

const initValue = {
  email: "",
  role: "",
  department: "",
  salary: "",
};

function AdminAddDoc() {
  const [staffRoles, setStaffRoles] = useState([]);
  const [dpts, setDpts] = useState([]);
  const axios = useAuthAxios();

  useEffect(() => {
    const fetch = async () => {
      const { response: roleRes, err: roleErr } = await getAllRoles(axios);
      const { response: dptRes, err: dptErr } = await getAllDepartments(axios);

      console.log(dptRes);

      if (roleRes) {
        setStaffRoles(roleRes?.data);
      } else {
        console.log(roleErr);
      }

      if (dptRes) setDpts(dptRes?.data);
      else console.log(dptErr);
    };

    fetch();
  }, []);

  const { register, onSubmit, resetForm } = useForm(initValue, addDocSchema);

  const handleStaffInvite = async (data) => {
    const { response, err } = await inviteStaff(axios, data);
    if (response) {
      resetForm();
      console.log(response);
    } else console.log(err);
  };

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Add Doctor
      </MainHeading>

      <Card classNames="w-[800px] p-[50px]">
        <form
          onSubmit={(e) => {
            onSubmit(e, handleStaffInvite);
          }}
          className=" flex flex-col gap-5"
        >
          {/* <TextField
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
          /> */}
          <TextField text="Email" id="email" {...register("email")} />
          <Select
            options={staffRoles}
            varient="form"
            {...register("role")}
            btnClassName={`h-[70px]`}
          />
          <Select
            options={dpts}
            varient="form"
            {...register("department")}
            btnClassName={`h-[70px]`}
          />
          <TextField text="Salary" id="salary" {...register("salary")} />
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

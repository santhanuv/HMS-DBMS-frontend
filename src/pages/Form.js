import React, { useState } from "react";
import DateFeild from "../components/TextInput/DateFeild";
import TextField from "../components/TextInput/TextField";
import { useForm, Controller } from "react-hook-form";

function Form() {
  const { control, handleSubmit } = useForm();
  const [value, setValue] = useState("");

  return (
    <div className="m-[50px]">
      <TextField
        name="firstName"
        id="first-name"
        text="First Name"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        isMultiLine={false}
      />
    </div>
  );
}

export default Form;

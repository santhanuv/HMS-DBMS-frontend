import React from "react";
import useForm from "../../hooks/useForm";
import loginSchema from "./loginSchema";
import TextField from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import Link from "../../components/Link";
import Button from "../../components/Button";

const initialFormState = {
  email: "",
  password: "",
  role: "",
};

function LoginForm({ className, patientSelected }) {
  const { register, onSubmit, formData } = useForm(
    initialFormState,
    loginSchema
  );

  return (
    <form
      className={`${className} flex flex-col gap-[30px]`}
      onSubmit={(e) => {
        formData.role = patientSelected ? "patient" : "staff";
        onSubmit(e);
      }}
    >
      <TextField text="Email" id="email" {...register("email")} />
      <TextField
        text="Password"
        id="password"
        type="password"
        {...register("password")}
      />
      <div className="flex flex-row justify-between">
        <CheckBox
          text="Remember Password"
          id="id_rempass"
          name="remPass"
          value="rememberPassword"
          wrapperClassNames="mb-10"
        />
        <Link to="/" wrapperClassNames="flex flex-row-reverse font-medium">
          Forget?
        </Link>
      </div>
      <Button classNames="rounded-[15px] h-20 w-full text-2xl" text="LOGIN" />
      {patientSelected ? (
        <Link
          to="/register"
          wrapperClassNames="flex flex-row-reverse font-bold"
        >
          Register
        </Link>
      ) : null}
    </form>
  );
}

export default LoginForm;

import React from "react";
import useForm from "../../hooks/useForm";
import loginSchema from "./loginSchema";
import TextField from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import Link from "../../components/Link";
import Button from "../../components/Button";
import { createSession } from "../../api/session.api";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const initialFormState = {
  email: "",
  password: "",
  role: "",
};

function LoginForm({ className, patientSelected }) {
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/user";

  const doAuth = async (data) => {
    const response = await createSession(data);
    if (response.data) {
      const authData = {
        accessToken: response?.data?.accessToken,
        roles: response?.data?.roles,
      };
      setAuth(authData);
      console.log("from");
      navigate(from, { replace: true });
      return true;
    } else {
      console.log(response.err);
      return false;
    }
  };

  const { register, onSubmit, formData } = useForm(
    initialFormState,
    loginSchema
  );

  return (
    <form
      className={`${className} flex flex-col gap-[30px]`}
      onSubmit={(e) => {
        formData.role = patientSelected ? "patient" : "staff";
        onSubmit(e, doAuth);
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

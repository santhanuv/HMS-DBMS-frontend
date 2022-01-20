import { useState, useEffect } from "react";

const validateFormData = async (schema, formData) => {
  try {
    await schema.validate(formData, { abortEarly: false });
    return {};
  } catch (err) {
    const currentErrors = {};
    err.inner.forEach(({ path, message }) => {
      currentErrors[path] = message;
    });
    return currentErrors;
  }
};

const validateFormDataSync = (schema, formData) => {
  try {
    schema.validateSync(formData, { abortEarly: false });
    return {};
  } catch (err) {
    const currentErrors = {};
    err.inner.forEach(({ path, message }) => {
      currentErrors[path] = message;
    });
    return currentErrors;
  }
};

const useForm = (initValue = {}, schema) => {
  const [formData, setFormData] = useState(initValue);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      const currentErrors = validateFormDataSync(schema, formData);
      setErrors(currentErrors);
    }

    // Comment below disable the missing dependency warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const onChange = async (e) => {
    const { name, value } = e.currentTarget ? e.currentTarget : e;
    setFormData((prev) => ({ ...prev, [name]: value ? value : "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errors = await validateFormData(schema, formData);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setFormData(initValue);
    }
  };

  const register = (name) => {
    initValue[name] = "";
    return { name, value: formData[name], onChange };
  };

  return { register, onSubmit, errors, formData, onChange };
};

export default useForm;

// import React from "react";
// import { useForm, Controller } from "react-hook-form";

// const createComponent = (
//   { Element, props, children, name, isInForm = true },
//   control,
//   index
// ) => {
//   if (!children) {
//     return isInForm ? (
//       <Controller
//         name={name}
//         key={`${name}_controller_${index}`}
//         control={control}
//         render={({ field }) => (
//           <Element key={`${name}_${index}`} {...field} {...props} />
//         )}
//       />
//     ) : (
//       <Element key={`${name}_${index}`} {...props} />
//     );
//   } else {
//     return (
//       <Element key={`container_${index}`} {...props}>
//         {children.map((child, index) => {
//           return createComponent(child, control, index);
//         })}
//       </Element>
//     );
//   }
// };

// function Form({
//   formInputs,
//   onSubmit = (data) => console.log(data),
//   formProps = { id: "form-id" },
// }) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       dob: "",
//     },
//   });

//   console.log(errors);

//   return (
//     <form {...formProps} onSubmit={handleSubmit(onSubmit)}>
//       {formInputs.map((formInput, index) => {
//         return createComponent(formInput, control, index);
//       })}
//     </form>
//   );
// }

// export default Form;

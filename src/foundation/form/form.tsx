import React, { FC } from "react"
import { IForm } from "./form.interface";
import { stylerAttributeAndClassSetup } from "../../shared/services/styler";
import mainStyles from '../../styles/styles.module.scss';
import { TextForm } from "../text/text-form";

interface Props {
  traits: IForm
}

export const Form: FC<Props> = ({ traits, children }) => {
  const MainStyles = mainStyles as { [key: string]: string }

  const { traitTextForm, name, onSubmit } = traits;

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    onSubmit(event);
  };

  if (traits.css) traits.css.internal = MainStyles['ut-position-relative']

  return (

    <form name={name} onSubmit={handleSubmit}>

      {children}

      <TextForm traits={traitTextForm} />

      {/* validation for children here? */}
      {/* is there a way we can automate error handling here too? */}

    </form>
  )
}

// This might be a good idea for making the form element dynamic
// https://blog.logrocket.com/forms-in-react-in-2020/
// function useFormFields<T>(initialValues: T) {
//   const [formFields, setFormFields] = React.useState<T>(initialValues);
//   const createChangeHandler = (key: keyof T) => (
//     e: React.ChangeEvent<HTMLInputElement>,
//   ) => {
//     const value = e.target.value;
//     setFormFields((prev: T) => ({ ...prev, [key]: value }));
//   };
//   return { formFields, createChangeHandler };
// }

// export function LoginForm() {
//   const { formFields, createChangeHandler } = useFormFields({
//     email: "",
//     password: "",
//   });
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./contactform.module.css";
import * as Yup from "yup";
import { string, number } from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    onAdd({
      name: e.target.elements.username.value,
      number: e.target.elements.number.velue,
      id: nanoid(),
    });
       console.log(e.currentTarget.elements)
  };
  const inputNameId = useId();
    const inputNumberId = useId();
    
   

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={{ username: "", number: "" }}
      onSubmit={(values, { resetForm }) => {
        onAdd({ id: nanoid(), name: values.username, number: values.number });
        resetForm();
      }}
    >
      <Form className={style.ContactForm}>
        <label className={style.labelForm} htmlFor={inputNameId}>
          Name
        </label>
        <Field
          className={style.textForm}
          type="text"
          name="username"
          placeholder="Username"
          id={inputNameId}
        />
        <ErrorMessage
          className={style.errorMass}
          name="username"
          component="span"
        />
        <label className={style.labelForm} htmlFor={inputNumberId}>
          Number
        </label>
        <Field
          className={style.textForm}
          type="text"
          name="number"
          placeholder="Number"
          id={inputNumberId}
        />
        <ErrorMessage
          className={style.errorMass}
          name="number"
          component="span"
        />
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

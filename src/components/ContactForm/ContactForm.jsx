import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./contactform.module.css";
import * as Yup from "yup";
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
  const idUsername = useId();
  const idNumber = useId();

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={{ username: "", number: "" }}
      onSubmit={(values, { resetForm }) => {
        onAdd({ id: idUsername, name: values.username, number: values.number });
        resetForm();
      }}
    >
      {() => (
        <Form className={style.ContactForm}>
          <label className={style.labelForm} htmlFor={idUsername}>
            Name
          </label>
          <Field
            className={style.textForm}
            type="text"
            name="username"
            placeholder="Имя"
            id={idUsername}
          />
          <ErrorMessage
            className={style.errorMass}
            name="username"
            component="span"
          />
          <label className={style.labelForm} htmlFor={idNumber}>
           Number
          </label>
          <Field
            className={style.textForm}
            type="text"
            name="number"
            placeholder="Номер"
            id={idNumber}
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
      )}
    </Formik>
  );
}

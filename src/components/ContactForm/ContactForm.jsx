import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./contactform.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ id, onAdd }) {
  const handlSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    onAdd({
      name: e.target.elements.username.velue,
      number: e.target.elements.number.velue,
      id: nanoid(),
    });
  };

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
        <label className={style.labelForm}htmlFor={id}>Name</label>
        <Field className={style.textForm}type="text" name="username" placeholder="Username" id={id} />
        <ErrorMessage className={style.errorMass}name="username" component="span" />
        <label className={style.labelForm}htmlFor={id}>Number</label>
        <Field className={style.textForm}type="text" name="number" placeholder="Number" id={id} />
        <ErrorMessage className={style.errorMass}name="number" component="span" />
        <button className={style.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

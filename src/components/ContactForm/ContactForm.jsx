import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be 50 characters or less')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be 50 characters or less')
      .required('Number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.box}>
          <div className={css.boxName}>
          <label className={css.boxLabel} htmlFor="name">Name</label>
          <Field className={css.boxInput} component='input' id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.boxName}>
          <label className={css.boxLabel} htmlFor="number">Number</label>
          <Field className={css.boxInput} component='input' id="number" name="number" type="text" />
          <ErrorMessage name="number" component="div" />
        </div>
          <button className={css.btn} type="submit">Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
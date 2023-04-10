import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/conatactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(addContact(values));
    resetForm();
  }

  const initialValues = {
    name: '',
    number: '',
  };

  // ValidationSchema
  const Schema = yup.object({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  return (
    <div>
      {/* Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name"></Field>
          </label>

          <label>
            Number
            <Field type="tel" name="number"></Field>
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}

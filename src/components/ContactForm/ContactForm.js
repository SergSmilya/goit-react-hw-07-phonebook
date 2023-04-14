import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import {
  useAddContactMutation,
  useGetcontactsQuery,
} from 'redux/Api/contactsApi';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const { data: contacts } = useGetcontactsQuery();
  const [addContact] = useAddContactMutation();

  async function handleAddContact(value) {
    try {
      await addContact(value);
      toast.success(`Contact ${value.name} added`, { autoClose: 2500 });
    } catch (error) {
      toast.error(error);
    }
  }

  function handleSubmit(values, { resetForm }) {
    const dataNameLowerCase = values.name.toLowerCase().trim();

    if (
      contacts.find(el => dataNameLowerCase === el.name.toLowerCase().trim())
    ) {
      toast.warning(`Contact with name ${dataNameLowerCase} was added`);
    } else {
      handleAddContact(values);
    }

    resetForm();
  }

  const initialValues = {
    name: '',
    phone_number: '',
  };

  // ValidationSchema
  const Schema = yup.object({
    name: yup.string().required(),
    phone_number: yup.number().required(),
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
            <Field type="tel" name="phone_number"></Field>
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}

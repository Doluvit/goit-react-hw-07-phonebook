import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Input,
  Label,
  Section,
  ErrorMsg,
  FormButton,
} from './contactForm.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/selectors.js';
import { addContacts } from 'helpers/operations.js';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(7).required(),
});

const inValues = {
  id: '',
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);

  const onSubmit = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      toast.error(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContacts(newContact));
    }
  };
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={inValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Container autoComplete="off">
          <Section>
            <Label htmlFor="name">Name:</Label>
            <Input
              name="name"
              type="text"
              id="name"
              maxLength={14}
              placeholder="Example: John Snow"
            />
            <ErrorMsg name="name" component="div" />
          </Section>

          <Section>
            <Label htmlFor="number">Number:</Label>
            <Input
              name="number"
              type="tel"
              id="number"
              pattern="^\d{3}-\d{3}-\d{4}$"
              placeholder="Example: 777-777-7777"
            />
            <ErrorMsg name="number" component="div" />
          </Section>
          <FormButton type="submit">Add contact</FormButton>
        </Container>
      </Formik>
    </>
  );
};

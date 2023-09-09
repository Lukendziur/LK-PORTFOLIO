// External
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Stack, TextField, Button } from '@mui/material';
import { DevTool } from '@hookform/devtools';

// Internal
import Titles from '../../components/Molecules/Titles/Titles';

// Styles

const Contact = () => {
  const form = useRef();

  const formHook = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const { register, handleSubmit, formState, control, reset, clearErrors } =
    formHook;
  const { errors } = formState;

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_s4odm4r',
        'template_obkzbof',
        form.current,
        '8D-bp5zmXKo-bP2Md'
      )
      .then(
        (result) => {
          console.log(result.text);
          reset();
          clearErrors();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Titles principalTitle={'contact.title'} />
      <form onSubmit={handleSubmit(sendEmail)} ref={form} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            id="outlined-error-helper-text"
            label="Name"
            type="text"
            multiline
            {...register('name', {
              required: 'Name is required',
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            id="outlined-error-helper-text"
            label="Email"
            type="email"
            multiline
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                message: 'Entered value does not match email format',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-error-helper-text"
            label="Subject"
            type="subject"
            multiline
            {...register('subject', {
              required: 'Subject is required',
            })}
            error={!!errors.subject}
            helperText={errors.subject?.message}
          />
          <TextField
            id="outlined-error-helper-text"
            label="Message"
            type="message"
            multiline
            {...register('message', {
              required: 'Message is required',
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />

          <Button type="submit" variant="contained">
            Enviar
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Contact;

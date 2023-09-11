// External
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BREAKPOINTS } from '../../../constants/constants';
// import { DevTool } from '@hookform/devtools';

const ContactForm = () => {
  const { t } = useTranslation('global');
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  const form = useRef();

  const formHook = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const { register, handleSubmit, formState, reset, clearErrors } = formHook;
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
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '100%',
        },
        width: isDesktop ? '75%' : '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      noValidate
      onSubmit={handleSubmit(sendEmail)}
      ref={form}
    >
      <TextField
        id="outlined-error-helper-text"
        label={t('contact.form-name')}
        type="text"
        multiline
        {...register('name', {
          required: t('contact.form-required', {
            fieldName: t('contact.form-name'),
          }),
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
          required: t('contact.form-required', { fieldName: 'Email' }),
          pattern: {
            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            message: t('contact.form-email-format'),
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        id="outlined-error-helper-text"
        label={t('contact.form-subject')}
        type="subject"
        multiline
        {...register('subject', {
          required: t('contact.form-required', {
            fieldName: t('contact.form-subject'),
          }),
        })}
        error={!!errors.subject}
        helperText={errors.subject?.message}
      />
      <TextField
        id="outlined-error-helper-text"
        label={t('contact.form-message')}
        type="message"
        multiline
        {...register('message', {
          required: t('contact.form-required', {
            fieldName: t('contact.form-message'),
          }),
        })}
        error={!!errors.message}
        helperText={errors.message?.message}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{ background: 'var(--gradient)', padding: '10px', width: '100%' }}
      >
        {t('contact.form-button')}
      </Button>

      {/* <DevTool control={control} /> */}
    </Box>
  );
};

export default ContactForm;

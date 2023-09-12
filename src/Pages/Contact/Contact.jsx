// External
import { useMediaQuery } from '@mui/material';

// Internal
import ContactForm from '../../components/Molecules/ContactForm/ContactForm';
import Titles from '../../components/Molecules/Titles/Titles';
import { BREAKPOINTS } from '../../constants/constants';
import Avatar from '/assets/callme-avatar.png';

// Styles
import styles from './Contact.module.scss';

const Contact = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  return (
    <main className={styles.bigMain}>
      <Titles
        initialTitle={'contact.initialTitle'}
        principalTitle={'contact.title'}
        description={'contact.description'}
        className={styles.contactTitle}
      />
      <section className={styles.contactMain}>
        <ContactForm />
        {!isMobile && <img src={Avatar} alt="Avatar" />}
      </section>
    </main>
  );
};

export default Contact;

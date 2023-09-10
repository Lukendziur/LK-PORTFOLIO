// External

// Internal
import ContactForm from '../../components/Molecules/ContactForm/ContactForm';
import Titles from '../../components/Molecules/Titles/Titles';

// Styles
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <>
      <Titles
        principalTitle={'contact.title'}
        description={'contact.description'}
        className={styles.contactTitle}
      />
      <main className={styles.contactMain}>
        <ContactForm />
      </main>
    </>
  );
};

export default Contact;

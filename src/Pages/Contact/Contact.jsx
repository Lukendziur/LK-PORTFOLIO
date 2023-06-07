// External

// Internal
// import { useEffect, useState } from 'react';
import Titles from '../../components/Molecules/Titles/Titles';
// import getCollection from '../../functions/get';
// Styles
// TODO: en contact hacer el formulario del envío de email: refs abajo
  // ? https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9
  // ? https://www.abstractapi.com/guides/react-send-email-from-your-app-without-a-backend
const Contact = () => {
//   const [data, setData] = useState({});

//   const resolveData = async () => {
//     const projects = await getCollection();

//     setData(projects);
//     return projects;
//   };

//   useEffect(() => {
//     resolveData();
//   }, []);

  return (
    <>
      <Titles
        principalTitle={'contact.title'}
        description={'contact.description'}
      />
      {/* <img src={data?.nutriAr?.images[0]?.tabletImg} /> */}
    </>
  );
};

export default Contact;

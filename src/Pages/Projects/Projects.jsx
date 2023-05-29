// External

// Internal
import desktopImg from './../../assets/dark-desktop-EN.png';

// Styles
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styles from './Projects.module.scss';
import Titles from '../../components/Molecules/Titles/Titles';
import { ROUTES } from '../../constants/constants';

const Projects = () => {
  // TODO: Las cards se ven horribles: mejorar espaciado, titulo a la izquierda, formato de las mismas (que sea una grilla sin separaciones)
  // TODO: empezar a recibir las props con la data, mockear datos para simular las llamadas a la api. (ver tema firebase)
  // TODO: en contact hacer el formulario del envío de email: refs abajo
  // ? https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9
  // ? https://www.abstractapi.com/guides/react-send-email-from-your-app-without-a-backend
  return (
    <main className={styles.mainContainer}>
      <Titles
        principalTitle={'project.title'}
        description={'project.description'}
      />
      <div className={styles.projectContainer}>
        <Card
          className={styles.card}
          sx={{
            borderRadius: '20px',
            width: '100%',
            maxWidth: '300px',
            boxShadow:
              '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={desktopImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portafolio
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small" href={`${ROUTES.PROJECT}/contador`}>
              Ir al detalle
            </Button>
          </CardActions>
        </Card>

        <Card
          className={styles.card}
          sx={{
            borderRadius: '20px',
            width: '100%',
            maxWidth: '300px',
            boxShadow:
              '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={desktopImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portafolio
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small" href={`${ROUTES.PROJECT}/portfolio`}>
              Ir al detalle
            </Button>
          </CardActions>
        </Card>

        <Card
          className={styles.card}
          sx={{
            borderRadius: '20px',
            width: '100%',
            maxWidth: '300px',
            boxShadow:
              '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={desktopImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portafolio
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">Ir al detalle</Button>
          </CardActions>
        </Card>

        <Card
          className={styles.card}
          sx={{
            borderRadius: '20px',
            width: '100%',
            maxWidth: '300px',
            boxShadow:
              '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={desktopImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portafolio
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">Ir al detalle</Button>
          </CardActions>
        </Card>

        <Card
          className={styles.card}
          sx={{
            borderRadius: '20px',
            width: '100%',
            maxWidth: '300px',
            boxShadow:
              '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={desktopImg}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Portafolio
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">Ir al detalle</Button>
          </CardActions>
        </Card>
      </div>
    </main>
  );
};

export default Projects;

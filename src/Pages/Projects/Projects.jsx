// External
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// Internal
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Titles from '../../components/Molecules/Titles/Titles';
import { ROUTES } from '../../constants/constants';
import useData from '../../hooks/useData';

// Styles
import styles from './Projects.module.scss';

const Projects = () => {
  const data = useData().data;
  const { t } = useTranslation('global');

  return (
    <main className={styles.mainContainer}>
      <Titles
        principalTitle={'project.title'}
        description={'project.description'}
        className={styles.projectsTitle}
      />
      <div className={styles.projectContainer}>
        {data?.map(
          (project) =>
            project.show && (
              <Card
                key={project.id}
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
                  image={project?.images?.map((img) => img?.desktopImg)}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="p"
                    color={'var(--secondaryExtraDark)'}
                    fontSize={12}
                  >
                    {project.stack}
                  </Typography>
                </CardContent>
                <CardActions className={styles.linkContainer}>
                  <Link
                    to={`${ROUTES.PROJECT}/${project.title}`}
                    state={{ id: project.id }}
                    className={styles.link}
                  >
                    {t('project.details-button')}
                  </Link>
                </CardActions>
              </Card>
            )
        )}
      </div>
    </main>
  );
};

export default Projects;

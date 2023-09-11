// External
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@emotion/react';

// Internal
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from '@mui/material';
import Titles from '../../components/Molecules/Titles/Titles';
import { ROUTES } from '../../constants/constants';
import useData from '../../hooks/useData';

// Styles
import styles from './Projects.module.scss';

const Projects = () => {
  const data = useData().data;
  const theme = useTheme();
  const { secondaryExtraDark, mode } = theme.palette;

  return (
    <main className={styles.mainContainer}>
      <Titles
        initialTitle={'project.initialTitle'}
        principalTitle={'project.title'}
        description={'project.description'}
        className={styles.projectsTitle}
      />

      <div className={styles.projectContainer}>
        {data?.length > 0 ? (
          data?.map(
            (project) =>
              project.show && (
                <Card
                  key={project.id}
                  className={styles.card}
                  sx={{
                    borderRadius: '20px',
                    width: '100%',
                    maxWidth: '550px',
                    boxShadow:
                      '0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)',
                  }}
                >
                  <Link
                    to={`${ROUTES.PROJECT}/${project.title}`}
                    state={{ id: project.id }}
                    className={styles.link}
                  >
                    <CardMedia
                      component="img"
                      alt={project.title}
                      height="140"
                      image={String(
                        project?.images?.map((img) => img?.desktopImg)
                      )}
                    />
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        paddingBottom: '0 !important',
                      }}
                    >
                      <div>
                        <Typography
                          fontSize={24}
                          variant="h3"
                          fontWeight={500}
                          color={
                            mode === 'dark'
                              ? 'var(--secondaryExtraLight)'
                              : secondaryExtraDark.main
                          }
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          component="p"
                          color={
                            mode === 'dark'
                              ? 'var(--secondaryExtraLight)'
                              : secondaryExtraDark.main
                          }
                          fontSize={12}
                        >
                          {project.stack}
                        </Typography>
                      </div>

                      <GitHubIcon
                        sx={{
                          alignSelf: 'flex-end',
                          fontSize: '1.8rem',
                          color:
                            mode === 'dark'
                              ? 'var(--secondaryExtraLight)'
                              : secondaryExtraDark.main,
                        }}
                      />
                    </CardContent>
                  </Link>
                </Card>
              )
          )
        ) : (
          <div className={styles.projectContainer}>
            <Skeleton width="100%" height={550} sx={{ maxWidth: '550px' }} />
            <Skeleton width="100%" height={550} sx={{ maxWidth: '550px' }} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;

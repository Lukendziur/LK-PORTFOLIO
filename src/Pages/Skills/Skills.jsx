// External
import { useTranslation } from 'react-i18next';

// Internal
import { Tooltip, Typography } from '@mui/material';
import Titles from '../../components/Molecules/Titles/Titles';

// Styles
import styles from './Skills.module.scss';

const Skills = () => {
  const { t } = useTranslation('global');

  return (
    <main className={styles.main}>
      <Titles
        principalTitle={'skills.title'}
        description={'skills.description'}
      />
      <section className={styles.skill1Section}>
        <div className={styles.subTitle}>
          <Typography
            fontWeight={600}
            fontSize={20}
            variant="h3"
            color="var(--secondaryDark)"
          >
            {t('skills.title_1')}
          </Typography>
        </div>
        <Tooltip title="Next.js">
          <img src="src\assets\next-svg.svg" alt="Next.js logo" />
        </Tooltip>
        <Tooltip title="TypeScript">
          <img src="src\assets\typescript-icon.svg" alt="TypeScript logo" />
        </Tooltip>
        <Tooltip title="JavaScript">
          <img src="src\assets\javascript-icon.svg" alt="JavaScript logo" />
        </Tooltip>

        <Tooltip title="Node Package Manager (NPM)">
          <img src="src\assets\npm-icon.svg" alt="NPM logo" />
        </Tooltip>
        <Tooltip title="React.js">
          <img src="src\assets\react-icon.svg" alt="React.js logo" />
        </Tooltip>
        <Tooltip title="Postman">
          <img src="src\assets\postman-icon.svg" alt="Postman logo" />
        </Tooltip>
        <Tooltip title="Github">
          <img src="src\assets\github.png" alt="Github logo" />
        </Tooltip>
        <Tooltip title="APIs">
          <img src="src\assets\api-icon.svg" alt="API logo" />
        </Tooltip>
        <Tooltip title="GIT">
          <img src="src\assets\git-iconn.svg" alt="GIT logo" />
        </Tooltip>
        <Tooltip title="JSON">
          <img src="src\assets\json-icon.svg" alt="JSON logo" />
        </Tooltip>
        <Tooltip title="Firebase">
          <img src="src\assets\firebase.svg" alt="Firebase logo" />
        </Tooltip>
        <Tooltip title="Vite">
          <img src="src\assets\vite-logo.svg" alt="Vite logo" />
        </Tooltip>
      </section>

      <section className={styles.skill1Section}>
        <div className={styles.subTitle}>
          <Typography
            fontWeight={600}
            fontSize={20}
            variant="h3"
            color="var(--secondaryDark)"
          >
            {t('skills.title_2')}
          </Typography>
        </div>

        <Tooltip title="Bootstrap">
          <img src="src\assets\bootstrap.png" alt="Bootstrap logo" />
        </Tooltip>
        <Tooltip title="Sass">
          <img src="src\assets\sass-2.png" alt="Sass logo" />
        </Tooltip>
        <Tooltip title="Material UI">
          <img src="src\assets\MUI-logo.png" alt="MUI logo" />
        </Tooltip>
        <Tooltip title="Storybook">
          <img src="src\assets\storybook-icon.svg" alt="Storybook logo" />
        </Tooltip>
        <Tooltip title="CSS">
          <img src="src\assets\css-icon.svg" alt="CSS logo" />
        </Tooltip>
        <Tooltip title="HTML">
          <img src="src\assets\html.png" alt="HTML logo" />
        </Tooltip>
      </section>

      <section className={styles.skill1Section}>
        <div className={styles.subTitle}>
          <Typography
            fontWeight={600}
            fontSize={20}
            variant="h3"
            color="var(--secondaryDark)"
          >
            {t('skills.title_3')}
          </Typography>
        </div>
        <div className={styles.skills}>
          <Tooltip title="Code Documentation">
            <img
              src="src\assets\code-documentation.svg"
              alt="Code Documentation"
            />
          </Tooltip>
          <Tooltip title="Responsive Design">
            <img src="src\assets\responsive-web.svg" alt="Responsive Design" />
          </Tooltip>
          <Tooltip title="Accessibility Design">
            <img
              src="src\assets\accessibility-web.svg"
              alt="Accessibility Web logo"
            />
          </Tooltip>
          <Tooltip title="Adaptative Design">
            <img src="src\assets\adaptative-web.svg" alt="Adaptative Design" />
          </Tooltip>
        </div>
      </section>

      <section className={styles.skill1Section}>
        <div className={styles.subTitle}>
          <Typography
            fontWeight={600}
            fontSize={20}
            variant="h3"
            color="var(--secondaryDark)"
          >
            {t('skills.title_4')}
          </Typography>
        </div>
        <div className={styles.skills}>
          <Tooltip title="Team Player">
            <img src="src\assets\team-player.svg" alt="Team Player" />
          </Tooltip>
          <Tooltip title="Feedback">
            <img src="src\assets\feedback.svg" alt="Feedback" />
          </Tooltip>
          <Tooltip title="Proactive">
            <img src="src\assets\proactive.svg" alt="Proactive" />
          </Tooltip>
          <Tooltip title="Listen to others">
            <img src="src\assets\listen.svg" alt="Listen" />
          </Tooltip>
        </div>
      </section>
    </main>
  );
};

export default Skills;

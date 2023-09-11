// External
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';

// Internal
import { Typography } from '@mui/material';
import Titles from '../../components/Molecules/Titles/Titles';
import { skillsArray } from './utils';

// Styles
import styles from './About.module.scss';

const About = () => {
  const { t } = useTranslation('global');
  const theme = useTheme();
  const { cardsBgDark, mode, cardsBgLight } = theme.palette;
  return (
    <main className={styles.main}>
      <Titles
        initialTitle={'about.initialTitle'}
        principalTitle={'about.title'}
        description={'about.description'}
        className={styles.aboutTitle}
      />
      <section className={styles.skillCardsContainer}>
        {skillsArray.map((skill, index) => (
          <article
            key={index}
            className={styles.skillCards}
            style={{
              backgroundColor:
                mode === 'dark' ? cardsBgDark.main : cardsBgLight.main,
            }}
          >
            <img
              src={`../../../public/assets/${skill.iconPath}`}
              alt={skill.alt}
            />

            <Typography>{t(skill.title)}</Typography>
          </article>
        ))}
      </section>
    </main>
  );
};

export default About;

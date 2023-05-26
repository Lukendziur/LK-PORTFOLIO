// External

// Internal
import ProjectDetails from '../../../components/Molecules/ProjectDetails/ProjectDetails';
import ResponsiveProjectDemo from '../../../components/Molecules/ResponsiveProjectDemo/ResponsiveProjectDemo';
import Titles from '../../../components/Molecules/Titles/Titles';

// Styles
import styles from './Project.module.scss';

const Project = () => {
  return (
    <main className={styles.main}>
      <Titles
        principalTitle={'project.title'}
        description={'project.description'}
      />

      <section className={styles.content}>
        <ProjectDetails />
        <ResponsiveProjectDemo />
      </section>
    </main>
  );
};

export default Project;

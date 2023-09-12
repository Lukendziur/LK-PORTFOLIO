// External
import { useLocation } from 'react-router-dom';

// Internal
import ProjectDetails from '../../../components/Molecules/ProjectDetails/ProjectDetails';
import ResponsiveProjectDemo from '../../../components/Molecules/ResponsiveProjectDemo/ResponsiveProjectDemo';
import Titles from '../../../components/Molecules/Titles/Titles';
import useData from '../../../hooks/useData';

// Styles
import styles from './Project.module.scss';

const Project = () => {
  const location = useLocation();
  const { filterByProject } = useData();
  const id = location?.state?.id | 0;
  console.log(id);
  const fields = filterByProject(id);

  return (
    <main className={styles.main}>
      <Titles principalTitle={fields?.title} />

      <section className={styles.content}>
        <ProjectDetails
          description={fields?.description}
          esDescription={fields?.esDescription}
          patterns={fields?.patterns}
          stack={fields?.stack}
          github={fields?.github}
          demoLink={fields?.demoLink}
        />
        <ResponsiveProjectDemo images={fields?.images} />
      </section>
    </main>
  );
};

export default Project;

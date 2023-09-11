// Internal
import PaperCards from '../../components/Molecules/PaperCards/PaperCards';
import Titles from '../../components/Molecules/Titles/Titles';
import Avatar from './../../assets/hello-avatar.png';

// Styles
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <Titles
          initialTitle={'home.job-title'}
          principalTitle={'home.name'}
          description={'home.resume'}
        />
        <div className={styles.visual}>
          <div className={styles.userBg}>
            <div className={styles.divsParent}>
              <div className={styles.div1}></div>
              <div className={styles.div2}></div>
              <div className={styles.div3}></div>
              <div className={styles.div4}></div>
              <div className={styles.div5}></div>
            </div>
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
      </section>
      <PaperCards />
    </>
  );
};

export default Home;

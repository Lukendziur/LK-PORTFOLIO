// Internal
import PaperCards from '../../components/Molecules/PaperCards/PaperCards';
import Titles from '../../components/Molecules/Titles/Titles';
import Avatar from './../../assets/avatar-new.png';

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
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
      </section>
      {/* <div className={styles.divsParent}>
      <div className={styles.div1}></div>
      <div className={styles.div2}></div>
      <div className={styles.div3}></div>
    </div> */}
      <PaperCards />
    </>
  );
};

export default Home;

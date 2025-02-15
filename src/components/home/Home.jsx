import styles from "./home.module.css";
import overlay from "../../../public/images/Layout.webp";
import HeroTitle from "./components/hero-title/HeroTitle";
import test from "../../../public/images/test.webp";
function Home() {
  return (
    <div className={styles.homeSection}>
      <div className={styles.heroContentWrapper}>
        <h1>Ahmed Taha</h1>
        <HeroTitle />
      </div>
      <div className={styles.upContainer}>
        <img src={test} />
        <img src={test} />
        <img src={test} />
        <img src={test} />
        <img src={test} />
      </div>
      <div className={styles.dowenContainer}>
        <img src={test} />
        <img src={test} />
        <img src={test} />
        <img src={test} />
        <img src={test} />
      </div>

      <img
        src="/images/hero-layout/Layout.webp"
        loading="lazy"
        sizes="100vw"
        srcset="
    /images/hero-layout/Layout-p-500.webp 500w, 
    /images/hero-layout/Layout-p-800.webp 800w, 
    /images/hero-layout/Layout-p-1080.webp 1080w, 
    /images/hero-layout/Layout-p-1600.webp 1600w, 
    /images/hero-layout/Layout-p-2000.webp 2000w, 
    /images/hero-layout/Layout-p-2600.webp 2600w, 
    /images/hero-layout/Layout-p-3200.webp 3200w, 
    /images/hero-layout/Layout.webp 6250w"
        alt="Background Image"
        className={styles.heroOverlay}
      />
    </div>
  );
}

export default Home;

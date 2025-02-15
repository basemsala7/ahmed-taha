import styles from "./hero-title.module.css";
import star from "../../../../../public/images/star-p-500.png";
function HeroTitle() {
  return (
    <div className={styles.heroTitleWrapper}>
      <div>
        <img src={star} alt="" className={styles.starIcon} />
        <span>ahmed taha</span>
      </div>
      <div>
        <span>graphic designer</span>
      </div>
    </div>
  );
}

export default HeroTitle;

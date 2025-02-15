import styles from "./title-component.module.css";
import star from "../../../public/images/star-white-p-500.png";
function TitleComponent({ children }) {
  return (
    <div className={styles.titleContainer}>
      {Array.from({ length: 6 }).map((element, index) => (
        <div key={index} className={styles.titleWrapper}>
          <h3>{children} </h3>
          <img src={star} alt="star" />
        </div>
      ))}
    </div>
  );
}

export default TitleComponent;

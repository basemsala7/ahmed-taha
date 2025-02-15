import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./horizontal-scrolling.module.css";
import test from "../../../public/images/test2.webp";
import test2 from "../../../public/images/test.webp";

const HorizontalScrolling = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className={styles.HorizontalContainer}>
      <div className={styles.styciyContainer}>
        <motion.div
          transition={{ ease: "easeOut", duration: 0.5 }}
          style={{ x }}
          className={styles.itemsContainer}
        >
          <img src={test} />
          <img src={test2} />
          <img src={test} />
          <img src={test2} />
          <img src={test} />
          <img src={test2} />
          <img src={test} />
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrolling;

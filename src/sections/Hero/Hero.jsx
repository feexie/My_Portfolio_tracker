import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";

function Hero() {
  return (
    <section id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Hero}
          src={heroImg}
          alt="Profile picture of Yusuf Yahaya "
        />
      </div>
    </section>
  );
}

export default Hero;

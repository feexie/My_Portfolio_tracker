import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={styles.colorModeContainer}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.Hero}
          src={heroImg}
          alt="Profile picture of Yusuf Yahaya "
        />
        <img
          className={styles.colorModeContainer}
          src={themeIcon}
          alt="Colour mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yusuf
          <br />
          Yahaya
        </h1>
      </div>
    </section>
  );
}

export default Hero;

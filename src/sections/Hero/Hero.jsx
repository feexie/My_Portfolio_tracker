import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import LinkedinIcon from "../../assets/linkedin-light.svg";
import CV from "../../assets/cv.pdf";

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
        <h2>frontend Developer</h2>
        <span>
          <a href="http://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="http://github.com/" target="_blank">
            <img src={githubIcon} alt="github icon" />
          </a>
          <a href="http://Linkedin.com/" target="_blank">
            <img src={LinkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
          with a passion for developing modern React web apps for commercial
          business.
        </p>
        <a href={CV} downlload>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;

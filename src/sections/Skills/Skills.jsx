import styles from "./SkillsStyles.module.css";

function Skills() {
    return (
        <section id="skills" className={styles.container}>
          <h1 className="sectionTitle">Skills</h1>
          <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            
            
export default Skills;

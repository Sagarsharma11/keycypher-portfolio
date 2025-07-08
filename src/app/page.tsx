import LandingSection from "./(Home)/landingSection/LandingSection";
import styles from "./style.module.css"

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <LandingSection />
      <LandingSection />
    </div>
  );
}

import LandingSection from "./(Home)/landingSection/LandingSection";
import Section2 from "./(Home)/Section2/Section2";
import Section3 from "./(Home)/Section3/Section3";
import Section4 from "./(Home)/Section4/Section4";
import Section5 from "./(Home)/Section5/Section5";
import Section6 from "./(Home)/Section6/Section6";
import styles from "./style.module.css"

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <LandingSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

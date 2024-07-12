import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}>
        <a href="/" rel="noopener noreferrer">
          Home
        </a>
        <a href="/values" rel="noopener noreferrer">
          Values
        </a>
        <a href="/skills" rel="noopener noreferrer">
          Skills
        </a>
        <a href="/experience" rel="noopener noreferrer">
          Experience
        </a>
        <a href="/education" rel="noopener noreferrer">
          Education
        </a>
      </div> */}

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/reading-woman.png"
          alt="Woman reading book avatar"
          width={300}
          height={300}
          priority
        />
        <h3 className={styles.intro}>
          Welcome to my site!
          <br />
          I&apos;m Rose, nice to meet you.
        </h3>
      </div>

      <div className={styles.grid}>
        <a href="/values" className={styles.card} rel="noopener noreferrer">
          <h2>
            Values <span>-&gt;</span>
          </h2>
          <p>What I value and look for in professional connections</p>
        </a>

        <a href="/skills" className={styles.card} rel="noopener noreferrer">
          <h2>
            Skills <span>-&gt;</span>
          </h2>
          <p>How I can bring value to you and your company</p>
        </a>

        <a href="/experience" className={styles.card} rel="noopener noreferrer">
          <h2>
            Experience <span>-&gt;</span>
          </h2>
          <p>Where I have worked so far, and why it was important</p>
        </a>

        <a href="/education" className={styles.card} rel="noopener noreferrer">
          <h2>
            Education <span>-&gt;</span>
          </h2>
          <p>Where and what I have learned so far</p>
        </a>
      </div>
    </main>
  );
}

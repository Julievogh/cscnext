import React from "react";
import VideoSection from "./components/VideoSection";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="imgs/logo.svg" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>POP-UP</li>
            <li>CATERING</li>
            <li>CONTACT</li>
            <li>ABOUT US</li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        <h1>Cozy Social Club</h1>
        <VideoSection src="video/hero-video.mp4" />
      </section>

      <section className={styles.headline}>
        <h2>Welcome to the club</h2>
        <div className={styles.welcome}>
          <img src="food/food3.png" alt="Welcome" />
          <div>
            <p className={styles["welcome-text"]}>
              Experience our pop-up food...
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p>
              <a href="#about-us">About Cozy Social Club...</a>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.popup}>
        <div>
          <h2 style={{ color: "blue" }}>Pop-up</h2>
          <h3>Experience our pop-up food</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button>Read More</button>
        </div>
        <img src="food/food1.png" alt="Pop-up" />
      </section>

      <section className={styles.quote}>
        <p>
          "Juan and Bob created the best experience at our yearly company party.
          Delicious food!" - <span>Joe from Juice Shop</span>
        </p>
      </section>

      <section className={styles.catering}>
        <img src="food/food2.png" alt="Catering" />
        <div>
          <h2>CATERING</h2>
          <h3>A fine-dining experience for your party</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <p>
            <a href="#contact">Contact us for more info...</a>
          </p>
        </div>
      </section>

      <section className={styles.about}>
        <h2>ABOUT US</h2>
        <img src="imgs/boys.png" alt="Owners" />
        <div className={styles.info}>
          <div>
            <h3 style={{ color: "blue" }}>Juan</h3>
            <h4>Juan is a cool dude from LA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
          <div>
            <h3 style={{ color: "blue" }}>Bob</h3>
            <h4>Bob is a cool dude from LA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
        <div className={styles.bottomLogo}>
          <img src="imgs/logo.svg" alt="logo" />
        </div>
      </section>

      <footer className="footer">
        <div>
          <img src="instagram-logo.png" alt="Instagram" />
          <img src="facebook-logo.png" alt="Facebook" />
        </div>
        <div>
          <p>© 2024 Cozy Social Club</p>
          <p>info@cozysocialclub.com</p>
        </div>
      </footer>
    </div>
  );
}

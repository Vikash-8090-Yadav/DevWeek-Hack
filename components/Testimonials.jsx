import React from "react";
import styles from "./testimonials.module.css";

const TestimonialsPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionHeading}>Testimonials</h2>
        <div className={styles.testimonialBoxes}>
          <div className={styles.testimonialBox}>
            <div className={styles.profileImage}>
              <img
                src="https://i.ibb.co/ZVQb5bh/f7d17517314fec6a5ebe4c358839ec31.jpg"
                alt="Profile 1"
              />
            </div>
            <h3>John Dope</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non consectetur diam. Fusce dapibus consequat ante, eu maximus
              nulla eleifend eget.
            </p>
            <button className={styles.readMoreButton}>Read more</button>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.profileImage}>
              <img
                src="https://i.ibb.co/59yrpqy/28cd5bc4700c9ee9e4cad1406613591b.jpg"
                alt="Profile 2"
              />
            </div>
            <h3>Jane Harry Smith</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non consectetur diam. Fusce dapibus consequat ante, eu maximus
              nulla eleifend eget.
            </p>
            <button className={styles.readMoreButton}>Read more</button>
          </div>
          <div className={styles.testimonialBox}>
            <div className={styles.profileImage}>
              <img
                src="https://i.ibb.co/LkbvsfC/original-841ce80323c479efe89c90358da6f792.jpg"
                alt="Profile 3"
              />
            </div>
            <h3>David Johnson Kiv</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              non consectetur diam. Fusce dapibus consequat ante, eu maximus
              nulla eleifend eget.
            </p>
            <button className={styles.readMoreButton}>Read more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

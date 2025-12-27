import styles from "./InsuranceFeatures.module.css";

export default function InsuranceFeatures() {
  return (
    <div className={styles.insurancePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1>Partner with LiveSure</h1>
        <p className={styles.tagline}>
          Transform insurance and healthcare delivery with AI-powered digital health solutions.
        </p>
      </section>

      {/* Why Partner */}
      <section className={styles.infoSection}>
        <h2>Why Partner With Us?</h2>
        <p>
          At <strong>LiveSure</strong>, we believe in simplifying healthcare by bridging patients,
          providers, and insurers on a single intelligent platform. For <strong>insurance and
          healthcare program partners</strong>, LiveSure offers unmatched advantages:
        </p>
        <ul className={styles.benefitsList}>
          <li>✔ Automated claims processing with verified health data</li>
          <li>✔ Seamless linking of medical events with policy coverage</li>
          <li>✔ Reduced fraud through AI-powered validation</li>
          <li>✔ Improved efficiency with faster claim settlements</li>
          <li>✔ Enhanced customer satisfaction through real-time updates</li>
        </ul>
      </section>

      {/* Ecosystem Section */}
      <section className={styles.partnerEcosystem}>
        <h2>Be Part of the Connected Healthcare Ecosystem</h2>
        <p>
          By partnering with LiveSure, insurers and healthcare programs gain access to an ecosystem
          that unifies <strong>patients, doctors, hospitals, ambulances, and public health systems</strong>.
          Together, we create smarter policies, faster services, and a healthier population.
        </p>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Ready to Collaborate?</h2>
        <p>
          Let’s work together to revolutionize healthcare insurance and empower millions of
          policyholders across India. Fill out the form below or reach us directly at{" "}
          <a href="mailto:partnerships@livesure.in">partnerships@livesure.in</a>.
        </p>
      </section>

      {/* Contact Form */}
      <section className={styles.formSection}>
        <h2>Send Us a Message</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+91-XXXX-XXXXXX" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <select id="subject" name="subject" required>
              <option value="">Select</option>
              <option value="Partnership">Partnership</option>
              <option value="Feedback">Feedback</option>
              <option value="Media">Media</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="5"
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="file">Optional File Upload</label>
            <input type="file" id="file" name="file" />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

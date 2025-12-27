import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>We’re here to help — whether you’re a partner, user, or just curious about LiveSure.</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className={styles.infoSection}>
        <div className={styles.infoBlock}>
          <h3>Our Location</h3>
          <p>91Springboard, T-Hub, Hyderabad, Telangana, India</p>
        </div>
        <div className={styles.infoBlock}>
          <h3>Customer Care</h3>
          <p>Phone: +91-XXXX-XXXXXX</p>
          <p>Email: <a href="mailto:support@livesure.in">support@livesure.in</a></p>
          <p>Emergency Email: <a href="mailto:emergency@livesure.in">emergency@livesure.in</a></p>
        </div>
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
            <textarea id="message" name="message" placeholder="Type your message here..." rows="5" required></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="file">Optional File Upload</label>
            <input type="file" id="file" name="file" />
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </section>

      {/* Call to Action for Partnerships */}
      <section className={`${styles.infoSection} ${styles.partnerSection}`}>
        <h2>Partner with Us</h2>
        <p>
          If you’re a <strong>hospital, ambulance provider, NGO, or government agency</strong>, we’d love to explore partnerships.
          Join us in building a faster, smarter, and more connected emergency healthcare ecosystem across India.
        </p>
        <p>For partnership opportunities, please select <strong>“Partnership”</strong> in the form above or reach out directly at <a href="mailto:partnerships@livesure.in">partnerships@livesure.in</a>.</p>
      </section>

      {/* Map Embed */}
      <section className={styles.mapSection}>
        <iframe
          title="LiveSure Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0181412893373!2d78.39165567404318!3d17.444771383282936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9392b33bc03f%3A0x75bc98a2dc4f626!2sT-Hub%2C%20IIIT-H%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1718802470875!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;

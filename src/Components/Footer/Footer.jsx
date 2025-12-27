import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logoSection}>
          <img src="/logo/logo2.png" alt="LifeSure Logo" className={styles.logo} />
          <p>Visit Help Center</p>
        </div>
      <div className={styles.footerTop}>

        <div className={styles.footerLinksGrid}>
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Plans</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Products</h4>
            <ul>
              <li><a href="/">Term Plans</a></li>
              <li><a href="/">Investment Plans</a></li>
              <li><a href="/">Health Insurance</a></li>
              <li><a href="/">Child Plans</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Resources</h4>
            <ul>
              <li><a href="/">Expert Tips</a></li>
              <li><a href="/">Guides</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Calculators</a></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@lifesure.com"><span className="alternateFont">support@lifesure.com</span></a></li>
              <li><a href="tel:+911234567890"><span className="alternateFont">+91 12345 67890</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialIcons}>
          <a href="/"><FaFacebookF /></a>
          <a href="/"><FaTwitter /></a>
          <a href="/"><FaYoutube /></a>
          <a href="/"><FaInstagram /></a>
          <a href="/"><FaLinkedinIn /></a>
        </div>

        <div className={styles.appBadges}>
          <img src="/download/playstore.jpg" alt="Download on Google Store" />
          <img src="/download/appstore.jpg" alt="Get it on App Play" />
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} LifeSure. All rights reserved.</p>
        <p>Made with ❤️ by YourTeamName</p>
      </div>
    </footer>
  );
};

export default Footer;

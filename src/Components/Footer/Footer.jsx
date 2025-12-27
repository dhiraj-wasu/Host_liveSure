import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logoSection}>
  <img src="public\test\Agenxlogo.jpg" alt="LiveSure Logo" className={styles.logo} />
  <p className={styles.byCompany}>A product by AgenxTech</p>
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
          {/* <div className={styles.linkColumn}>
            <h4>Products</h4>
            <ul>
              <li><a href="/">Term Plans</a></li>
              <li><a href="/">Investment Plans</a></li>
              <li><a href="/">Health Insurance</a></li>
              <li><a href="/">Child Plans</a></li>
            </ul>
          </div> */}
          <div className={styles.linkColumn}>
  <h4>Platform</h4>
  <ul>
    <li><a href="/features/patient">Patients & Families</a></li>
    <li><a href="/features/doctor">Hospitals & Doctors</a></li>
    <li><a href="/features/ambulance-providers">Ambulance Providers</a></li>
    <li><a href="/features/government-ngo">Government & NGOs</a></li>
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
              <li><a href="techagenx@gmail.com"><span className="alternateFont">techagenx@gmail.com</span></a></li>
              <li><a href="tel:+91 7620636113"><span className="alternateFont">+91 7620636113</span></a></li>
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

      {/* <div className={styles.copyright}>
        <p>© {new Date().getFullYear()} LifeSure. All rights reserved.</p>
        <p>Made with ❤️ by YourTeamName</p>
      </div> */}
      <div className={styles.copyright}>
  <p>
    © {new Date().getFullYear()} AgenxTech LLP. All rights reserved.
  </p>
  <p>
    LiveSure is an AI-powered emergency healthcare coordination platform
    developed and operated by AgenxTech.
  </p>
  </div>
    </footer>
  );
};

export default Footer;

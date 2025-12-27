import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ExpandMore } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import DownloadButton from "../Ui/DownloadButton/DownloadButton";

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const openCategories = () => setIsDropdownOpen(true)
  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  const isActive = (path) => location.pathname === path;

  const dropdownRef = useRef(null);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
         <div className={styles.logoContainer}>
          <span className={styles.logoText}>LiveSure </span>
          <span className={styles.byCompany}>A product by AgenxTech</span>
          </div>
        </Link>

        {/* Hamburger (only visible on small screens) */}
        <div className={styles.hamburger} onClick={toggleDrawer}>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li>
            <Link
              to="/"
              className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
            >
              Home
            </Link>
          </li>

          <li className={styles.dropdown} ref={dropdownRef}>
            <button
              className={`${styles.link} ${
                isDropdownOpen ? styles.active : ""
              }`}
              onMouseEnter={openCategories}
              onClick={toggleDropdown}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Features
              <ExpandMore
                className={`${styles.expandIcon} ${
                  isDropdownOpen ? styles.rotated : ""
                }`}
              />
            </button>
            <ul
              className={`${styles.dropdownMenu} ${
                isDropdownOpen ? styles.dropdownOpen : ""
              }`}
              role="menu"
            >
              <li className={styles.dropdownTitle}>See features for</li>
              <li>
                <Link to="/features/patient" role="menuitem">
                  Patients & Families
                </Link>
              </li>
              <li>
                <Link to="/features/doctor" role="menuitem">
                  Doctors & Hospitals
                </Link>
              </li>
              <li>
                <Link to="/features/ambulance-providers" role="menuitem">
                  Ambulance Providers
                </Link>
              </li>
              <li>
                <Link to="/features/insurance-providers" role="menuitem">
                  Insurance & Health Programs 
                </Link>
              </li>
              <li>
                <Link to="/features/government-ngo" role="menuitem">
                  Government / NGOs
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/about"
              className={`${styles.link} ${
                isActive("/about") ? styles.active : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${styles.link} ${
                isActive("/contact") ? styles.active : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
              <DownloadButton></DownloadButton>
          </li>
        </ul>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        classes={{ paper: styles.drawerPaper }}
      >
        <ul className={styles.drawerMenu}>
          <li>
            <Link to="/" onClick={toggleDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" onClick={toggleDrawer}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleDrawer}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleDrawer}>
              Contact Us
            </Link>
          </li>
          <li>
                          <DownloadButton onClick={toggleDrawer}></DownloadButton>

          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import styles from "./PopupForm.module.css";

const PopupForm = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFormData({ name: "", email: "", phone: "", password: "" });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const validate = () => {
  const newErrors = {};
  const phoneRegex = /^[6-9]\d{9}$/; // For Indian numbers starting with 6,7,8,9 (10 digits)

  if (isSignup && !formData.name.trim()) newErrors.name = "Full name is required.";
  
  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email.";
  }

  if (isSignup && !formData.phone.trim()) {
    newErrors.phone = "Phone number is required.";
  } else if (isSignup && !phoneRegex.test(formData.phone)) {
    newErrors.phone = "Enter a valid 10-digit phone number.";
  }

  if (!formData.password.trim()) newErrors.password = "Password is required.";
  
  return newErrors;
};


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Form submitted:", formData, "Mode:", isSignup ? "Signup" : "Login");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>

        <h2 className={styles.title}>{isSignup ? "Sign Up" : "Login"}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {isSignup && (
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={styles.input}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.name}</div>}
            </div>
          )}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.email}</div>}
          </div>

          {isSignup && (
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className={styles.input}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.phone}</div>}
            </div>
          )}

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div style={{ color: "red", fontSize: "0.8rem" }}>{errors.password}</div>}
          </div>

          <button type="submit" className={styles.submitBtn}>
            {isSignup ? "Create Account" : "Login"}
          </button>

          <p className={styles.toggleText}>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <span className={styles.toggleLink} onClick={toggleMode}>
              {isSignup ? "Login" : "Sign Up"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;

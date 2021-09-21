import React from "react";
import { Button } from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our weekly newsletter for special deals and prices
        </p>

        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline" onClick="none">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Mission and Vision</Link>
            <Link to="/">Brand Story</Link>
            <Link to="/">Careers</Link>

            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Forums</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Support</h2>
            <Link to="/">Member Center</Link>
            <Link to="/">Customer Service</Link>
            <Link to="/">Downloads</Link>
            <Link to="/">Warranty</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TechShop <i class="fas fa-robot" />
            </Link>
          </div>
          <small className="website-rights">
            {" "}
            © 2021 Made by Andrew Pascual
          </small>
          <div className="social-icons">
            <a
              class="social-icon-link linkedin"
              href="https://www.linkedin.com/in/andrewjpascual/"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin" />
            </a>
            <a
              class="social-icon-link github"
              href="https://github.com/andrewjpascual"
              target="_blank"
              aria-label="GitHub"
              rel="noreferrer"
            >
              <i class="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

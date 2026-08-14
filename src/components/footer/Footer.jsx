import Logo from "../../assets/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiFillPinterest } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-5">
          {/* Logo & About */}
          <div className="col-lg-3 col-md-6">
            <a href="/">
              <img
                src={Logo}
                alt="UFS Protects"
                className="footer_logo"
                height="80"
                width="93"
              />
            </a>

            <p className="footer_about">
              Category that involves giving financial or material support to
              various causes organizations. It allows not.
            </p>

            <div className="footer_social">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="Twitter">
                <FaXTwitter />
              </a>

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="Pinterest">
                <AiFillPinterest />
              </a>
            </div>
          </div>

          {/* Information */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="footer_title">Information</h5>

            <ul className="footer_links">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/certifications">Certifications</a>
              </li>

              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h5 className="footer_title">Information</h5>

            <ul className="footer_links">
              <li>
                <a href="/career">Career</a>
              </li>

              <li>
                <a href="/contact">Get In Touch</a>
              </li>

              <li>
                <a href="#">E-Catalogue</a>
              </li>

              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Reach Us */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer_title">Reach Us</h5>

            <div className="footer_info">
              <span className="footer_icon">
                <IoLocationOutline />
              </span>

              <p>
                PPE'S Unit 59/2/2, Site-IV,
                <br />
                Sahibabad Industrial Area,
                <br />
                Ghaziabad-201010 (U.P.)
                <br />
                Delhi NCR (INDIA)
              </p>
            </div>

            <div className="footer_info">
              <span className="footer_icon">
                <IoLocationOutline />
              </span>

              <p>
                UFS PROTECTS SAFETY TRADING LLC
                <br />
                7th Floor, Office (707)
                <br />
                City Avenue Building,
                <br />
                Next to Deira City Centre,
                <br />
                Port Saeed, Dubai
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-2 col-md-6">
            <div className="footer_info">
              <span className="footer_icon">
                <MdOutlineEmail />
              </span>

              <a href="mailto:info@ufsppe.com">info@ufsppe.com</a>
            </div>

            <div className="footer_info">
              <span className="footer_icon">
                <MdOutlineEmail />
              </span>

              <a href="mailto:salesint@ufsprotects.com">
                salesint@ufsprotects.com
              </a>
            </div>

            <div className="footer_info">
              <span className="footer_icon">
                <IoCallOutline />
              </span>

              <a href="tel:08928813489">08928813489</a>
            </div>

            <div className="footer_info">
              <span className="footer_icon">
                <IoCallOutline />
              </span>

              <a href="tel:+971503016744">+971 503016744</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer_bottom">
        <div className="container">
          <p>
            Copyright © 2026 | UFS Protects, Always Protecting | Designed by
            Digivend
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

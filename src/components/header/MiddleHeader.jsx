
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import BrandLogo from  '../../assets/images/logo.png'
import BrandLogoDark from  '../../assets/images/dark-logo.png'
const MiddleHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        
        <Link className="navbar-brand" path="index.php">
          <img
            src={BrandLogo}
            alt="Brand Name"
            className="light_logo"
          />
          <img
            src={BrandLogoDark}
            alt="Brand Name"
            className="dark_logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" path="">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="">
                About us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                onClick={handleShow}
              >
                Products
              </Link>
               <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Products</Offcanvas.Title>
                    <button
                    type="button"
                    onClick={handleClose}
                  ></button>
                  </Offcanvas.Header>
                  <div className="offcanvas-body">
                  <div className="menuWrap">
                    <ul className="canvaMenu">
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Harness &amp; Belts
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Lanyards
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Hooks &amp; Connectors
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Retractable Fall Arrest Blocks
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Rope Access &amp; Rescue
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Confined Space Equipments
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Temporary Lifeline System
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Fixed Line Systems
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Anchorage
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Walkways
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Handrail Protection
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Aluminium Skylight Protection System
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Protective Mask
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Coverall Suit
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Net &amp; Rope Ladder
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Rescue &amp; Evacuation System
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          UFS Safety Shoes
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Eye Protection
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Ear Protection
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Head Protection
                        </Link>
                      </li>
                      <li className="canvaMenuItem">
                        <Link className="canvaMenuLink" path="/">
                          Welding Protection
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                </Offcanvas>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="career.php">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="certifications.php">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="contact-us.php">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex header_search">
            <input
              className="form-control"
              type="text"
              placeholder="Search Product"
              aria-label="Search"
            />
            <i className="ri-search-line"></i>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default MiddleHeader;

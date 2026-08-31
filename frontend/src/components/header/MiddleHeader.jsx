import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/images/logo.png";
import BrandLogoDark from "../../assets/images/dark-logo.png";
const MiddleHeader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={BrandLogo} alt="Brand Name" className="light_logo" />
          <img src={BrandLogoDark} alt="Brand Name" className="dark_logo" />
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link">Products</Link>
              <section class="headerTwo_maga_menu">
                <div class="container">
                  <div class="headerTwo_destination_list">
                    <div class="menuLeftbar">
                      <ul>
                        <h4 class="country_title">Products</h4>

                        <div class="colTwo">
                          <li
                            class="countryMenu_tb_item hasData active"
                            data-action="no"
                          >
                            <a class="mega_mune_link" data-action="no">
                              Harness &amp; Belts
                            </a>
                            <div class="menuRightbar">
                              <div class="countryMenu_tb_panel">
                                <ul>
                                  <h4>UFS Nero series</h4>

                                  <div class="colTwo moreThanFive">
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-15
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-15
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-25
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-26
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-27
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-27A (QR)
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-28
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-29
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-30
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-52
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-55
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-101
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-102
                                      </a>
                                    </li>
                                  </div>
                                </ul>

                                <ul>
                                  <h4>UFS Elite series</h4>

                                  <div class="colTwo moreThanSeven moreThanFive">
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-115
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-116
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-125
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-126
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-127
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-160
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-160A
                                      </a>
                                    </li>
                                  </div>
                                </ul>

                                <ul>
                                  <h4>UFS Pro series</h4>

                                  <div class="colTwo moreThanSeven">
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-52M
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-125M
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-127M
                                      </a>
                                    </li>
                                  </div>
                                </ul>
                                <ul>
                                  <h4>UFS Max series</h4>

                                  <div class="colTwo moreThanSeven">
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-JH21
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-160A
                                      </a>
                                    </li>

                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        USP-505
                                      </a>
                                    </li>
                                  </div>
                                </ul>
                                <ul>
                                  <h4>Suspension Trauma</h4>

                                  <div class="colTwo moreThanSeven">
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        Suspension Trauma
                                      </a>
                                    </li>
                                  </div>
                                </ul>
                                <ul>
                                  <h4>UFS Prime</h4>

                                  <div class="colTwo moreThanSeven">
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        SURAKHSA-01
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        SURAKSHA-RT 02
                                      </a>
                                    </li>
                                    <li data-action="yes">
                                      <a
                                        class="mega_mune_link"
                                        data-action="yes"
                                      >
                                        SURAKHSA-02
                                      </a>
                                    </li>
                                  </div>
                                </ul>
                              </div>
                            </div>
                          </li>

                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Lanyards
                            </a>
                          </li>

                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Hooks &amp; Connectors
                            </a>
                          </li>

                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Retractable Fall Arrest Blocks
                            </a>
                          </li>

                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Rope Access &amp; Rescue
                            </a>
                          </li>

                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Confined Space Equipments
                            </a>
                          </li>

                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Temporary Lifeline System
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Fixed Line Systems
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Anchorage
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Walkways
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Aluminium Skylight Protection System
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Protective Mask
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Coverall Suit
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Net &amp; Rope Ladder
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Rescue &amp; Evacuation System
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              UFS Safety Shoes
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Eye Protection
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Ear Protection
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Head Protection
                            </a>
                          </li>
                          <li class="countryMenu_tb_item" data-action="no">
                            <a class="mega_mune_link" data-action="no">
                              Welding Protection
                            </a>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/career">
                Career
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/certifications">
                Certifications
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact-us">
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

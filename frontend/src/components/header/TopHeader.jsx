import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div>
      <div className="top_header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <ul className="social_list">
                        <li className="social_label">Follow Us On:</li>

                        <li>
                            <a href="#" aria-label="Facebook">
                               <FaFacebookF />
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="Twitter">
                                <FaXTwitter />
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="LinkedIn">
                               <FaLinkedinIn />
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />

                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div className="col-md-8">
                    <ul className="top_right_list">
                        <li><a href="#">Safety Alerts</a></li>
                        <li><a href="#">News and Events</a></li>
                        <li><a href="#">Media Center</a></li>
                        <li><a href="#">Customer Support</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TopHeader

import React from 'react'
import './topheader.css'
<<<<<<< HEAD
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

=======
>>>>>>> 63b09bfcd81024aa35b9025fda6757a1231f1793
const TopHeader = () => {
  return (
    <div>
      <div class="top_header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <ul class="social_list">
                        <li class="social_label">Follow Us On:</li>

                        <li>
                            <a href="#" aria-label="Facebook">
<<<<<<< HEAD
                               <FaFacebookF />
=======
                                <i class="ri-facebook-fill"></i>
>>>>>>> 63b09bfcd81024aa35b9025fda6757a1231f1793
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="Twitter">
<<<<<<< HEAD
                                <FaXTwitter />
=======
                                <i class="ri-twitter-x-fill"></i>
>>>>>>> 63b09bfcd81024aa35b9025fda6757a1231f1793
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="LinkedIn">
<<<<<<< HEAD
                               <FaLinkedinIn />
=======
                                <i class="ri-linkedin-fill"></i>
>>>>>>> 63b09bfcd81024aa35b9025fda6757a1231f1793
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="Instagram">
<<<<<<< HEAD
                                <FaInstagram />

=======
                                <i class="ri-instagram-line"></i>
>>>>>>> 63b09bfcd81024aa35b9025fda6757a1231f1793
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div class="col-md-8">
                    <ul class="top_right_list">
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

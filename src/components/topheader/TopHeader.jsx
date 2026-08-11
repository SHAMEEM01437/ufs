import React from 'react'
import './topheader.css'
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
                                <i class="ri-facebook-fill"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="Twitter">
                                <i class="ri-twitter-x-fill"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="LinkedIn">
                                <i class="ri-linkedin-fill"></i>
                            </a>
                        </li>

                        <li>
                            <a href="#" aria-label="Instagram">
                                <i class="ri-instagram-line"></i>
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

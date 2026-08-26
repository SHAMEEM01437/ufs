import React from "react";
import blog1 from "../../assets/images/blog/blog-1.webp";
import blog2 from "../../assets/images/blog/blog-2.webp";
import blog3 from "../../assets/images/blog/blog-3.webp";
import blog4 from "../../assets/images/blog/blog-4.webp";
import blog5 from "../../assets/images/blog/blog-5.webp";
const Blog = () => {
  return (
    <section className="blog_section section_paddingY">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-md-12">
            <div className="section_heading text-center">
              <span>Our latest News</span>
              <h2 className="section_title">News &amp; Events</h2>
            </div>
          </div>
        </div>

        {/* Blog Wrapper */}
        <div className="row">
          <div className="col-md-12">
            <div className="blog_wrapper">
              {/* Featured Blog */}
              <div className="blog_item featured_blog">
                <a href="#" className="blog_img">
                  <img
                    src={blog1}
                    alt="UFS Protects at Intersec Saudi Arabia"
                  />
                </a>

                <div className="blog_content">
                  <span className="blog_date">13 MAY 2026</span>

                  <h3>
                    <a href="#">
                      UFS Protects at Intersec Saudi Arabia, Riyadh
                    </a>
                  </h3>
                </div>
              </div>

              {/* Blog 2 */}
              <div className="blog_item">
                <a href="#" className="blog_thumb">
                  <img src={blog2} alt="Mobile Anchor Device Training" />
                </a>

                <div className="blog_info">
                  <span className="blog_tag">Fall Protection</span>

                  <h5>
                    <a href="#">Mobile Anchor Device Training</a>
                  </h5>
                </div>
              </div>

              {/* Blog 3 */}
              <div className="blog_item">
                <a href="#" className="blog_thumb">
                  <img
                    src={blog3}
                    alt="UFS Protects at Intersec Saudi Arabia"
                  />
                </a>

                <div className="blog_info">
                  <span className="blog_tag">Fall Protection</span>

                  <h5>
                    <a href="#">
                      UFS Protects at Intersec Saudi Arabia, Riyadh
                    </a>
                  </h5>
                </div>
              </div>

              {/* Blog 4 */}
              <div className="blog_item">
                <a href="#" className="blog_thumb">
                  <img src={blog4} alt="Rescue Training Program" />
                </a>

                <div className="blog_info">
                  <span className="blog_tag">Fall Protection</span>

                  <h5>
                    <a href="#">Rescue Training Program</a>
                  </h5>
                </div>
              </div>

              {/* Blog 5 */}
              <div className="blog_item">
                <a href="#" className="blog_thumb">
                  <img src={blog5} alt="Mobile Anchor Device Training" />
                </a>

                <div className="blog_info">
                  <span className="blog_tag">Fall Protection</span>

                  <h5>
                    <a href="#">Mobile Anchor Device Training</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import blogData from "../blog/blogData.js";

const Blog = () => {
  return (
    <section className="blog_section section_paddingY">
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-md-12">
            <div className="section_heading text-center">
              <span>Our latest News</span>
              <h2 className="section_title">News &amp; Events</h2>
            </div>
          </div>
        </div>

        {/* Blogs */}
        <div className="row">
          <div className="col-md-12">
            <div className="blog_wrapper">

              {blogData.map((blog) => (
                <div
                  className={`blog_item ${
                    blog.featured ? "featured_blog" : ""
                  }`}
                  key={blog.id}
                >
                  <Link
                    to={`/blog/${blog.id}`}
                    className={
                      blog.featured ? "blog_img" : "blog_thumb"
                    }
                  >
                    <img src={blog.image} alt={blog.title} />
                  </Link>

                  {blog.featured ? (
                    <div className="blog_content">
                      <span className="blog_date">
                        {blog.date}
                      </span>

                      <h3>
                        <Link to={`/blog/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h3>
                    </div>
                  ) : (
                    <div className="blog_info">
                      <span className="blog_tag">
                        {blog.category}
                      </span>

                      <h5>
                        <Link to={`/blog/${blog.id}`}>
                          {blog.title}
                        </Link>
                      </h5>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
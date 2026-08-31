import { Link } from "react-router-dom";
import { useState } from "react";
import { productCategories } from "./products-category-data";
const ProductCategory = () => {
const [showAll, setShowAll] = useState(false);
  
const items = showAll ? productCategories : productCategories.slice(0, 6)

  return (
    <section className="section_paddingY product_section">
      <div className="container-xxl px-md-4">
        <div className="row">
          <div className="col-md-12">
            <div className="section_heading text-center">
              <span>PRODUCT LINE</span>
              <h2 className="section_title">Top safety Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="product_category_wrapper">
              {items.map(function (item, idx) {
                return (
                  <div
                    key={idx}
                    className="product_category_item"
                    data-arts-os-animation-name="animatedJumpScale"
                  >
                    <Link to={item.slug}>
                      <img src={item.image} alt="Harness & Belts" />
                      <h3 className="category_title">{item.title}</h3>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row justify-content-center section_paddingT">
            <div className="col-md-4 text-center"><a onClick={() => setShowAll((prev) => !prev)} className="theme_button small">{showAll ? "Veiw Less" : "View More" }</a></div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;

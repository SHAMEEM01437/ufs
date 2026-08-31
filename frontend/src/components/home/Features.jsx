const features = [
  {
    icon: "ri-shield-check-line",
    title: "Certified Safety",
    description: "EN & ISO Standards",
  },
  {
    icon: "ri-settings-3-line",
    title: "Modern Manufacturing",
    description: "State-of-the-Art Facility",
  },
  {
    icon: "ri-earth-line",
    title: "Global Reach",
    description: "Exporting Worldwide",
  },
  {
    icon: "ri-user-settings-line",
    title: "Precision Engineering",
    description: "High Performance",
  },
  {
    icon: "ri-hand-heart-line",
    title: "Trusted Partner",
    description: "Industry Expertise",
  },
];

const Features = () => {
  return (
    <section className="feature_section">
      <div className="container">
        <div className="feature_wrapper">

          {features.map((feature) => (
            <div className="feature_item" key={feature.title}>
              
              <div className="feature_icon">
                <i className={feature.icon}></i>
              </div>

              <div className="feature_content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;
    import why1 from "../../assets/images/icons/why-1.png";
    import why2 from "../../assets/images/icons/why-2.png";
    import why3 from "../../assets/images/icons/why-3.png";
    import why4 from "../../assets/images/icons/why-4.png";
const WhyChooseUs = () => {

const whyChooseUs = [
  {
    id: 1,
    step: 1,
    title: "A+ Certified Products",
    description:
      "UFS takes pride in offering globally recognized, A+ certified fall protection products. These certifications ensure that our equipment meets the highest industry standards for safety and reliability.",
    icon: why1,
    buttonText: "Know More",
  },

  {
    id: 2,
    step: 2,
    title: "One Window Solution",
    description:
      "We offer complete safety solution, from consultation and product supply to installation and training. Our one-stop approach ensures your fall protection needs are met efficiently.",
    icon: why2,
    buttonText: "Know More",
  },

  {
    id: 3,
    step: 3,
    title: "In House Manufacturing",
    description:
      "UFS owns and operates state-of-the-art manufacturing units, ensuring full control over the production process. This in-house capability guarantees that every product meets stringent quality checks.",
    icon: why3,
    buttonText: "Know More",
  },

  {
    id: 4,
    step: 4,
    title: "Robust In-house R&D",
    description:
      "UFS offers state-of-the-art in-house R&D and manufacturing facilities, enabling complete control over innovation and production. This robust capability ensures that every product is designed and developed to meet the highest standards of quality.",
    icon: why4,
    buttonText: "Know More",
  },
];


  return (
    <section className="why_choose_section section_paddingY">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section_heading text-center">
                        <span>OUR PROPOSITION</span>
                        <h2 className="section_title">Why Choose UFS Protects</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="why_items">

                        {
                            whyChooseUs.map((whyItem, windx) => {
                                return(
                                    <div key={windx} className="why_item_card">
                                        <div className="why_item_body">

                                            <div className="why_icon">
                                                <span className="step">{whyItem.id}</span>
                                                <img src={whyItem.icon} alt={whyItem.title} />
                                            </div>

                                            <h3>{whyItem.title}</h3>

                                            <p>
                                                {whyItem.description}
                                            </p>

                                        </div>
                                        <div className="why_item_footer">
                                            <a href="#" className="theme_button small">
                                                {whyItem.buttonText}
                                            </a>
                                        </div>
                                </div>
                                )
                            })
                        }

                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
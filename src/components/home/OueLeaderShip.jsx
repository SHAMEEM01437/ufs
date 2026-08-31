import leadership_image from "../../assets/images/our-leader-ship.webp";

const leadershipData = [
  {
    id: "One",
    title: "Rescue Training Program",
    content:
      "UFS Protects successfully organized an intensive Rescue Training program, equipping professionals with essential skills to manage emergency situations effectively. The training covered key aspects of fall arrest, retrieval techniques, and the use of specialized rescue equipment to ensure swift and safe recoveries. Participants engaged in hands-on drills designed to simulate real-life scenarios, emphasizing the importance of preparedness and precision in critical moments.",
  },
  {
    id: "Two",
    title: "Mobile Anchor Device Training",
    content:
      "UFS Protects recently conducted a comprehensive training session on Mobile Anchor Devices. The session focused on the correct usage of mobile anchor devices, understanding anchorage points, and maintaining load limits to ensure maximum stability. Participants received hands-on experience and practical insights into securing safety in diverse environments, reinforcing the critical importance of fall protection measures.",
  },
  {
    id: "Three",
    title: "UFS Protects at Intersec Saudi Arabia, Riyadh",
    content:
      "UFS Protects India Pvt Ltd proudly participated in the Riyadh International Convention and Exhibition Center, showcasing our world-class fall protection solutions. It was an incredible opportunity to connect with industry leaders, engage in vital conversations about safety, and demonstrate our cutting-edge products live.",
  },
];

const OurLeadership = () => {
  return (
    <section className="our_leadership_section section_paddingY">

      <div className="our_leadership_image">
        <img
          src={leadership_image}
          alt="Our Leadership"
        />
      </div>

      <div className="container">

        <div className="row">

          <div className="col-md-6">

            <div className="section_heading text-left">

              <span>Our Leadership</span>

              <h2 className="section_title text-white pb-4">
                Our Leadership
              </h2>

              <p className="text-white">
                <strong>CEO’s Message:</strong> At UFS Protects,
                safety is more than a priority – it’s a passion.
                Every product we create reflects our commitment
                to protecting lives, and it’s our in-house team
                that brings this vision to life with dedication
                and innovation.
              </p>

            </div>

            <div
              className="accordion our_leadership_acc"
              id="accordionExample"
            >

              {leadershipData.map((item, index) => {

                const headingId = `heading${item.id}`;
                const collapseId = `collapse${item.id}`;

                return (
                  <div
                    className="accordion-item"
                    key={item.id}
                  >

                    <h2
                      className="accordion-header"
                      id={headingId}
                    >

                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={index === 0}
                        aria-controls={collapseId}
                      >
                        {item.title}
                      </button>

                    </h2>

                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      aria-labelledby={headingId}
                      data-bs-parent="#accordionExample"
                    >

                      <div className="accordion-body">

                        <p>{item.content}</p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurLeadership;
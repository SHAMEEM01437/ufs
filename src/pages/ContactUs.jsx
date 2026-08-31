import { useState } from "react";
import PageBanner from "../components/pagebanner/PageBanner";
import { Link } from "react-router-dom";
const ContactUs = () => {
  const contactItems = [
    {
      id: 1,
      icon: "ri-phone-line",
      label: "Phone",
      links: [
        {
          text: "+91-8130891082",
          href: "tel:918130891082",
        },
      ],
    },

    {
      id: 2,
      icon: "ri-smartphone-line",
      label: "Mobile Phone",
      links: [
        {
          text: "+91-9315022400",
          href: "tel:919315022400",
        },
      ],
    },

    {
      id: 3,
      icon: "ri-mail-line",
      label: "Email",
      links: [
        {
          text: "info@ufspppe.co.in",
          href: "mailto:info@ufspppe.co.in",
        },
        {
          text: "admin@ufsprotects.com",
          href: "mailto:admin@ufsprotects.com",
        },
      ],
    },

    {
      id: 4,
      icon: "ri-building-4-line",
      label: "Corporate Office",
      address: "F-03, 1st Floor, A-86, Sector 4, Noida - 201301, Uttar Pradesh",
    },
  ];
  const factoryLocations = [
    {
      id: 1,
      icon: "ri-building-4-line",
      city: "Alwar, Rajasthan",
      unit: "Fire Protection Equipment Unit",
      address: [
        "RIICO IA, A-7, Ghiloth,",
        "Mundawar, Behror,",
        "Alwar, Rajasthan 301701",
      ],
      mapLink: "#",
    },

    {
      id: 2,
      icon: "ri-building-line",
      city: "Ghaziabad, Uttar Pradesh",
      unit: "PFEFS Unit",
      address: [
        "579/2/2, Sahibabad Industrial Area,",
        "Site-IV, Ghaziabad,",
        "Uttar Pradesh 201010",
      ],
      mapLink: "#",
    },

    {
      id: 3,
      icon: "ri-community-line",
      city: "Noida, Uttar Pradesh",
      unit: "Fire Safety Unit",
      address: [
        "C-34, Sector-65,",
        "Gautam Buddha Nagar,",
        "Noida, Uttar Pradesh 201301",
      ],
      mapLink: "#",
    },

    {
      id: 4,
      icon: "ri-building-2-line",
      city: "Maharashtra",
      unit: "Regional Office",
      address: [
        "Suratwala Mark Plaza,",
        "B-617, Hinjawadi,",
        "Pune, Maharashtra 411057",
      ],
      mapLink: "#",
    },

    {
      id: 5,
      icon: "ri-home-office-line",
      city: "Nottinghamshire, UK",
      unit: "United Kingdom Office",
      address: [
        "Unit 5 Rassington Business Park,",
        "West Carr Road,",
        "Nottinghamshire, United Kingdom",
      ],
      mapLink: "#",
    },

    {
      id: 6,
      icon: "ri-government-line",
      city: "Port Saeed, Deira, Dubai",
      unit: "Corporate Office",
      address: [
        "7th Floor, Office 707,",
        "City Avenue Building,",
        "Port Saeed, Deira, Dubai",
      ],
      mapLink: "#",
    },
  ];

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  const nameHandle = (e) => {
    setName(e.target.value)
  }
  const emailHandle = (e) => {
    setEmail(e.target.value)
  }
  const phoneHandle = (e) => {
    if(e.target.value.length <= 10){
      setPhone(e.target.value)
    }else{
      console.log('Maximum ')
    }
  }
  const cityHandle = (e) => {
    setCity(e.target.value)
  }
  return (
    <div>
      <PageBanner pagetitle="Contact Us" />
      <section className="contact_section section_paddingY">
        <div className="container">
          <div className="row">
            <div className="section_heading text-center">
              <span>Contact Us</span>
              <h2 className="section_title">How can we help?</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 pe-md-5">
              <div className="contact_form">
                <div className="form_heading">
                  <i className="ri-send-plane-fill"></i>
                  <h4>Let's Connect – Fill Out the Form</h4>
                </div>

                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input type="text" onChange={nameHandle} value={name} placeholder="Your Name*" required />
                    </div>

                    <div className="col-md-6">
                      <input type="email" onChange={emailHandle} value={email} placeholder="Email*" required />
                    </div>

                    <div className="col-12">
                      <input
                        type="number"
                        onChange={phoneHandle}
                        value={phone}
                        placeholder="Your Mobile Number*"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input type="text" onChange={cityHandle} value={city} placeholder="Your City*" required />
                    </div>

                    <div className="col-12">
                      <button type="submit">SEND REQUEST</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-4 ps-md-5">
              <div className="contact_info">
                <div className="contact_info_title">
                  <h3>Get to know us</h3>
                </div>
                {contactItems.map((contactinfo, idx) => {
                  return (
                    <div key={idx} className="contact_item">
                      <div className="icon">
                        <i className={contactinfo.icon}></i>
                      </div>
                      <div className="content">
                        <span>{contactinfo.label}</span>
                        {contactinfo.links?.map((newLinks) => {
                          return (
                            <Link key={newLinks.href} to={newLinks.href}>
                              {newLinks.text}
                            </Link>
                          );
                        })}
                        {contactinfo.address && <p>{contactinfo.address}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fectory_location section_paddingY">
        <div className="container">
          <div className="row">
            <div className="section_heading text-center">
              <span>Reach out to us</span>
              <h2 className="section_title">Our Factory Locations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="fectory_location_grid">
                {factoryLocations.map((fectoryLocation, idx) => {
                  return (
                    <div key={idx} className="fectory_lacation_card">
                      <div className="location_icon">
                        <i className={fectoryLocation.icon}></i>
                      </div>

                      <div className="location_content">
                        <h4>{fectoryLocation.city}</h4>
                        <span>{fectoryLocation.unit}</span>

                        {fectoryLocation.address?.map((ad, indx) => {
                          return <p key={indx}>{ad}</p>;
                        })}

                        <Link
                          to={fectoryLocation.mapLink}
                          className="theme_button small seeMap"
                        >
                          See on Map
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

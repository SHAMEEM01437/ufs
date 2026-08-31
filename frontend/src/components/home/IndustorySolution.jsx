import IndustorySolutionImage from '../../assets/images/industry/image-3-2.png'
import manufacturingIcon from "../../assets/images/icons/Component-120.png";
import miningIcon from "../../assets/images/icons/Mask-group-1.png";
import energyIcon from "../../assets/images/icons/Component-119.png";

const IndustorySolution = () => {

const protectionIndustries = [
  {
    id: 1,
    title: "Manufacturing and Heavy Industry",
    description:
      "In manufacturing and heavy industries, UFS Protects offers tailored safety solutions designed to ensure worker protection, compliance, and operational efficiency.",
    icon: manufacturingIcon,
  },

  {
    id: 2,
    title: "Mining and Natural Resources",
    description:
      "Mining and resource extraction operations often involve hazardous environments. UFS Protects delivers robust fall protection systems designed for underground mines, open-pit sites, and elevated machinery, safeguarding workers in high-risk zones and promoting operational safety.",
    icon: miningIcon,
  },

  {
    id: 3,
    title: "Energy and Utilities",
    description:
      "UFS Protects provides specialized fall protection solutions for energy and utility sectors, ensuring worker safety during maintenance of power lines, wind turbines, and solar panel installations.",
    icon: energyIcon,
  },
];
  return (
    <section className="industry_solution section_paddingY">
        <div className="container">
            <div className="row align-items-end">
                <div className="col-md-6">
                    <div className="section_heading text-left">
                        <span>TAILORED INDUSTRY PROTECTION</span>
                        <h2 className="section_title">Industry Solutions</h2>
                    </div>
                    <div className="protection_wrap">
                        {
                            protectionIndustries.map((isItem, inx) =>{
                                return(
                                    <div key={inx} className="protection_item">
                                        <div className="protect_icon">
                                            <img src={isItem.icon} alt="" />
                                        </div>

                                        <div className="protect_content">
                                            <h3 className="industry_card_title">
                                                {isItem.title}
                                            </h3>

                                            <p className="industry_card_text">
                                                {isItem.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={IndustorySolutionImage} alt="" className="w-100" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default IndustorySolution
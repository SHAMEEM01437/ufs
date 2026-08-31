import { Link } from "react-router-dom"

const PageBanner = ({pagetitle}) => {
  return (
        <section className="about_inner_banner">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="about_banner_content">
                        <h1>{pagetitle}</h1>
                        <ul className="about_breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li>{pagetitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageBanner
const MiddleHeader = () => {
  return (
     <nav className="navbar navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="index.php">
                <img src="assets/images/logo.png" alt="Brand Name" className="light_logo" />
                <img src="assets/images/dark-logo.png" alt="Brand Name" className="dark_logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="index.php">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about-us.php">About us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#canvaMenuModal" data-bs-toggle="offcanvas"aria-controls="canvaMenuModal">
                            Products
                        </a>
                        <div className="offcanvas offcanvas-start dromDown_menuWrap" tabindex="-1" id="canvaMenuModal" aria-labelledby="offcanvasExampleLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Products</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <div className="menuWrap">
                                    <ul className="canvaMenu">
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Harness &amp; Belts</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Lanyards</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Hooks &amp; Connectors</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Retractable Fall Arrest Blocks</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Rope Access &amp; Rescue</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Confined Space Equipments</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Temporary Lifeline System</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Fixed Line Systems</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Anchorage</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Walkways</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Handrail Protection</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Aluminium Skylight Protection System</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Protective Mask</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Coverall Suit</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Net &amp; Rope Ladder</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Rescue &amp; Evacuation System</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">UFS Safety Shoes</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Eye Protection</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Ear Protection</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Head Protection</a></li>
                                        <li className="canvaMenuItem"><a className="canvaMenuLink" href="#">Welding Protection</a></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="career.php">Career</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="certifications.php">Certifications</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact-us.php">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex header_search">
                    <input className="form-control" type="text" placeholder="Search Product" aria-label="Search" />
                    <i className="ri-search-line"></i>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default MiddleHeader
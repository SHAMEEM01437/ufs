import Cta from "../components/cta/Cta";
import Blog from "../components/blog/Blog";
import HeroSlider from '../components/homeSlider/HeroSlider';
import ProductCategory from "../components/products/ProductCategory";
import Features from "../components/home/Features";
import IndustorySolution from "../components/home/IndustorySolution";
import TrainingConsulting from "../components/home/TrainingConsulting";
import Menufacturing from "../components/home/Menufacturing";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ServiceArea from "../components/home/ServiceArea";
import See_360 from "../components/home/See_360";
import OueLeaderShip from "../components/home/OueLeaderShip";
const Home = () => {
  return (
    <>
    <HeroSlider />
    <Features />
    <ProductCategory />
    <IndustorySolution />
    <TrainingConsulting />
    <Menufacturing />
    <WhyChooseUs />
    <See_360 />
    <ServiceArea />
    <OueLeaderShip />
    <Blog/>
    <Cta/>
    </>
  )
}

export default Home
import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Cta from "./components/cta/Cta";
import Blog from "./components/blog/Blog";

const App = () => {
  return (
    <div>
      <Header />
      <Blog/>
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
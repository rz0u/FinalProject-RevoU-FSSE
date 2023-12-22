// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
// import BestDeals from "../components/Route/BestDeals/BestDeals";
import Footer from "../components/Layout/Footer";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";

function HomePage() {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      {/* <BestDeals /> */}
      <Events />
      <FeaturedProduct />
      <Footer />
    </div>
  );
}

export default HomePage;

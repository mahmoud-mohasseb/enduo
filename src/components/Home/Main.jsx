import React, { useEffect } from "react";
import Header from "../Header/Main";
import Banner from "../Menhome/Banner";
import MenuList from "../Menhome/MenuList";
import Deliciousmenu from "../Menhome/Deliciousmenu";
// import PrivateSection from '../Menhome/PrivateSection'
import Review from "../Menhome/Review";
// import Blog from '../Menhome/Blog'
import Footer from "../Footer/footer";
import WhoWe from "../Menhome/WhoWe";
import { Helmet } from "react-helmet";

import Aos from "aos";

function Main() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div className="page_wrapper">
      <Helmet>
        <title>PATHFINDERENDURO</title>
        <meta
          name="description"
          content="PathfinderEnduro, we are passionate about helping you embark on exhilarating journeys, pushing your limits"
        />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Bogdan Popa" />
        <meta property="og:title" content="Reserve and Enjoy Enduro" />
        <meta
          property="og:description"
          content="PathfinderEnduro, we are passionate about helping you embark on exhilarating journeys, pushing your limits"
        />
        <meta
          property="og:image"
          content="https://www.facebook.com/photo/?fbid=1738748009809940&set=a.104676469883777"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/photo/?fbid=1738748009809940&set=a.104676469883777"
        />
        {/* <meta name="twitter:title" content="Home" />
        <meta
          name="twitter:description"
          content="This is a description of my page"
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Helmet>
      <Header />
      <Banner />
      <MenuList />
      <Deliciousmenu />
      <WhoWe />
      <Review />

      {/* <PrivateSection /> */}
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}

export default Main;

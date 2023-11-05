import React, { useEffect } from "react";
import Header from "../Header/Main";
import Footer from "../Footer/footer";
import GalleryBred from "../BredCrumb/GalleryBred";
import Gallery from "../MenGallery/Gallary";
import Aos from "aos";

function Main() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <div>
      <Header />
      <GalleryBred />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Main;

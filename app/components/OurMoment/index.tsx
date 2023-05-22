import React, { useMemo } from "react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import ImageItem from "./ImageItem";
import SectionTitle from "../SectionTitle";

export function OurMoment() {
  const renderMain = useMemo(() => {
    return (
      <>
        <section
          id="notes"
          className="flex flex-col items-center w-full pt-5 pb-20 px-7 lg:px-28 lg:pb-28"
        >
          <SectionTitle
            withTitleDesc
            title="Our Moment"
            titleDesc="A Glimpse of"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            laborum voluptatum animi rerum alias nulla architecto unde
            asperiores accusamus doloremque?"
          />
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="grid w-full grid-cols-3 gap-3 py-10 md:w-4/5 lg:w-3/4 md:px-10 lg:px-16"
          >
            <ImageItem src="/assets/img3.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img8.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img4.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img7.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img2.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img9.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img5.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img10.jpg" alt="Our Moment" />
            <ImageItem src="/assets/img6new.png" alt="Our Moment" />
          </LightGallery>
        </section>
      </>
    );
  }, []);

  return renderMain;
}

export default OurMoment;

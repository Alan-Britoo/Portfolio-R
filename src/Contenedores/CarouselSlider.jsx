import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProject from "./CardProject";
import EcZ from "../assets/ecomerceZapatos.png";
import ABB from "../assets/AirBnB.png";
import Temp from "../assets/Clima.png";
import Ges from "../assets/SistemaDGestion.png";
import Bit from "../assets/Bitacora.png";

function CarouselSlider() {
  // npm install react-slick slick-carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="flex w-[80%] gap-[5%] mx-auto  ">
      <div className="px-4">
        <CardProject
          foto={EcZ}
          titulo={"E-Commerce"}
          desc={
            "I have replicated a footwear e-commerce, with an intuitive and minimalist user interface to buy and sell, with detailed descriptions of the products and high-quality images, it has a 'functional' shopping cart to add or delete items"
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://ecomercezapatos.netlify.app"}
          url2={"https://github.com/Alan-Britoo/eCOMERS-ZAPATOS"}
        />
      </div>
      <div className="px-4">
        <CardProject
          foto={ABB}
          titulo={"AirBnb"}
          desc={
            'The accommodation booking platform offers a seamless and convenient way for users to discover, book, and manage accommodations for their travels. With a user-friendly interface and comprehensive search functionalities, users can explore a diverse range of listings including apartments, houses, villas, and more. The platform provides detailed property information, high-quality images, and user reviews to help users make informed decisions.  ".'
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://airbnbr.netlify.app"}
          url2={"https://github.com/Alan-Britoo/MPR-N3"}
        />
      </div>
      <div className="px-4">
        <CardProject
          foto={Bit}
          titulo={"Logs System"}
          desc={
            "Our project encompasses a comprehensive logging system designed to  track every action within the platform. From user creation, page edits, to role assignments,  ensuring a detailed record of all activities. Each log entry includes information about the user responsible for the action, along with timestamps indicating precisely when the event occurred logging system not only facilitates accountability but also provides valuable insights for auditing, troubleshooting, and enhancing platform security."
          }
          tec={"HTML , JavaScript, React, Tailwind, PHP, Laravel"}
          url={"https://sistemabitacora-rotsen.netlify.app"}
          url2={"https://github.com/Alan-Britoo/BitacoraBack"}
        />
      </div>
      <div className="px-4">
        <CardProject
          foto={Temp}
          titulo={"App-Temperature"}
          desc={
            "The weather forecasting website provides users with accurate and up-to-date weather information for locations worldwide. With intuitive design and user-friendly interface, users can easily access current weather conditions. Whether planning outdoor activities, traveling, or simply staying informed."
          }
          tec={"HTML , JavaScript, React, Tailwind"}
          url={"https://temprfce.netlify.app"}
          url2={"https://github.com/Alan-Britoo/MPR-N3"}
        />
      </div>
      <div className="px-4">
        <CardProject
          foto={Ges}
          titulo={"Invoicing System"}
          desc={
            "This project facilitates comprehensive management of all purchases made by a company. It enables users to add products, suppliers, and categories, allowing for efficient management of each component. Users can place product orders and view corresponding invoices, providing streamlined oversight of procurement processes."
          }
          tec={"HTML , JavaScript, React, Tailwind, PHP, Laravel"}
          url={"https://sistemafacturarotsen.netlify.app"}
          url2={"https://github.com/Alan-Britoo/PruebaFrontend"}
        />
      </div>
    </Slider>
  );
}

export default CarouselSlider;

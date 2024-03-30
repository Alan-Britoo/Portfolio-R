import React, { useState } from "react";
import Yo from "../assets/ElVijoRotsen.jpeg";
import Wp2 from "../assets/wp3.png";
import Gm from "../assets/gmail.svg";
import Link from "../assets/link.svg";

function Robot() {
  const [expanded, setExpanded] = useState(false);

  const toggleOptions = () => {
    setExpanded(!expanded);
  };

  const items = [
    {
      href: "https://www.linkedin.com/in/rotsenestefanel/",
      src: Link,
      alt: "LinkedIn",
    },
    {
      href: "https://wa.me/+573175200679",
      src: Wp2,
      alt: "WhatsApp",
    },
    {
      href: "mailto:rotcarrillo_8@hotmail.com",
      src: Gm,
      alt: "Email",
    },
  ];

  return (
    <div className="fixed bottom-14 right-9 z-10">
      {expanded && (
        <div className="mt-2 rounded-lg shadow-md p-1 flex flex-col gap-3 transition-all duration-1000 ">
          {items.map((item, index) => (
            <DelayedItem key={index} delay={index * 300}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-12 h-12 max-sm:w-[34px]  max-sm:h-[34px]"
                />
              </a>
            </DelayedItem>
          ))}
        </div>
      )}
      <div
        className={`w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse transform hover:scale-110 transition duration-1000 max-sm:w-[43px]  max-sm:h-[43px] ${
          expanded ? "rotate-180" : ""
        }`}
        onClick={toggleOptions}
      >
        <img
          src={Yo}
          alt="Robot"
          className="w-[50px] h-[50px] max-sm:w-[41px]  max-sm:h-[40px]  rounded-full transition"
        />
      </div>
    </div>
  );
}

const DelayedItem = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => setIsVisible(false);
  }, [delay]);

  return isVisible ? children : null;
};

export default Robot;

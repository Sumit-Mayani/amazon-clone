import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [isvisible, setIsvisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 900) {
      setIsvisible(true);
    } else {
      setIsvisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scoll-to-top">
      {isvisible && (
        <div onClick={scrollToTop} className="back-top-container">
          Back To Top
        </div>
      )}
    </div>
  );
};

export default BackToTop;

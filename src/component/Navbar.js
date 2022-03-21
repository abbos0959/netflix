import React, { useState, useEffect } from "react";
import "./Nav.css";

export const Navbar = () => {
  const [show, setHandleshow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 140) {
        setHandleshow(true);
      } else {
        setHandleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
      />
    </div>
  );
};

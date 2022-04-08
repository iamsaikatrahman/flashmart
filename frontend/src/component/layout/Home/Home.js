import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>Welcome to Flashmart</p>
        <h1>FIND AMAZING PRODUCT BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
    </>
  );
};

export default Home;

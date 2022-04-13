import React from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import Product from "./Product";

const product = {
  name: "Blue T-shirt",
  price: "$35",
  images: [
    {
      url: "https://images-platform.99static.com//jGLR033kyVvlBCc142SOdkwSTUI=/0x49:1067x1116/fit-in/500x500/99designs-contests-attachments/70/70288/attachment_70288156",
    },
  ],
  _id: "1",
};

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
      <h2 className="homeHeading">Feature Products</h2>
      <div id="container" className="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;

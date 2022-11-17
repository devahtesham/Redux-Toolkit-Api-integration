import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state);
  // console.log("selector", cart);
  return (
    <div className="container-fluid p-0">
      <div className="navbar bg-dark d-flex justify-content-between align-items-center text-white py-3 px-5">
        <div>
          <h1 className="logo">LOGO</h1>
        </div>
        <div className="w-25 d-flex align-items-center justify-content-around">
          <Link to="/" className="text-decoration-none text-white fs-6">
            Home
          </Link>
          <Link to="/cart" className="text-decoration-none text-white fs-6">
            Cart
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="me-4">cart items</h2>
          <h3 className="logo">{cart.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;

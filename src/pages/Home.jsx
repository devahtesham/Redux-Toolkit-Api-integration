import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/images/download.jpg";
import { add } from "../store/CartSlice";
import { fetchProducts } from "../store/ProductSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.products);
  const selector = useSelector((state) => state.cart);
  console.log("selector", selector);
  const cartHandler = (prod) => {
    dispatch(add(prod));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        {status === "loading" ? (
          <h1>Loading ...</h1>
        ) : (
          data.map((prod) => (
            <div className="col-lg-3 mb-4" key={prod.id}>
              <div className="prod-card ">
                <div className="mb-3">
                  <img src={prod.image} alt={prod.id} />
                </div>
                <div className="p-3">
                  <h4>{prod.category}</h4>
                  <p>{prod.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>{prod.price}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        cartHandler(prod);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

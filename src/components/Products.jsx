import React, { useEffect, useState } from "react";
import axios from "axios";

// import { FaRegStarHalfStroke } from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa6";
// import { FaStar } from "react-icons/fa6";

const API_URl = "https://fakestoreapi.com";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get(`${API_URl}/products`).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productItem = data?.map((pro) => (
    <div
      key={pro.id}
      className="border-2 border-[028DFD] rounded px-1 py-2 text-center bg-[#F0ECE4]"
    >
      <img
        src={pro.image}
        alt=""
        className="h-[60%] w-[65%] mx-auto"
      />
      <h3 className="text-center p-2 max-w-[80%] overflow-hidden text-nowrap mx-auto max-lg:p-1 max-md:p-[2px]">
        {pro.title}
      </h3>

      <h3 className="text-center max-md:p-[1px]">{pro.price} USD</h3>
      <button className="border-2 w-full rounded-lg p-2 mb-9 text-xs items-center justify-center bg-[#0B86FB] hover:bg-[#0B86FB] max-md:mb-1">
        Buy
      </button>
    </div>
  ));

  return (
    <div>
      <div className="grid grid-cols-5 gap-4 border-2 rounded mx-auto w-[80%] p-3 shadow bg-[#84741d] max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2">
        {productItem}
      </div>
    </div>
  );
};

export default Products;

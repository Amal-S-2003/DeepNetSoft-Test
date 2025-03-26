import React from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div
      className="text-white mt-[-35px] py-28 text-center  flex flex-col items-center justify-center  bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/firstbanner.png')",
        backgroundPosition: "top",
        backgroundSize: "140%",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative z-10 ">
        <h1
          className="text-6xl font-bold mb-5"
          style={{ textShadow: "3px 3px 0px #800020" }}
        >
          MENU
        </h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to <br /> place an order, use the "Order Online" button
          located below the menu.
        </p>

        <div className="btns">
          <button className="border-amber-600 hover:bg-amber-600 border-2 rounded-lg px-5 py-2 m-3" onClick={()=>navigate('/add-menu')}>Add Menu</button>
          <button className="border-amber-600 hover:bg-amber-600 border-2 rounded-lg px-5 py-2 m-3" onClick={()=>navigate('/add-item')}>Add Item</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

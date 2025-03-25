import React from "react";

function Banner() {
  return (
    <div
      className="text-white mt-[-35px] py-28 text-center  flex flex-col items-center justify-center  bg-cover bg-center"
      style={{
        backgroundImage: "url('/firstbanner.png')",
        backgroundPosition: "top",
        backgroundSize:"120%",
        opacity: 0.7      }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> */}
      <div className="relative z-10">
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
      </div>
    </div>
  );
}

export default Banner;

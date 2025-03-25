import React from "react";

function Buttons() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/btn-banner.png')] bg-contain bg-center bg-repeat opacity-10"></div>
      <div className="relative z-10 flex gap-5 p-5 justify-center">
        <button
          className="text-white font-medium capitalize px-5 py-3 border-blue-500 border-1 hover:bg-blue-500 "
          style={{ textShadow: "1px 1px 0px #800020" }}
        >
          FOOD
        </button>
        <button
          className="text-white font-medium capitalize px-5 py-3 border-blue-500 border-1 hover:bg-blue-500 "
          style={{ textShadow: "1px 1px 0px #800020" }}
        >
          Drinks
        </button>
        <button
          className="text-white font-medium capitalize px-5 py-3 border-blue-500 border-1 hover:bg-blue-500 "
          style={{ textShadow: "1px 1px 0px #800020" }}
        >
          Brunch
        </button>
      </div>
    </div>
  );
}

export default Buttons;

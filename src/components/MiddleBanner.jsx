import React, { useContext, useEffect, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { viewItems } from "../services/allAPIS";

function MiddleBanner() {
  const { selectedMenu } = useContext(MenuContext);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await viewItems(selectedMenu);
        console.log(response);

        if (response.status == 200) {
          setItems(response.data);
        }
      } catch (error) {
        console.error("Error fetching menus", error);
      }
    };

    fetchItems();
  }, [selectedMenu]);
  return (
    <>
      <div className=" relative p-5 md:p-32 bg-[url('./middleBanner.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black  opacity-80"></div>
        <div className=" left-0 absolute hidden md:flex flex-col h-[95%] py-10 inset-0  justify-between ">

        <img
          className="w-24  "
          src="./chicken.png"
          alt="chicken"
        />
        <img
          className="w-24 "
          src="./bottle.png"
          alt="bottle"
        />
        <img
          className="w-18 "
          src="./pizza.png"
          alt="pizza"
        />
        </div>
        <div className=" top-0 right-0 absolute hidden md:flex flex-col h-[95%] py-10   justify-between ">

        <img
          className="w-24"
          src="./fish.png"
          alt="fish"
        />
        <img
          className="w-24"
          src="./glass.png"
          alt="glass"
        />
        <img
          className="w-24"
          src="./cook.png"
          alt="cook"
        />
                </div>

        <div className="box  text-white relative border-2 border-white m-10  p-15">
          <img
            style={{ width: "190px", left: "-50px" }}
            className="absolute top-[-100px] md:top-[-150px] scale-50 md:scale-100  "
            src="./juice.png"
            alt=""
          />
          <img
            style={{ width: "190px", right: "0px" }}
            className="absolute scale-50 md:scale-100  bottom-[-100px] md:bottom-[-50px]"
            src="./juice2.png"
            alt=""
          />
          <div className="flex items-center justify-center my-6">
            <div
              className="w-16 h-[4px] mb-3 rounded-4xl"
              style={{ backgroundColor: "#857878" }}
            ></div>
            <h1
              className="text-4xl md:text-6xl text-white font-bold mb-5 mx-3  text-center"
              style={{ textShadow: "3px 3px 0px #800020" }}
            >
              {selectedMenu}
            </h1>
            <div
              className="w-16 h-[4px]  mb-3 rounded-4xl"
              style={{ backgroundColor: "#857878" }}
            ></div>
          </div>
          {items?.length > 0 ? (
            <div className="max-w-6xl w-full gap-y-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div key={index}>
                  <div className="flex text-xl md:text-2xl justify-between items-center font-bold">
                    <span className="">{item.name}</span>
                    <span className="flex-grow border-b-2 border-dotted border-gray-400  mx-2 mt-5"></span>

                    <span className="ml-4">{item.price}</span>
                  </div>
                  <p
                    className="text-xs md:text-sm text-gray-300 me-10"
                    style={{ fontSize: "18px" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>No items are availabe for this menu</div>
          )}
        </div>
      </div>
    </>
  );
}

export default MiddleBanner;

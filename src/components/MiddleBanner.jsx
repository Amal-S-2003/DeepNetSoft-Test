import React from "react";

function MiddleBanner() {
  const cocktails = [
    {
      name: "Cinnamon Toast Crunch",
      price: "$16",
      description:
        "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon",
    },
    {
      name: "Bar 42 Mary",
      price: "$14",
      description:
        "Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded",
    },
    {
      name: "Moet Spritz",
      price: "$20",
      description:
        "Aperol, St Germain, botanical liquor, fresh lime juice, mint brut Moet topper",
    },
  ];

  return (
    <>
      <div className=" relative p-32 bg-[url('./middleBanner.jpg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black  opacity-80"></div>
        <img
          className="w-24 absolute  opacity-20"
          style={{ left: "0px", top: "50" }}
          src="./chicken.png"
          alt="chicken"
        />
        <img
          className="w-24 absolute  opacity-20"
          style={{ left: "0px", top: "300px" }}
          src="./bottle.png"
          alt="bottle"
        />
        <img
          className="w-18 absolute  opacity-20"
          style={{ left: "0px", bottom: "50px" }}
          src="./pizza.png"
          alt="pizza"
        />
        <img
          className="w-24 absolute  opacity-20"
          style={{ right: "0px", top: "50px" }}
          src="./fish.png"
          alt="fish"
        />
        <img
          className="w-24 absolute  opacity-20"
          style={{ right: "0px", top: "300px" }}
          src="./glass.png"
          alt="glass"
        />
        <img
          className="w-24 absolute  opacity-20"
          style={{ right: "0px", bottom: "50px" }}
          src="./cook.png"
          alt="cook"
        />
        <div className="box  text-white relative border-2 border-white h-[416px] p-15">
          <img
            style={{ width: "190px", top: "-150px", left: "-50px" }}
            className="absolute "
            src="./juice.png"
            alt=""
          />
          <img
            style={{ width: "190px", bottom: "-50px", right: "0px" }}
            className="absolute "
            src="./juice2.png"
            alt=""
          />
          <div className="flex items-center justify-center my-6">
            <div className="w-16 h-[4px] mb-3 rounded-4xl" style={{backgroundColor:"#857878"}}></div>
            <h1
              className="text-6xl text-white font-bold mb-5 mx-3  text-center"
              style={{ textShadow: "3px 3px 0px #800020" }}
            >
              BRUNCH COCKTAILS
            </h1>
            <div className="w-16 h-[4px]  mb-3 rounded-4xl" style={{backgroundColor:"#857878"}}></div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {cocktails.map((drink, index) => (
              <div key={index}>
                <div
                  className="flex justify-between items-center font-bold"
                  style={{ fontSize: "26px" }}
                >
                  <span className="">{drink.name}</span>
                  <span className="flex-grow border-b-2 border-dotted border-gray-400  mx-2 mt-5"></span>

                  <span className="ml-4">{drink.price}</span>
                </div>
                <p
                  className="text-sm text-gray-300 me-10"
                  style={{ fontSize: "18px" }}
                >
                  {drink.description}
                </p>
              </div>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleBanner;

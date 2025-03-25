import React, { useContext, useEffect, useState } from "react";
import { viewMenus } from "../services/allAPIS";
import { MenuContext } from "../context/MenuContext";

function Buttons() {
  const [menus,setMenus]=useState([])
  const {setSelectedMenu}=useContext(MenuContext)
  useEffect(() => {
    
   const fetchMenus = async () => {
        try {
          const response = await viewMenus();
          console.log(response);
          
          if (response.status == 200) {
            setMenus(response.data);
          }
        } catch (error) {
          console.error("Error fetching menus", error);
        }
      };
  
      fetchMenus();
  }, []);
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/btn-banner.png')] bg-contain bg-center bg-repeat opacity-10"></div>
      <div className="relative z-10 flex gap-5 p-5 justify-center">
        {
          menus.map((menu,index)=>(

        <button
          className="text-white font-medium capitalize px-5 py-3 border-blue-500 border-1 hover:bg-blue-500 "
          style={{ textShadow: "1px 1px 0px #800020" }} key={index} onClick={()=>setSelectedMenu(menu.name)}
        >
          {menu.name}
        </button>
          ))
        }
      
      </div>
    </div>
  );
}

export default Buttons;

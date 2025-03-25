import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";

export const addMenu=async(reqBody)=>{
  return await commonAPI("POST", `${server_url}/add-menu`, reqBody, "");
}
export const viewMenus=async()=>{
  return await commonAPI("GET", `${server_url}/view-menus`, "", "");
}
export const addItem=async(reqBody)=>{
  return await commonAPI("POST", `${server_url}/add-item`, reqBody, "");
}
export const viewItems=async(selectedMenu)=>{
  return await commonAPI("GET", `${server_url}/view-items/${selectedMenu}`, "", "");
}

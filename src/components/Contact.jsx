import React from "react";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <>
     <div className="bg-black text-white py-10 flex flex-col items-center px-4">
      <div className="max-w-6xl w-full gap-y-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="border border-gray-600 rounded-lg p-6 text-center">
          <h3 className="text-blue-400 font-semibold mb-2">CONNECT WITH US</h3>
          <p className="text-gray-400 flex justify-center items-center gap-3">
            <GiRotaryPhone className="text-yellow-500 text-lg" />
            <span>+91 9567843340</span>
          </p>
          <p className="text-gray-400 flex justify-center items-center gap-3 mt-2">
            <MdOutlineEmail className="text-yellow-500 text-lg" />
            <span>info@deepnetsoft.com</span>
          </p>
        </div>

        <div className="border border-gray-600 rounded-lg p-6 text-center relative">
          <div className="flex justify-center">
            <img
              src="./dns-logo.png"
              className="bg-black"
              style={{ height: "76px", marginTop: "-65px" }}
              alt="dns-logo"
            />
          </div>
          <h2 className="text-xl font-bold mt-5">
            <span className="text-blue-400">DEEP</span>{" "}
            <span className="text-white">NET</span>{" "}
            <span className="text-gray-400">SOFT</span>
          </h2>

          <div className="flex justify-center text-sm space-x-4 mt-4 text-gray-400">
            <SlSocialFacebook className="cursor-pointer hover:text-blue-500" />
            <SlSocialTwitter className="cursor-pointer hover:text-blue-400" />
            <SlSocialYoutube className="cursor-pointer hover:text-red-500" />
            <SlSocialInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

        <div className="border border-gray-600 rounded-lg p-6 text-center">
          <h3 className="text-blue-400 font-semibold mb-2">FIND US</h3>
          <div className="text-gray-400 flex justify-center items-center gap-3">
            <LuMapPin className="text-yellow-500 text-lg" />
            <p>
              First floor, Geo Infopark,
              <br /> Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;

import React from "react";

function Footer() {
  return (
    <>
      <footer
        style={{ color: "#d9d9d9",height:"45px", background: "#000" }}
        className="flex flex-col md:flex-row  justify-between px-30 items-center opacity-90"
      >
        <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="flex gap-2">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

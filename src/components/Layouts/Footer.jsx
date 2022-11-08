import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer" style={{ backgroundColor: "#212529" }}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <img
              src="assets/images/footer.png"
              className="footer_logo"
              alt=""
            />

            <div>
              <p>
                Copyright © 2022 MarathonCash.Com Company All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

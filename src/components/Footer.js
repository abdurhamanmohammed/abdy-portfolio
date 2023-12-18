import React from "react";
import "./footerstyle.css";
import { FaCopyright, FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="fone">
        <div className="ftwo">
          <div className="fthree">
            <FaHome size={20} style={{ color: "#fff" }} />
            <h4>AdissAbeba,Ethiopia</h4>
          </div>
          <div className="fthree">
            <FaPhone size={20} style={{ color: "#fff" }} />
            <h4>+251-922460249</h4>
          </div>
          <div className="fthree">
            <FaMailBulk size={20} style={{ color: "#fff" }} />
            <h4>abdymoha93@gmail.com</h4>
          </div>
        </div>
        <div className="ffour">
          <h3>social</h3>
          <div className="fsix">
            <Link>
              <FaFacebook size={30} />
            </Link>
            <Link>
              {" "}
              <FaTelegram size={30}  />
            </Link>
            <Link>
              {" "}
              <FaLinkedin size={30}  />
            </Link>
          </div>
         
          <p><FaCopyright size={15}/>abdurhaman mohammed 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

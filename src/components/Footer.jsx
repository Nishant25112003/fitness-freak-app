import { useState } from "react";
import "../assets/styles/footer.css";
import instaIcon from "../assets/images/insta.png"; // Adjust the path as per your file structure
import twitterIcon from "../assets/images/twitter.png"; // Adjust the path as per your file structure
import facebookIcon from "../assets/images/facebook.png"; // Adjust the path as per your file structure
import tiktokIcon from "../assets/images/tiktok.png"; // Adjust the path as per your file structure
import copyRight from "../assets/images/copyright.png"; // Adjust the path as per your file structure

function Footer() {
    const year = new Date().getFullYear(); // Get the current year
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h1>SYPRO</h1>
          <p>
            Join us today and experience the transformative power of our fitness
            classes. Don't wait to start your fitness journey. Take the first
            step towards a healthier, stronger you. Let's sweat, have fun, and
            make fitness a way of life together!
          </p>
          <ul>
            <li>
              <a href="">
                <img src={instaIcon} alt="Instagram" />
              </a>
            </li>
            <li>
              {" "}
              <a href="">
                <img src={facebookIcon} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twitterIcon} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={tiktokIcon} alt="tiktok" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="copyright">
           <li><img src={copyRight} alt="copyright" /></li>
           <li> SPYRO {year}. All rights reserved </li>

        </ul>
      </footer>
    </>
  );
}
export default Footer;

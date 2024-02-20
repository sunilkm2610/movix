import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import * as PATHS from "../../constaints/path";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Embark on an immersive cinematic journey with our Movix, a
          comprehensive collection that seamlessly intertwines the worlds of
          movies and TV shows. From timeless classics to contemporary gems, our
          platform offers a kaleidoscope of entertainment, ensuring an
          unparalleled experience for every cinephile. Unleash the magic of
          storytelling in the comfort of your screen.
        </div>
        <div className="socialIcons">
          <a href={PATHS.facebook} target="_blank">
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a href={PATHS.instagram} target="_blank">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          <a href={PATHS.twitter} target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a href={PATHS.linkedin} target="_blank">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;

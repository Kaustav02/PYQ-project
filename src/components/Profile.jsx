import React from "react";
import github from "../assets/github2.png";
import instagram from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import "./Profile.css";
import { Link } from "react-router-dom";
import "../components/icons.css";

const Contact = () => {
  const kaustav = {
    name: "Kaustav Mondal",
    email: "kaustav.mondal2003@gmail.com",
    github: " https://github.com/Kaustav02",
    twitter: "",
    instagram : "https://www.instagram.com/__k_a_u_s_t_a_v___/",
  };

  const ankit = {
    name: "Ankit Patnaik",
    email: "ankit.patnaik2003@gmail.com",
    github: "https://github.com/patnaikankit",

    Twitter: "https://twitter.com/_Ankitpatnaik1_",

    instagram: "https://www.instagram.com/_ankitpatnaik1_/",
    linkedin: "https://www.linkedin.com/in/ankit-patnaik-102728230/",
  };
  return (
    <div>
      <div className="heading">Contact</div>
      <div className="container">
        <div className="box">
          <div className="details">
            <h1>{kaustav.name}</h1>
            <h4>{kaustav.email}</h4>
            <div className="icons">
            <Link to={kaustav.linkedin}>
                <img src={linkedin} alt="Linkedin" className="social_1" />
              </Link>
              <Link to={kaustav.instagram}>
                <img src={instagram} alt="Linkedin" className="social_1" />
              </Link>
              <Link to={kaustav.github}>
                <img src={github} alt="Linkedin" className="social_1" />
              </Link>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------------------------- */}

        <div className="box">
          <div className="details">
            <h1>{ankit.name}</h1>
            <h4>{ankit.email}</h4>
            <div className="icons">
              <Link to={ankit.linkedin}>
                <img src={linkedin} alt="Linkedin" className="social_1" />
              </Link>
              <Link to={ankit.instagram}>
                <img src={instagram} alt="Linkedin" className="social_1" />
              </Link>
              <Link to={ankit.github}>
                <img src={github} alt="Linkedin" className="social_1" />
              </Link>
              <Link to={ankit.Twitter}>
                <img src={twitter} alt="Linkedin" className="social_1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

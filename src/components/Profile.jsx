import React from "react";
import "./Profile.css";

const Contact = (props) => {
  const kaustav = {
    name: "Kaustav Mondal",
    email: "kaustav.mondal2003@gmail.com",
  };

  //

  const ankit = {
    name: "Ankit Patnaik",
    email: "xxxxxxxx.xxxxx@gmail.com",
  };
  return (
    <div>
      <div className="container">
        <div className="box">
          <h1>{kaustav.name}</h1>
          <h4>{kaustav.email}</h4>
        </div>


  {/* --------------------------------------------------------------------------------------------- */}
        
        
        
        <div className="box">
          <h1>{ankit.name}</h1>
          <h4>{ankit.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;

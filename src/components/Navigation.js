import React from "react";

function Navigation(props) {
  const smtmNavigation = () => {
    window.location.href = "https://smtmcapital.com.np/contact-us/";
  };
  return (
    <div className="App">
      <div className="navData">
        {props.data.map((item) => (
          <div className="navElements">{item.title}</div>
        ))}
      </div>
      <div className="navData">
        <button className="Button" onClick={smtmNavigation}>
          Contact Us
        </button>
      </div>
    </div>
  );
}
export default Navigation;

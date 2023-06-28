import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import BigLorem from "./BigLorem";
import Horizontal from "./Horizontal";
import "./carousel.css";
import Plane from "./Plane";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const smtmNavigation2 = () => {
    window.location.href = "https://smtmcapital.com.np/products/";
  };
  const smtmNavigation3 = () => {
    window.location.href = "https://smtmcapital.com.np/lets-talk-about-you/";
  };
  const office = [
    {name:"Smarika"},
    {name:"Ashish"},
    {name:"Ruman"},
    {name:"Himal"},
    {name:"Bisham"},
    {name:"Amrit"},
   ];
   
   const [slideDirection, setSlideDirection] = useState("");

   const handlePrevious = () => {
     setSlideDirection("slide-left");
   };
 
   const handleNext = () => {
     setSlideDirection("slide-right");
   };
 

  return (
    <div>
      <div className="middle">
        <div className="mid-left">
          <p id="para1">Travel to your dream destination</p>
          <p id="para2">
            {" "}
            Ad laborum duis eiusmod dolor quis qui aliqua eu in et esse irure
            veniam. Et deserunt nostrud ad dolore consequat aliquip. Pariatur
            Lorem do esse ad esse id amet tempor commodo in elit sit ea ut.
          </p>
          <button id="b2" onClick={smtmNavigation2}>
            Reserve Ticket
          </button>
        </div>
        <div className="mid-right">
          <img
            src="https://vietnam.travel/sites/default/files/styles/top_banner/public/2019-09/nature.jpg?itok=wWtFQZ9M"
            alt="Nature"
          ></img>
        </div>
      </div>
      <div className="middle2">
        <p id="para3">
          Create a memory <br></br>to remember
        </p>
        <p id="para4">
          Voluptate sunt incididunt excepteur exercitation exercitation
          exercitation ipsum velit tempor. Ea mollit do ex sit id. Labore ad
          dolore do culpa. Minim ea dolore ea tempor dolore Lorem do laborum
          labore ea officia ad.
        </p>
        <button id="b3" onClick={smtmNavigation3}>
          My Travel Logs
        </button>
      </div>
      <BigLorem />
      <Plane />
      <div className="main">
        <div className="leftDiv">
          <Horizontal />
          <Horizontal />
          <Horizontal />
          <Horizontal />
          <hr className="line"></hr>
        </div>
        <div className="rightDiv">
          <img src="tree3.jpg" alt="Tree" />
        </div>
      </div>

      <div className="carousel">
        <div className="carousel1">
          <p>
            Here's what they <br></br>have to say...
          </p>
        </div>

          
         <div className="bahira">
            <FontAwesomeIcon
              className="leftArrow"
              icon={faArrowLeft}
              style={{ color: "#0d0d0d" }}
              size="3x" onClick={handlePrevious}
              // disabled={setSlideIndex === 0}
            />
            <div className="carousel2">
            <div className={`wrapperCarousel ${slideDirection}`}>
              {office.map((item) =>(
                <Carousel data={item}/>
              ))}
            </div>
            </div>
            <FontAwesomeIcon
              className="rightArrow"
              icon={faArrowRight}
              style={{ color: "#0d0d0d" }}
              size="3x" onClick={handleNext}
              // disabled={setSlideIndex === 2}
            />
            </div>
          
        
      </div>
    </div>
  );
};
export default Home;

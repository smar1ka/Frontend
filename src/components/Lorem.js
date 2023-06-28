import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const Lorem = (props) => {
  let imageElement;
  console.log("props ko title ", props.data.title);
  if (props.data.title === "Lorem ipsum mountain") {
    imageElement = <img src="/tree1.jpeg" alt="tree1"></img>;
  } else if (props.data.title === "Lorem ipsum waterfall") {
    imageElement = <img src="/tree2.jpg" alt="tree2"></img>;
  } else {
    imageElement = <img class="tree3" src="/tree3.jpg" alt="tree3"></img>;
  }
  return (
    <div className="lorem1">
      {imageElement}
      <FontAwesomeIcon className="minusIcon" icon={faMinus} size="3x"/>
      {/* <img src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/4:3/pass/gettyimages-1146431497.jpg" alt="travel"></img> */}
      <div className="lorem2">{props.data.title} </div>
      <p>
        Eu et deserunt voluptate adipisicing excepteur minim ut exercitation
        incididunt qui. Labore ex commodo elit do pariatur consectetur veniam.
        Dolore nulla ad minim nisi amet ut.
      </p>
    </div>
  );
};
export default Lorem;

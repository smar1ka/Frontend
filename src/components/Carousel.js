import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Carousel = (props) => {
  console.log(props);
  
  return (
    <div className="user">
      <FontAwesomeIcon
        icon={faCircleUser}
        style={{ color: "black" }}
        size="4x"/>
      <p id="name">{props.data.name}</p>
      <p id="userParagraph">
        Nisi aute et Lorem aliqua ullamco et velit. Aute aliqua aliquip sit
        laborum laborum aliquip cupidatat excepteur consequat.
      </p>
    </div>
  );
};
export default Carousel;

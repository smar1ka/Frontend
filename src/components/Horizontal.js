import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./horizontal.css";
import { useState } from "react";

const Horizontal = () => {
  const [expanded, setExpanded] = useState(false);
  const [paddingBottom, setPaddingBottom] = useState("");
  const expand = () => {
    setPaddingBottom("60px");
    setExpanded(true);
  };
  const notExpand = () => {
    setPaddingBottom("10px");
    setExpanded(false);
  };
  return (
    <>
      <div className="horizontal">
        <hr className="line" />
      </div>
      <div className="plusIcon" style={{paddingBottom}}>
        <p>
          Occaecat officia velit magna aliquip elit quis enim amet anim
          culpa magna deserunt mollit.
        </p>
        {expanded ? (
        <div>
          <FontAwesomeIcon icon={faMinus} onClick={notExpand} />
        </div>
        ) : (
        <div>
          <FontAwesomeIcon icon={faPlus} onClick={expand}   />
        </div>
      )}
      </div>
    </>
  );
};
export default Horizontal;

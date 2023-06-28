import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
const Plane = () =>
{
    return(
        <div className="plane">
            <FontAwesomeIcon icon={faPlaneUp} style={{color: "#000000",}} size="3x" />
            <p>See places you've <br></br>yet to travel!</p>
        </div>
    )
}
export default Plane;
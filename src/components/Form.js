import { useState } from "react";
const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Description, setDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Description", Description);
  };

  return (
    <div className="form">
      <div className="form-left">
        <h1>Be updated!</h1> <br />
        <form onSubmit={submitHandler}>
          <label>
            <input
              type="text"
              placeholder="First Name*"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Last Name*"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email Subject*"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <textarea
              placeholder="Write something here..."
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <button id="email">Submit Email</button>
          </label>
        </form>
      </div>
      <div className="form-right">
        <img
          src="https://vietnam.travel/sites/default/files/styles/top_banner/public/2019-09/nature.jpg?itok=wWtFQZ9M"
          alt="lastPicture"
        ></img>
      </div>
    </div>
  );
};
export default Form;

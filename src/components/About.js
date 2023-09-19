import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent componentDidMount");

    // API call
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2> This is About componenet</h2>
        <UserClass name={"First"} location={"blr"} />
      </div>
    );
  }
}

export default About;

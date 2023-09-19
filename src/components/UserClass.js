import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name+ "constructor render")
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Dafault",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/karthikm94");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name+ "Child render")
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2> Name: {name}</h2>
        <h3> Location : {location} </h3>
        <h4> Contact : 8553182773</h4>
      </div>
    );
  }
}

export default UserClass;

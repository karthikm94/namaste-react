import { useState , useEffect } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  useEffect (() =>{
      fecthData();
  },[])
  return (
    <div className="user-card">
      <h1> Count: {count}</h1>
      <h2> Name: {name}</h2>
      <h3> Location : {location} </h3>
      <h4> Contact : 8553182773</h4>
    </div>
  );
};
export default User;

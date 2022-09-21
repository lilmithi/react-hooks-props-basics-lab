import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App(props) {
  props = user;
  return (
    <div>
      <NavBar />
      <Home name={props.name} city={props.city} color={props.color} />
      <About bio={props.bio} />
    </div>
  );
}

export default App;

import * as React from "react";
import Draggable from "react-draggable";

function Header(props) {
  return (
    <div>
    <Draggable><h1 className="my-name"  style={props.style}>Joshua Toney.</h1></Draggable>
      <p></p>
    </div>
  );
}

export default Header;

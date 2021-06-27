import React, { useState } from "react";
import Draggable from "react-draggable";
import Quest from "../components/quest";

function Header(props) {
  const [isDragged, setIsDragged] = useState(false);

  return (
    <div>
      <Draggable
        onMouseDown={() => {
          return setIsDragged(true);
        }}
      >
        <h1 className="my-name" style={props.style}>
          Joshua Toney.
        </h1>
      </Draggable>

      <Quest style={{ opacity: 0.5 }}></Quest>
    </div>
  );
}

export default Header;

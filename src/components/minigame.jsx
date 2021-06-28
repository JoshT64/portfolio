import React from "react";

function Minigame() {
  return (
    <div>
      <iframe
        className="absolute bottom-8"
        style={{ border: "none" }}
        src="https://d07riv.github.io/diabloweb/"
        width="90%"
        height="900"
      ></iframe>
      <span className="relative w-10 z-10">X</span>
    </div>
  );
}

export default Minigame;

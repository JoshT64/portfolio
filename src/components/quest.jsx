import React, { useState } from "react";
import Minigame from "./minigame";

function Quest(props) {
  const [isQuestClicked, setIsQuestClicked] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  function removeAnimation() {
    document.getElementById("quest").classList.remove("animate-bounce");
  }

  return (
    <>
      <div
        onClick={() => {
          setIsQuestClicked(true);
          removeAnimation();
        }}
      >
        <img //Quest Icon
          width="64"
          id="quest"
          className="quest-icon float-right mr-8 animate-bounce transition duration-75 hover:opacity-80"
          src="https://i.imgur.com/3hh3sBU.png"
        />
      </div>
      {isQuestClicked && (
        <div>
          <img
            className="quest-box select-none"
            src="https://i.imgur.com/aSnrz6L.png"
            width="520"
          />
          <img //Accept button
            onClick={() => {
              setIsAccepted(true);
              console.log("Youre gay");
            }}
            width="106"
            src="https://i.imgur.com/XDSXKLc.png"
            className="quest-button"
          />
          <img //Decline button
            onClick={() => {
              console.log("what the heck");
              setIsQuestClicked(false);
              setIsAccepted(false);
              document.getElementById("quest").classList.add("animate-bounce"); //Add back the bounce animation
            }}
            src="https://i.imgur.com/5lKrvEk.png"
            width="106"
            className="quest-button2"
          />
          {isAccepted ? <Minigame /> : null}
        </div>
      )}
    </>
  );
}

export default Quest;

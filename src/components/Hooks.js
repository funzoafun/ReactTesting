import React, { useState } from "react";

const Hooks = () => {
  const [isShownText, setIsShownText] = useState(false);

  const changeTextHandler = () => {
    setIsShownText((prevState) => !prevState);
  };

  return (
    <>
      {isShownText ? (
        <h2>This is the first text.</h2>
      ) : (
        <h2>This is my second text.</h2>
      )}

      <button type="button" onClick={changeTextHandler}>
        Change the text
      </button>
    </>
  );
};

export default Hooks;

import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "10px solid block",
        height: "75vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

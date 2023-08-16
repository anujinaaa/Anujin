import React from "react";

export default function Shadow(props) {
  console.log(props.show);
  return <div>{props.show ? <div className="shadow"></div> : null}</div>;
}

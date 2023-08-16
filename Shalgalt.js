import React  from "react";

export default function Modal(props) {
  const modalStyle = {
    transform: props.show ? "translateY(0)" : "translateY(-100vh)",
    opacity: props.show ? "1" : "0",
  };

  return (
    <div className="modal" style={modalStyle}>
      <div className="close" onClick={props.close}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <h1 style={{ textAlign: "center" }}>Lorem Ipsum</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    </div>
  );
}

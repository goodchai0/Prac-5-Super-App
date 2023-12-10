import { useState } from "react";
import Edit from "../../assets/edit.png";
import pen from "../../assets/pen.png";

const Notes = () => {
  const [text, setText] = useState(
    JSON.parse(window.localStorage.getItem("text"))
  );
  // console.log(text)
  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };
  return (
    <div
      style={{
        color: "white",
        background: "#F1C75B",
        height: "50vh",
        width: "20vw",
        position: "relative",
        borderRadius: "12px",
        padding: "3rem",
        margin:"0 2rem 2rem 2rem"
      }}
    >
      <p style={{ color: "black", fontSize: "2rem" }}>All notes</p>
      <textarea
        style={{
          width: "28vw",
          height: "55vh",
          margin: "auto",
          border: "none",
          background: "transparent",
          paddingTop:"2rem",
          outline: 0,
          fontSize:"1rem"
        }}
        value={text}
        onChange={(e) => handleChange(e)}
      />
      
    </div>
  );
};

export default Notes;

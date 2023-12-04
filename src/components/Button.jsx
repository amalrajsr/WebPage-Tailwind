import React from "react";

function Button({ type, children, }) {
  let buttonColor, textColor, outline, fontWeight;
  switch (type) {
    case "black":
      (buttonColor = "#19191C"),
        (textColor = "#ffff"),
        (outline = "1px solid #19191C"),
        (fontWeight = 500);
      break;
    case "orange":
      (buttonColor = "#FF5C00"),
        (textColor = "#ffff"),
        (outline = "1px solid #FF5C00");
      break;
    case "white":
      (buttonColor = "#ffff"),
        (textColor = "#19191C"),
        (outline = " 1px solid #19191C");
    default:
      (buttonColor = "#ffff"),
        (textColor = "#FF5C00"),
        (outline = "1px solid #FF5C00");
  }

  const buttonStyle = {
    backgroundColor: buttonColor,
    padding: "7px 18px",
    borderRadius: "20px",
    color: textColor, // Set text color to white
    cursor: "pointer",
    border: "1px",
    outline: outline,
    fontWeight: fontWeight ?? 600,
  };

  return <button style={buttonStyle}>{children}</button>;
}

export default Button;

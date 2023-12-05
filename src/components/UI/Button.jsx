import React from "react";

function Button({ type, children, styles}) {
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
     (buttonColor = "#f8f9fd"),
        (textColor = "#19191C"), 
        (outline = " 1px solid #19191C")
        break;
    default:
      (buttonColor = "#ffff"),
        (textColor = "#FF5C00"),
        (outline = "1px solid #FF5C00");
  }

  const buttonStyle = {
    backgroundColor: buttonColor,
    padding: "10px 24px",
    borderRadius: "20px",
    color: textColor, 
    cursor: "pointer",
    border: "1px",
    outline: outline,
    fontWeight: fontWeight ?? 600,
  };

  return <button className={styles} style={buttonStyle}>{children}</button>;
}

export default Button;

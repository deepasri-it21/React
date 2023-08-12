import React from "react";
function Heading() {
  const date = new Date();
  const currenttime = date.getHours();
  const customStyle = {
    color: ""
  };
  let greeting;
  if (currenttime < 12) {
    greeting = "Good Morning";
    customStyle.color = "green";
  } else if (currenttime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "red";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}
export default Heading;

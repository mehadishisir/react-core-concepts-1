import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Name />
      <Welcome />
      <Student tech="java" />
      <Student tech="javascript" />
      <Student tech="python" />
      <Developer name="asley" age="22" tech="FED" />
      <Developer name="gosley" age="23" tech="FSD" />
      <Developer name="foshley" age="24" tech="BED" />
    </>
  );
}
function Welcome() {
  return <h1>Hello, everyone!</h1>;
}
function Name() {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <p>Name: John Doe</p>
      <p>Age: 30</p>
    </div>
  );
}
function Student(props) {
  // console.log(props);
  const name = "Jane Smith";
  const age = 22;
  return (
    <div className="student">
      <h2>Student Information</h2>
      <p>Student Name:{name}</p>
      <p>Student Age: {age}</p>
      <p>tech:{props.tech}</p>
    </div>
  );
}
function Developer(crocks) {
  console.log(crocks);
  const developerStyle = {
    border: "2px solid green",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h2>Developer Information</h2>
      <p>Developer Name: {crocks.name}</p>
      <p>Developer Age: {crocks.age} </p>
      <p>Specialty: {crocks.tech}</p>
    </div>
  );
}

export default App;

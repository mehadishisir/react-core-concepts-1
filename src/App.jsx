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
      <HireAoffice
        chair="22"
        desk="10"
        computer="30"
        printars="5"
        address="USA"
      />
      <HireAoffice
        chair="32"
        desk="20"
        computer="40"
        printars="15"
        address="UK"
      />
      <HireAoffice
        chair="42"
        desk="30"
        // computer=""
        printars="25"
        address="CANADA"
      />
    </>
  );
  function HireAoffice({ chair, desk, computer = "100", printars, address }) {
    return (
      <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
        <h2>Hire A office</h2>
        <p>We have many offices</p>
        <p>{address} office</p>
        <ul
          style={{
            listStyleType: "none",
            backgroundColor: "blueviolet",
            borderRadius: "10px",
            padding: "10px",
            color: "white",
            margin: "10px",
          }}
        >
          <li>chairs need : {chair}</li>
          <li> desks need :{desk}</li>
          <li>computers need :{computer}</li>
          <li>printers need : {printars}</li>
        </ul>
      </div>
    );
  }
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

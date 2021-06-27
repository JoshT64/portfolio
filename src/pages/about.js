import * as React from "react";
import layouts from "../components/layouts.css";

//styles
const pageStyles = {
  color: "#232129",
  paddingTop: 26,
  paddingBottom: 96,
  paddingLeft: 96,
  paddingRight: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};
const linkStyle = {
  fontWeight: "bold",
  verticalAlign: "5%",
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};

export default function About() {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>About Me</h1>
      <ul style={listStyles}>
        <h2 style={{ fontSize: "24px" }}>Placeholder</h2>
      </ul>
    </main>
  );
}

import * as React from "react";
import Header from "./header";
import layouts from "../components/layouts.css";

// styles

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
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  fontWeight: "500",
  fontSize: 19,
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
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

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "MY ANIME LIST",
  url: "https://myanimelist.net/anime/39195/Beastars?q=beastar&cat=anime",
  color: "#8954A8",
};

const imgStyle = {
  float: "right",
};

const imgDim = {
  paddingLeft: 69,
  paddingBottom: 0,
  paddingRight: 0,
  paddingTop: 0,
  margin: 0,
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: "Work Experience",
    url: "https://google.com",
    description:
      "I've never worked a job in my life, all i do is watch anime and play degen video games.",
    color: "#f6e58d",
  },
  {
    text: "About",
    url: "/about",
    description: "More info about me I guess",
    color: "#fff",
  },
];

// markup
const IndexPage = () => {
  return (
    <div>
      <title>Josh Portfolio</title>
      <img
        style={imgDim}
        height="128"
        width="96"
        src="https://cdn.discordapp.com/attachments/635642752448725003/857695768251727932/CleverAdmirablndfheCowrie-max-1mb.gif"
        alt=""
      ></img>
      <img
        style={{ imgDim }}
        height="128"
        width="128"
        src="https://i.imgur.com/ffV7Sat.gif"
        alt=""
      ></img>
      <main style={pageStyles}>
        <img
          style={imgStyle}
          src="https://i.imgur.com/RHy3kb8.gif"
          alt=""
          width="420"
          height="420"
        ></img>
        <Header style={headingStyles} />
        <h1 style={headingStyles}>
          Welcome
          <br />
          <span style={headingAccentStyles}>
            to my portfolio. <br></br>
          </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p style={paragraphStyles}>
          Front-end developer <code style={codeStyles}>REACT</code>{" "}
          connoisseur!!
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        <ul style={listStyles}>
          <li style={docLinkStyle}>
            <a style={linkStyle} href={`${docLink.url}`}>
              {docLink.text}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles }}>
              <span>
                <a style={linkStyle} href={`${link.url}`}>
                  {link.text}
                </a>
                {link.badge && (
                  <span style={badgeStyle} aria-label="New Badge">
                    NEW!
                  </span>
                )}
                <p style={descriptionStyle}>{link.description}</p>
              </span>
            </li>
          ))}
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
        <code className="flex flex-column">hint: drag my name.</code>
      </main>
    </div>
  );
};

export default IndexPage;

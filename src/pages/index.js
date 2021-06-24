import * as React from "react";
import Header from "./header";

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
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
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
    color: "#E95800",
  },
];

// markup
const IndexPage = () => {
  return (
    <div>
      <img
        style={imgDim}
        height="128"
        width="96"
        src="https://cdn.discordapp.com/attachments/635642752448725003/857695768251727932/CleverAdmirablndfheCowrie-max-1mb.gif"
        alt=""
      ></img>
      <img
        style={{ imgDim, marginLeft: 8 }}
        height="128"
        width="128"
        src="https://media.tenor.com/images/eba379234fa67935935f3e690e409620/tenor.gif"
        alt=""
      ></img>
      <main style={pageStyles}>
        <title>Josh Portfolio</title>
        <img
          style={imgStyle}
          src="http://alligator.fun/Construction.gif"
          alt=""
          width="420"
          height="420"
        ></img>
        <Header style={headingStyles} />
        <h1 style={headingStyles}>
          Welcome
          <br />
          <span style={headingAccentStyles}>
            {" "}
            to my portfolio. <br></br>
          </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p style={paragraphStyles}>
          My favorite <code style={codeStyles}>ANIME</code> is Beastars!!
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        <ul style={listStyles}>
          <li style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            >
              {docLink.text}
            </a>
          </li>
          {links.map((link) => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <a
                  style={linkStyle}
                  href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                >
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
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main>
    </div>
  );
};

export default IndexPage;

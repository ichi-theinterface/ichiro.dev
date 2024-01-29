import "./Connect.css";

function Connect() {
  return (
    <div className="connect-canvas">
      <div className="frame">
        <div className="linkedin-wrapper">
          <a
            href="https://www.linkedin.com/in/ichiro-yamasaki-1692aa168/"
            target="_blank"
          >
            <div className="linkedin-button">
              <img
                className="linkedin-logo"
                src="/LinkedInLogo.png"
                alt="LinkedIn"
                style={{ width: "100px", height: "100px" }}
              />
              <h3>LinkedIn</h3>
            </div>
          </a>
        </div>
        <div className="github-wrapper">
          <a href="https://github.com/ichi-theinterface" target="_blank">
            <div className="github-button">
              <img
                className="github-logo"
                src="/GitHubLogo.png"
                alt="GitHub"
                style={{ width: "100px", height: "100px" }}
              />
              <h3>GitHub</h3>
            </div>
          </a>
        </div>
      </div>
      <a href="/" className="back-to-home-link">
        <div className="back-to-home">back to home</div>
      </a>
    </div>
  );
}

export default Connect;

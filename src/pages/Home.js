import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <a href="/">
        <div className="logo">
          <h1>What's up! I'm Ichiro</h1>
          <p>Thank you for visiting my website!</p>
        </div>
      </a>
      <a href="/blogs">
        <div className="blogs">
          <h1>BLOGS</h1>
          <p>Check out my engineering blogs!</p>
        </div>
      </a>
      <div className="aboutme">
        <h1>ABOUT ME</h1>
        <p>My experiences, hobbies and more!</p>
      </div>
      <a href="/connect">
        <div className="connect">
          <h1>CONNECT</h1>
          <p>I want to connect with you on LinkedIn, GitHub and X!</p>
        </div>
      </a>
      <div className="others">
        <h1>OTHERS</h1>
        <p>More things coming up!</p>
      </div>
    </div>
  );
}

export default Home;

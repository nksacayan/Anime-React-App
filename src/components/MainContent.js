import logo from "../images/logo192.png";

function MainContent() {
  return (
    <div className="mainContent">
      <div className="pictureCard">
        <h2>Here's an h2</h2>
        <p>Here's a p</p>
        <img src={logo} alt="Placeholder" />
      </div>
      <div className="noPicture">
        <h3>Here's an h3</h3>
        <p>Some more p</p>
        <h3>Here's an h3</h3>
        <p>Some more p</p>
        <h3>Here's an h3</h3>
        <p>Some more p</p>
      </div>
    </div>
  );
}

export default MainContent;

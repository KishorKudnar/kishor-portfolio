import "./Loader.css";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-content">

        <div className="spinner-wrapper">
          <div className="neon-spinner"></div>

          {/* LOGO INSIDE SPINNER */}
          <img src={logo} alt="KK Logo" className="loader-logo" />
        </div>

        <h2 className="loader-text">
          Loading... <span>Kishor</span>
        </h2>

      </div>
    </div>
  );
};

export default Loader;

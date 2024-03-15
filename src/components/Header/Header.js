import logo from "../../assets//Logo/BrainFlix-logo.svg";
import "./Header.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__branding">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="form__wrapper">
          <form className="form">
            <input className="form__search" type="text" placeholder="Search" />
          </form>
          <img className="form__avatar" src={avatar} alt="Avatar" />
        </div>
        <div className="form__button">
          <Link to="/upload">
            <button className="form__btn">UPLOAD</button>
          </Link>
          <img className="form__avatar-tab" src={avatar} alt="Avatar" />
        </div>
      </header>
    </>
  );
}

import logo from "../../assets//Logo/BrainFlix-logo.svg";
import "./Header.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__branding">
          <img className="header__logo" src={logo} alt="Logo" />
        </div>

        <div className="form__wrapper">
          <form className="form">
            <input className="form__search" type="text" placeholder="Search" />
          </form>
          <img className="form__avatar" src={avatar} alt="Avatar" />
        </div>
        <div className="form__button">
          <button>
            {" "}
            <img src={uploadIcon} alt="upload icon" />
            Upload
          </button>
        </div>
      </header>
    </>
  );
}
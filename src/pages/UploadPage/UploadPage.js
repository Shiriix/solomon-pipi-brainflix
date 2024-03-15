import { Link, useNavigate } from "react-router-dom";
import uploadImage from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { useState } from "react";

export default function UploadPage() {
  const [message, setMessage] = useState(false);

  const nav = useNavigate();

  const publishNav = () => {
    setMessage(!false);
    setTimeout(() => {
      nav("/");
    }, 2000);
  };

  return (
    <>
      <div className="UploadPage__divider1"></div>
      <article className="UploadPage">
        <div className="UploadPage__container">
          <h1 className="UploadPage__title">Upload Video</h1>
          <div className="UploadPage__body">
            <div className="UploadPage__thumbnail">
              <p className="UploadPage__subtitle">video thumbnail</p>
              <img
                src={uploadImage}
                alt="Track Runner"
                className="UploadPage__img"
              />
            </div>
            <form className="UploadPage__form">
              <label htmlFor="video__title" className="UploadPage__label">
                title your video
              </label>
              <input
                name="video__title"
                type="text"
                className="UploadPage__input"
                placeholder="Add a title to your video"
              />
              <label htmlFor="video__desc" className="UploadPage__label">
                add a video description
              </label>
              <textarea
                name="video__desc"
                className="UploadPage__input--description"
                placeholder="Add a description to your video"
              ></textarea>
            </form>
          </div>
          <div className="UploadPage__buttons">
            <button onClick={publishNav} className="UploadPage__publish">
              Publish
            </button>
            <Link to="/">
              <button className="UploadPage__cancel">Cancel</button>
            </Link>
          </div>
          {message && <p>Published</p>}
        </div>
      </article>
    </>
  );
}

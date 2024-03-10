import "./VideoDisplay.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";
import Comments from "../VideoComments/Comments";
export default function VideoDisplay({ activeVideo, handleSubmit }) {
  let infoDate = new Date(activeVideo.timestamp).toLocaleDateString();

  return (
    <>
      <video
        className="VideoDisplay"
        poster={activeVideo.image}
        controls
      ></video>
      <h1 className="VideoDisplay__title">{activeVideo.title}</h1>

      <div className="VideoDisplay__divider1"></div>
      <div className="VideoDisplay__wrapper">
        <div className="VideoDisplay__info1">
          <p className="VideoDisplay__uploader"> By {activeVideo.channel}</p>
          <p className="VideoDisplay__Date">{infoDate}</p>
          <div className="viewsWrapper-mob">
            <img src={viewsIcon} alt="Views Icon" />
            <p className="VideoDisplay__views-mob">{activeVideo.views}</p>
          </div>
        </div>

        <div className="VideoDisplay__info2">
          <p className="VideoDisplay__Date-mob">{infoDate}</p>
          <div className="viewsWrapper">
            <img src={viewsIcon} alt="Views Icon" />
            <p className="VideoDisplay__views">{activeVideo.views}</p>
          </div>
          <div className="likesWrapper">
            <img src={likeIcon} alt="Likes Icon" />
            <p className="VideoDisplay__likes">{activeVideo.likes}</p>
          </div>
        </div>
      </div>
      <div className="VideoDisplay__divider"></div>
      <article className="VideoDisplay__descriptions">
        <p className="VideoDisplay__description">{activeVideo.description}</p>
      </article>

      <Comments activeVideo={activeVideo} handleSubmit={handleSubmit} />
    </>
  );
}

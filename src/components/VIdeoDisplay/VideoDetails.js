import "./VideoDetails.scss";
import viewsIcon from "../../assets/Icons/views.svg";
import likeIcon from "../../assets/Icons/likes.svg";
import Comments from "../VideoComments/Comments";

export default function VideoDetails({ activeVideo }) {
  return (
    <>
      {activeVideo && (
        <h1 className="VideoDetails__title">{activeVideo.title}</h1>
      )}

      <div className="VideoDetails__divider1"></div>
      <div className="VideoDetails__wrapper">
        <div className="VideoDetails__info1">
          {activeVideo && (
            <p className="VideoDetails__uploader"> By {activeVideo.channel}</p>
          )}
          {activeVideo && (
            <p className="VideoDetails__Date">
              {new Date(activeVideo.timestamp).toLocaleDateString()}
            </p>
          )}
          <div className="viewsWrapper-mob">
            <img src={viewsIcon} alt="Views Icon" />
            {activeVideo && (
              <p className="VideoDetails__views-mob">{activeVideo.views}</p>
            )}
          </div>
        </div>

        <div className="VideoDetails__info2">
          {activeVideo && (
            <p className="VideoDetails__Date-mob">
              {new Date(activeVideo.timestamp).toLocaleDateString()}
            </p>
          )}
          <div className="viewsWrapper">
            <img src={viewsIcon} alt="Views Icon" />
            {activeVideo && (
              <p className="VideoDetails__views">{activeVideo.views}</p>
            )}
          </div>
          <div className="likesWrapper">
            <img src={likeIcon} alt="Likes Icon" />
            {activeVideo && (
              <p className="VideoDetails__likes">{activeVideo.likes}</p>
            )}
          </div>
        </div>
      </div>
      <div className="VideoDetails__divider"></div>
      <article className="VideoDetails__descriptions">
        {activeVideo && (
          <p className="VideoDetails__description">{activeVideo.description}</p>
        )}
      </article>

      <Comments activeVideo={activeVideo} />
    </>
  );
}

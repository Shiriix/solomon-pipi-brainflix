import { Link } from "react-router-dom";
import "./VideoList.scss";

export default function VideoList({ videos, activeVideo }) {
  const filteredVideo = videos.filter((video) => {
    return video.id !== activeVideo.id;
  });

  return (
    <>
      <p className="VideoList__title"> Next Videos</p>
      <ul className="VideoList">
        {filteredVideo.map((video) => {
          return (
            <Link
              to={`/${video.id}`}
              key={video.id}
              className="VideoList__link"
            >
              <li className="VideoList-item">
                <img
                  src={video.image}
                  alt={video.title}
                  className={"VideoList-item__image"}
                ></img>
                <div className="VideosList-item__container">
                  <p className="VideosList-item__title">{video.title}</p>
                  <p className="VideosList-item__channel">{video.channel}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

export default function VideoList({ videos, handleClick }) {
  return (
    <>
      <ul className="VideoList">
        {videos.map((video) => {
          return (
            <li
              key={video.id}
              className="VideoList-item"
              onClick={() => handleClick(video)}
            >
              <img
                src={video.image}
                alt={video.title}
                className={"VideoList-item__image"}
              ></img>
              <p className="VideosList-item__title">{video.title}</p>
              <p className="VideosList-item__channel">{video.channel}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

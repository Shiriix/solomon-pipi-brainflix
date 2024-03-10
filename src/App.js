import Header from "./components/Header/Header";
import { useState } from "react";
import videosJSON from "./Data/videos.json";
import videoDetailsJSON from "./Data/video-details.json";
import VideoDisplay from "./components/VIdeoDisplay/VideoDisplay";
import VideoList from "./components/VideoList/VideoList";
import "./styles/partials/_resets.scss";
import "./styles/partials/_typography.scss";

export default function App() {
  const [videos] = useState(videosJSON);
  const [videoDetails] = useState(videoDetailsJSON);
  const [activeVideo, setActiveVideo] = useState(videoDetailsJSON[0]);

  const handleClickedVideo = (clickedId) => {
    const newActiveVideo = videoDetails.find((video) => {
      return video.id === clickedId;
    });

    setActiveVideo(newActiveVideo);
  };

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
  };

  return (
    <>
      <Header />
      <main className="main">
        <VideoDisplay activeVideo={activeVideo} handleSubmit={handleSubmit} />

        <VideoList
          videos={videos}
          handleClick={handleClickedVideo}
          activeVideo={activeVideo}
        />
      </main>
    </>
  );
}

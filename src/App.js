import Header from "./components/Header/Header";
import { useState } from "react";
import videosJSON from "../../Data/videos.json";
import videoDetailsJSON from "../../Data/video-details.json";
import VideoDisplay from "../VIdeoDisplay/VideoDisplay";
import VideoList from "../VideoList/VideoList";
import "./styles/partials/_resets.scss";

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

  return (
    <>
      <Header />
      <main className="main">
        <VideoDisplay activeVideo={activeVideo} />
        <VideoList videos={videos} handleClick={handleClickedVideo} />
      </main>
    </>
  );
}

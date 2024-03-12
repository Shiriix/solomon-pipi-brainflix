import { useEffect, useState } from "react";
import VideoDisplay from "../../components/VIdeoDisplay/VideoDisplay";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";

export default function HomePage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState(null);

  const handleClickedVideo = (clickedId) => {
    const newActiveVideo = activeVideo.find((videos) => {
      return videos.id === clickedId;
    });

    setActiveVideo(newActiveVideo);
  };

  const getVideos = async () => {
    const { data } = await Axios.get(
      `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=123`
    );

    setVideos(data);
  };

  const getVideo = async (id) => {
    const { data } = await axios.get(
      `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}?api_key=123`
    );

    setActiveVideo(data);
  };

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    if (videoId) {
      getVideo(videoId);
    }

    if (!videoId && videos) {
      getVideo(videos[0].id);
    }
  }, [videoId, videos]);

  return (
    <>
      <VideoDisplay activeVideo={activeVideo} />

      <VideoList
        videos={videos}
        handleClick={handleClickedVideo}
        activeVideo={activeVideo}
      />
    </>
  );
}
import { useEffect, useState } from "react";
import VideoList from "../../components/VideoList/VideoList";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoHero from "../../components/VideoHero/VideoHero";
import VideoDetails from "../../components/VIdeoDisplay/VideoDetails";

export default function HomePage() {
  const { videoId } = useParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const { data } = await axios.get(
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

  if (!activeVideo || !videos) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <VideoHero activeVideo={activeVideo} />
      <div className="split">
        <div className="split-left">
          <VideoDetails activeVideo={activeVideo} />
        </div>
        <VideoList videos={videos} activeVideo={activeVideo} />
      </div>
    </>
  );
}

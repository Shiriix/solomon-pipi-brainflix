import "./VideoHero.scss";

export default function VideoHero({ activeVideo }) {
  return (
    <>
      {activeVideo && (
        <video
          className="VideoHero"
          poster={activeVideo.image}
          controls
        ></video>
      )}
    </>
  );
}

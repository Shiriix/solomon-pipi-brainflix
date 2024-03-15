import "./VideoHero.scss";

export default function VideoHero({ activeVideo }) {
  return (
    <>
      <section className="VideoHero">
        <div className="VideoHero__container">
          {activeVideo && (
            <video
              className="VideoHero__img"
              poster={activeVideo.image}
              controls
            ></video>
          )}
        </div>
      </section>
    </>
  );
}

import React from "react";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

export default function Video() {
  return (
    <main className="main">
      <article className="main__videoplayer">
        <video poster={thumbnail}></video>
      </article>
    </main>
  );
}

import React from "react";
import "./Comments.scss";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

export default function Comments({ activeVideo }) {
  let activeComments = activeVideo.comments;

  const commentDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <article className="VideoDisplay__comments">
      <p className="VideoDisplay__comments-number">
        {" "}
        {activeVideo.comments.length} Comments
      </p>
      <form className="VideoDisplay__commentsform">
        <p className="VideoDisplay__comments-prompt">Join the conversation</p>
        <div className="VideoDisplay__comments-area">
          <img className="form__avatar" src={avatar} alt="Avatar" />
          <textarea
            name="commentArea"
            id="commentArea"
            cols="30"
            rows="7"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button className="VideoDisplay__comments-btn" type="submit">
          {" "}
          COMMENT
        </button>
      </form>
      <div className="VideoDisplay__existing-comments">
        {activeComments.map((activeComment) => {
          return (
            <article
              className="VideoDisplay__existing-comment"
              key={activeComment.id}
            >
              <div className="comments__container">
                <p className="comment__name">{activeComment.name} </p>
                <p className="comment__date">
                  {commentDate(activeComment.timestamp)}{" "}
                </p>
              </div>
              <p className="comment__text">{activeComment.comment} </p>
            </article>
          );
        })}
      </div>
    </article>
  );
}

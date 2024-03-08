import React from "react";

export default function Comments({ activeVideo }) {
  return (
    <article className="VideoDisplay__comments">
      <p className="commentsNumber"> {activeVideo.comments.length} Comments</p>
      <form className="Commentsform">
        <p>Join the conversation</p>
        <textarea
          name="commentArea"
          id="commentArea"
          cols="30"
          rows="10"
          placeholder="Add a new comment"
        ></textarea>
        <button className="comments__btn" type="submit">
          {" "}
          COMMENT
        </button>
      </form>
      <div className="VideoDisplay__existing-comments">
        {activeComments.map((activeComment) => {
          return (
            <article key={activeComment.id}>
              <p className="comment__name">{activeComment.name} </p>
              <p className="comment__date">{commentDate} </p>
              <p className="comment__text">{activeComment.comment} </p>
            </article>
          );
        })}
      </div>
    </article>
  );
}

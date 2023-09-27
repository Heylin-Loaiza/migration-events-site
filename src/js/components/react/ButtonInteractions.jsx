import { useState } from "react";

const goingMessage = () => {
  return (
    <>
      <span className="check">✔</span>
      <div>
        <p>You &apos re going to this event!</p>
        <button
          data-id="${id}"
          data-interaction="${going}"
          data-template="${remove}"
          className="button-link"
        >
          Changed your mind?
        </button>
      </div>
    </>
  );
};

const EventInteractions = () => {

    return (
      <>
        <div className="going-and-interested" data-id="${id}">
          <button
            className="going"
            data-id="${id}"
            data-interaction="${going}"
            data-template="${going}"
          >
            Going!
          </button>
          <button
            className="interested"
            data-id="${id}"
            data-interaction="${interested}"
            data-template="${interested}"
          >
            Interested
          </button>
        </div>
        <button
          className="heart"
          data-id="${id}"
          data-interaction="${favorites}"
        >
          Favorite
        </button>
      </>
  );
};

export { EventInteractions }
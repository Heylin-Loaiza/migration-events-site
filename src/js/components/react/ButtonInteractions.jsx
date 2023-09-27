import { useState } from 'react';

const GoingMessage = ({handleGoingClick}) => {
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
          onClick={handleGoingClick}
        >
          Changed your mind?
        </button>
      </div>
    </>
  );
};

const EventInteractions = () => {
  const [going, setGoing] = useState(false);

  function handleGoingClick() {
    setGoing(!going);
  }

    return (
      <>
        {going ? null : (
          <div className="going-and-interested" data-id="${id}">
            <button
              className="going"
              data-id="${id}"
              data-interaction="${going}"
              data-template="${going}"
              onClick={handleGoingClick}
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
        )}
        <button
          className="heart"
          data-id="${id}"
          data-interaction="${favorites}"
        >
          Favorite
        </button>

        {going ? <GoingMessage handleGoingClick={handleGoingClick} /> : null}
      </>
  );
};

export { EventInteractions }
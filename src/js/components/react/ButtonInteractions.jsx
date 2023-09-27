import { useState } from "react";

const GoingMessage = ({ handleGoingClick }) => {
  return (
    <>
      <span className="check">✔</span>
      <div>
        <p>Youre going to this event!</p>
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

const InterestedMessage = ({ handleInterestedClick, handleGoingClick}) => {
  const HandleClick = () => {
    handleInterestedClick(),
    handleGoingClick()
  }

  return (
    <>
      <div>
        <p>Youre interested in going.</p>
        <button
          data-id="${id}"
          data-interaction="${interested}"
          data-template="${remove}"
          className="button-link"
          onClick={handleInterestedClick}
        >
          Changed your mind?
        </button>
      </div>
      <button
        className="going"
        data-id="${id}"
        data-interaction="${going}"
        data-template="${going}"
        onClick={HandleClick}
      >
        Going!
      </button>
    </>
  );
};

const EventInteractions = () => {
  const [going, setGoing] = useState(false);
  const [interested, setInterested] = useState(false);

  function handleGoingClick() {
    setGoing(!going);
  }

  function handleInterestedClick() {
    setInterested(!interested);
  }

  return (
    <>
      {going || interested ? null : (
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
            onClick={handleInterestedClick}
          >
            Interested
          </button>
        </div>
      )}
      <button className="heart" data-id="${id}" data-interaction="${favorites}">
        Favorite
      </button>
      {going ? <GoingMessage handleGoingClick={handleGoingClick} /> : null}
      {interested ? <InterestedMessage handleInterestedClick={handleInterestedClick} handleGoingClick={handleGoingClick} /> : null}
      
    </>
  );
};

export { EventInteractions };

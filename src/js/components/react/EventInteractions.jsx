import { useState } from "react";

const GoingMessage = ({ handleGoingBtn }) => {
  return (
    <>
      <span className="check">✔</span>
      <div>
        <p>You&apos;re going to this event!</p>
        <button onClick={handleGoingBtn} className="button-link">
          Changed your mind?
        </button>
      </div>
    </>
  );
};

const InterestedMessage = ({ handleInterestedBtn, handleGoingBtn }) => {
  const handleClick = () => {
    handleInterestedBtn(),
    handleGoingBtn()
  }

  return (
    <>
      <div>
        <p>You&apos;re interested in going.</p>
        <button onClick={handleInterestedBtn} className="button-link">Changed your mind?</button>
      </div>
      <button onClick={handleClick} className="going">
        Going!
      </button>
    </>
  );
};

const EventInteractions = () => {
  const [going, setGoing] = useState(false);
  const [interested, setInterested] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleGoingBtn = () => {
    setGoing(!going);
  };

  const handleInterestedBtn = () => {
    setInterested(!interested);
    console.log(interested)
  };

  const handleFavoriteBtn = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className="interactions-container">
        {going || interested ? null : (
          <div className="going-and-interested">
            <button className="going" onClick={handleGoingBtn}>
              Going!
            </button>
            <button className="interested" onClick={handleInterestedBtn}>
              Interested
            </button>
          </div>
        )}
        <button
          className={`heart ${favorite ? "heart-blue" : ""}`}
          onClick={handleFavoriteBtn}
        ></button>
      </div>
      {going ? <GoingMessage handleGoingBtn={handleGoingBtn} /> : null}
      {interested ? <InterestedMessage handleInterestedBtn={handleInterestedBtn} handleGoingBtn={handleGoingBtn}/> : null}
    </>
  );
};

export { EventInteractions };

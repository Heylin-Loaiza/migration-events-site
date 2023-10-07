const Card = ({ event }) => {
  const { image, title, date, location, price } = event;
  return (
    <li className="gallery__card">
      <img src={image} alt={title}/>
      <div className="gallery__text">
        <div className="event__info">
          <h3>{title}</h3>
          <p className="date">{date}.</p>
          <p>
            {location.address} • {location.city}, {location.state}.
          </p>
          <strong>${price}</strong>
        </div>
      </div>
    </li>
  );
};

const EventCard = ({props}) => {
  return (
    <ul className="container error-container gallery home-gallery">
      {props.map((item) => (
        <Card key={item.id} event={item} />
      ))}
    </ul>
  );
};

export { EventCard };

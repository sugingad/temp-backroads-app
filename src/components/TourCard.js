const TourCard = ({
  tourImage,
  tourDate,
  tourInfo,
  tourTitle,
  tourMap,
  tourDuration,
  tourPrice,
}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tourImage} className="tour-img" alt="" />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourTitle}</h4>
        </div>
        <p>{tourInfo}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {tourMap}
          </p>
          <p>{tourDuration}</p>
          <p>{`from ${tourPrice}`}</p>
        </div>
      </div>
    </article>
  );
};
export default TourCard;

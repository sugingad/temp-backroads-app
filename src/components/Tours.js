import Title from "./Title";
import TourCard from "./TourCard.js";
import { toursData } from "./data.js";
const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours"></Title>
      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <TourCard key={tour.id} {...tour}></TourCard>;
        })}
      </div>
    </section>
  );
};
export default Tours;

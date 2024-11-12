import StarSVG from "../assets/star-svgrepo-com.svg";

/**
 * @param {{ review: number }} param0 - Review should range from 0.0 to 5.0
 */
export function ReviewStars({ review }) {
  const roundedReview = Math.round(review);
  return (
    <div className="flex">
      {Array(5)
        .fill()
        .map((_, index) => (
          <img
            src={StarSVG}
            width={10}
            className={`${5 - index <= roundedReview ? "" : "opacity-30"}`}
            key={index}
          />
        ))}
    </div>
  );
}

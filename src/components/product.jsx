import { ReviewStars } from "./review-stars";

export function Product({ title, price, rating, image }) {
  return (
    <div className="flex flex-col items-center w-[300px] gap-2 p-2">
      <img src={image} className="object-scale-down flex-grow" />
      <div className="flex flex-wrap items-center justify-between text-lg gap-1 w-full">
        <span className="font-bold">{title}</span>
        <ReviewStars review={rating} />
      </div>
      <span className="text-opacity-50 text-black font-bold w-full text-left">
        ${price}
      </span>
    </div>
  );
}

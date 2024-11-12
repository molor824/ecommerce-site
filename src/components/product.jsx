import { ReviewStars } from "./review-stars";
import ShoppingCartSVG from "../assets/shopping-cart-outline-svgrepo-com.svg";
import EyeSVG from "../assets/eye-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";

export function Product({ productId, title, price, rating, image }) {
  const navigate = useNavigate();
  const onEyeButtonClick = () => navigate(`/product/${productId}`);
  const buttons = [
    {
      img: EyeSVG,
      onClick: onEyeButtonClick,
    },
    {
      img: ShoppingCartSVG,
    },
  ];

  return (
    <div className="flex flex-col items-start w-[300px] gap-2 p-2 group">
      <div className="aspect-square overflow-hidden relative">
        <img src={image} className="w-full h-full object-scale-down" />
        <div className="absolute bottom-1 w-full flex justify-center gap-4 duration-200 ease-in-out translate-y-[200%] group-hover:translate-y-0">
          {buttons.map(({ img, onClick }, index) => (
            <button
              className="p-2 bg-slate-200 rounded-lg hover:bg-slate-300"
              onClick={onClick}
              key={index}
            >
              <img src={img} width={30} />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between text-lg gap-1 w-full">
        <span className="font-bold">{title}</span>
        <ReviewStars review={rating} />
      </div>
      <span className="text-opacity-50 text-black font-bold">${price}</span>
    </div>
  );
}

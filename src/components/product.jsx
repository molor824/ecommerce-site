import { ReviewStars } from "./review-stars";
import ShoppingCartSVG from "../assets/shopping-cart-outline-svgrepo-com.svg";
import EyeSVG from "../assets/eye-svgrepo-com.svg";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export function Product({ productId, title, price, rating, image }) {
  const { user } = useUser();
  const handleShoppingCartClick = () => {
    if (!user) return;
    let metadata = user.unsafeMetadata;
    if (!metadata.cart) metadata.cart = {};
    if (metadata.cart[productId]) delete metadata.cart[productId];
    else metadata.cart[productId] = 1;
    user
      .update({
        unsafeMetadata: metadata,
      })
      .then(() => console.log("Updated"));
  };

  return (
    <div className="flex flex-col items-start w-[300px] gap-2 p-2 group">
      <div className="w-full aspect-square overflow-hidden relative">
        <img src={image} className="w-full h-full object-scale-down" />
        <div className="absolute bottom-1 w-full flex justify-center gap-4 duration-200 ease-in-out translate-y-[200%] group-hover:translate-y-0">
          <Link
            to={`/product/${productId}`}
            className="p-2 bg-slate-200 rounded-lg hover:bg-slate-300"
          >
            <img src={EyeSVG} width={30} />
          </Link>
          {user && (
            <button
              className={`p-2 rounded-lg bg-slate-200 hover:bg-slate-300 ${
                user.unsafeMetadata.cart?.[productId]
                  ? "bg-red-300 hover:bg-red-400"
                  : ""
              }`}
              onClick={handleShoppingCartClick}
            >
              <img src={ShoppingCartSVG} width={30} />
            </button>
          )}
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

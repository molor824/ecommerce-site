import { useParams } from "react-router-dom";
import { Title } from "../components/title";
import { useRequest } from "ahooks";
import { useState } from "react";
import { ReviewStars } from "../components/review-stars";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { ImageSlider } from "../components/image-slider";

export function ProductPage() {
  const { productId } = useParams();
  const { data } = useRequest(() =>
    fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json()
    )
  );
  const { user } = useUser();
  const [orderNumber, setOrderNumber] = useState(0);

  const handleOrderNumberInput = (e) => {
    let input = e.currentTarget.value;
    let number = parseInt(input);
    if (input === "") number = 0;
    else if (isNaN(number)) number = orderNumber;
    setOrderNumber(number);
  };
  const handleAddToCartClick = () => {
    if (!user) return;

    let metadata = user.unsafeMetadata;
    if (!metadata.cart) metadata.cart = {};
    if (orderNumber === 0) delete metadata.cart[productId];
    else metadata.cart[productId] = orderNumber;

    user
      .update({ unsafeMetadata: metadata })
      .then(() => console.log("Updated"));
  };

  return (
    <>
      <Title title="Product Description" />
      <section className="section-container items-stretch sm:items-start sm:flex-row sm:justify-between">
        {data && (
          <>
            <ImageSlider images={data.images} />
            <div className="flex flex-col max-w-[400px] min-w-[200px] gap-[2px] bg-slate-300 flex-grow">
              <div className="bg-white p-2">
                <div className="flex flex-wrap gap-1 justify-between">
                  <h1 className="text-2xl font-bold">{data.title}</h1>
                  <ReviewStars review={data.rating} />
                </div>
                <div className="text-gray-400 font-bold text-xl">
                  ${data.price}
                </div>
              </div>
              <div className="bg-white p-2 flex-shrink">
                <p>{data.description}</p>
                <div className="mt-4 flex flex-col gap-2 max-h-[100px] overflow-y-scroll">
                  {data.reviews.map(({ rating, comment }, index) => (
                    <div
                      className="flex flex-wrap gap-2 justify-between"
                      key={index}
                    >
                      <p className="text-lg">"{comment}"</p>
                      <ReviewStars review={rating} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-4 flex items-center justify-between">
                <span className="text-gray-400 font-bold text-xl">
                  No. of Orders
                </span>
                <div className="flex bg-gray-400 p-[1px] gap-[1px]">
                  <button
                    className="p-2 w-[40px] bg-gray-200 hover:bg-gray-400"
                    onClick={() => setOrderNumber(Math.max(orderNumber - 1, 0))}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    onInput={handleOrderNumberInput}
                    value={orderNumber}
                    className="w-[50px] text-center p-2 active:outline-none"
                  />
                  <button
                    className="p-2 w-[40px] bg-gray-200 hover:bg-gray-400"
                    onClick={() => setOrderNumber(orderNumber + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 flex items-center justify-between">
                <span className="text-gray-400 font-bold text-xl">
                  Total: ${Math.round(data.price * orderNumber * 100) / 100}
                </span>
                {user ? (
                  <button
                    className="p-2 border-[1px] border-gray-400 bg-gray-200 hover:bg-gray-300"
                    onClick={handleAddToCartClick}
                  >
                    {orderNumber <= 0
                      ? "Remove from Cart"
                      : `Add To Cart (${
                          user.unsafeMetadata.cart?.[productId] || 0
                        } in cart)`}
                  </button>
                ) : (
                  <SignInButton className="p-2 border-[1px] border-gray-400 bg-blue-400 hover:bg-blue-500">
                    Sign In
                  </SignInButton>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

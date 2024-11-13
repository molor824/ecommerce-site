import { useParams } from "react-router-dom";
import { Title } from "../components/title";
import { useRequest } from "ahooks";
import { useState } from "react";
import { ReviewStars } from "../components/review-stars";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

export function ProductPage() {
  const { productId } = useParams();
  const { data } = useRequest(() =>
    fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json()
    )
  );
  const [imageIndex, setImageIndex] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);

  const setOrderNumberClamped = (number) =>
    setOrderNumber(Math.max(0, Math.min(1000000, number)));
  const handleOrderNumberInput = (e) => {
    let input = e.currentTarget.value;
    let number = parseInt(input);
    if (input === "") number = 0;
    else if (isNaN(number)) number = orderNumber;
    setOrderNumberClamped(number);
  };

  return (
    <>
      <Title title="Product Description" />
      <section className="section-container items-stretch sm:items-start sm:flex-row sm:justify-between">
        {data && (
          <>
            <div className="overflow-hidden aspect-square min-w-[300px] flex-grow relative group">
              {data.images.map((image, index) => (
                <img
                  src={image}
                  className="absolute top-0 right-0 w-full h-full object-cover duration-200 ease-in-out"
                  style={{
                    transform: `translateX(${(index - imageIndex) * 100}%)`,
                  }}
                  key={index}
                />
              ))}
              {imageIndex > 0 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-200 rounded-lg hover:bg-slate-300 duration-200 ease-in-out -translate-x-[200%] group-hover:translate-x-0"
                  onClick={() => setImageIndex(imageIndex - 1)}
                >
                  &larr;
                </button>
              )}
              {imageIndex < data.images.length - 1 && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-200 rounded-lg hover:bg-slate-300 duration-200 ease-in-out translate-x-[200%] group-hover:translate-x-0"
                  onClick={() => setImageIndex(imageIndex + 1)}
                >
                  &rarr;
                </button>
              )}
            </div>
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
                    onClick={() => setOrderNumberClamped(orderNumber + 1)}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    onInput={handleOrderNumberInput}
                    value={orderNumber}
                    className="w-[50px] text-center p-2 active:outline-none"
                  />
                  <button
                    className="p-2 w-[40px] bg-gray-200 hover:bg-gray-400"
                    onClick={() => setOrderNumberClamped(orderNumber - 1)}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="bg-white p-4 flex items-center justify-between">
                <span className="text-gray-400 font-bold text-xl">
                  Total: ${Math.round(data.price * orderNumber * 100) / 100}
                </span>
                <SignedIn>
                  <button className="p-2 border-[1px] border-gray-400 bg-gray-200 hover:bg-gray-300">
                    Add To Cart
                  </button>
                </SignedIn>
                <SignedOut>
                  <SignInButton className="p-2 border-[1px] border-gray-400 bg-blue-400 hover:bg-blue-500">
                    Sign In
                  </SignInButton>
                </SignedOut>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}

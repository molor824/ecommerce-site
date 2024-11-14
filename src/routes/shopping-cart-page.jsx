import { useUser } from "@clerk/clerk-react";
import { Title } from "../components/title";
import { useRequest } from "ahooks";
import { useEffect, useState } from "react";

function Product({ id, quantity, onQuantityChange, setTotal }) {
  const { data } = useRequest(() =>
    fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
  );
  useEffect(() => {
    if (!data) return;
    const total = data.price * quantity;
    setTotal((prev) => prev + total);
    return () => setTotal((prev) => prev - total);
  }, [data, quantity]);
  const handleInput = (e) => {
    let input = e.currentTarget.value;
    if (input.match(/^\d+$/)) onQuantityChange(parseInt(input));
  };
  return (
    <>
      {data && (
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            src={data.images[0]}
            className="w-[200px] h-[200px] object-cover"
          />
          <div className="flex-grow flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <div className="flex justify-between">
              <span className="text-xl">Price</span>
              <span className="text-lg">${data.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Quantity</span>
              <div className="flex p-[1px] gap-[1px] bg-slate-400 text-lg">
                <button
                  className="w-[30px] h-[30px] bg-white hover:bg-gray-100"
                  onClick={() => onQuantityChange(Math.max(quantity - 1, 0))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-[50px] text-center"
                  value={quantity}
                  onInput={handleInput}
                />
                <button
                  className="w-[30px] h-[30px] bg-white hover:bg-gray-100"
                  onClick={() => onQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Total</span>
              <span className="text-lg">
                ${Math.round(data.price * quantity * 100) / 100}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export function ShoppingCartPage() {
  const { user } = useUser();
  const [total, setTotal] = useState(0);
  const cart = user?.unsafeMetadata.cart;

  const handleQuantityChange = (id, quantity) => {
    if (!cart) return;

    cart[id] = quantity;
    if (quantity === 0) delete cart[id];
    user
      .update({ unsafeMetadata: user.unsafeMetadata })
      .then(() => console.log("Updated"));
  };
  const handlePurchase = () => {
    user.unsafeMetadata.cart = {};
    user.update({ unsafeMetadata: user.unsafeMetadata });
  };

  return (
    <>
      <Title title="Your Shopping Cart" />
      <section className="section-container">
        <h1 className="text-4xl font-bold">Cart</h1>
        <div className="flex flex-col gap-4 self-stretch items-stretch">
          {cart &&
            Object.entries(cart).map(([id, quantity]) => (
              <Product
                key={id}
                id={id}
                quantity={quantity}
                onQuantityChange={(quantity) =>
                  handleQuantityChange(id, quantity)
                }
                setTotal={setTotal}
              />
            ))}
        </div>
        <div className="text-end w-full text-2xl font-bold">
          Total: ${Math.round(total * 100) / 100}
        </div>
        <button
          className="p-2 bg-blue-300 hover:bg-blue-400"
          onClick={handlePurchase}
        >
          Purchase
        </button>
      </section>
    </>
  );
}

import { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts([...products, ...data.products]));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {products.map(({ title, price, images }) => (
        <div className="flex flex-col bg-slate-300 rounded-lg items-center w-[300px] gap-2">
          <img src={images[0]} className="p-4 object-scale-down" />
          <div className="flex justify-between text-lg gap-4 w-full p-4">
            <span>{title}</span>
            <span>${price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

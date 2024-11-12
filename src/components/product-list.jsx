import { useEffect, useState } from "react";
import { Product } from "./product";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(new Error(`${res.status} ${res.statusText}`));
      })
      .then((data) => {
        if (Array.isArray(data.products))
          setProducts([...products, ...data.products]);
        else return Promise.reject(new Error("Products field is not an array"));
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map(({ title, price, images, rating }, index) => (
        <Product
          title={title}
          price={price}
          image={images[0]}
          rating={rating}
          key={index}
        />
      ))}
    </div>
  );
};

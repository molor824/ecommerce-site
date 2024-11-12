import { useEffect, useState } from "react";
import { Product } from "./product";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, ...data.products]);
        console.log(data);
      });
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

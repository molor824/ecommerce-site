import { Product } from "./product";
import { useRequest } from "ahooks";

export const ProductList = () => {
  const { data } = useRequest(() =>
    fetch("https://dummyjson.com/products?limit=10").then((res) => res.json())
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data?.products.map(({ id, title, price, images, rating }, index) => (
        <Product
          productId={id}
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

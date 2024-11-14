import { Product } from "./product";
import { useRequest } from "ahooks";

export const ProductList = ({ search }) => {
  const { data } = useRequest(() =>
    fetch(`https://dummyjson.com/products?limit=100`).then((res) => res.json())
  );

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data?.products
        .filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
        .map(({ id, title, price, images, rating }, index) => (
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

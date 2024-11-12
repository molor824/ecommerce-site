import { useState } from "react";
import { useRequest } from "ahooks";

export default function HomePage() {
  const [input, setInput] = useState("");

  const { data } = useRequest(async () =>
    fetch("https://dummyjson.com/products?limit=10").then((res) => res.json())
  );

  return (
    <>
      <div className="bg-title bg-cover bg-center bg-no-repeat w-full h-[400px] flex items-center justify-center p-4">
        <h1 className="text-white text-center font-bold text-6xl">
          Check Our Products
        </h1>
      </div>
      <section className="section-container flex flex-col items-center">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          className="search bg-gray-200 rounded-lg border-gray-400 border-2"
        />
        {data?.products.map(({ title, price }, index) => (
          <p key={index}>
            {title} ${price}
          </p>
        ))}
      </section>
    </>
  );
}

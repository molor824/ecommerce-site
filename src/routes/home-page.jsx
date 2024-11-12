import { useState } from "react";
import { ProductList } from "../components/product-list";
import { Title } from "../components/title";

export function HomePage() {
  const [input, setInput] = useState("");

  return (
    <>
      <Title title="Check Our Products" />
      <section className="section-container">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          className="search bg-gray-200 rounded-lg border-gray-400 border-2"
        />
        <ProductList />
      </section>
    </>
  );
}

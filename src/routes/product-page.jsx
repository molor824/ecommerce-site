import { useParams } from "react-router-dom";
import { Title } from "../components/title";
import { useRequest } from "ahooks";

export function ProductPage() {
  const { productId } = useParams();
  const { data } = useRequest(() =>
    fetch(`https://dummyjson.com/products/${productId}`).then((res) =>
      res.json()
    )
  );
  console.log(data);

  return (
    <>
      <Title title="Product Description" />
      <section className="section-container"></section>
    </>
  );
}

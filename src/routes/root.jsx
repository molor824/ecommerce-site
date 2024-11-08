import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <>
      <Header />
      <section className="section-container break-words p-8">
        <Outlet />
      </section>
    </>
  );
}

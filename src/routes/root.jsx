import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <>
      <Header />
      <div className="section-container p-4">
        <Outlet />
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="w-screen max-w-[800px] mx-auto flex flex-col items-center p-4 py-8 gap-8">
        <Outlet />
      </div>
    </div>
  );
}

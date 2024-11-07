import { useRouteError } from "react-router-dom";
import Header from "../components/header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <h1 className="font-bold text-4xl">Page Not Found</h1>
      </div>
    </div>
  );
}

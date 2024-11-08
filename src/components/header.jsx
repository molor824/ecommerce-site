import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/burger-menu-svgrepo-com.svg";
import { useState } from "react";

const NAV_ROUTES = [
  { name: "Home", page: "/" },
  { name: "About", page: "/about" },
];

export default function Header() {
  const [isBurgermenuActive, setBurgermenuActive] = useState(false);
  const handleHamburgerClick = () => setBurgermenuActive((a) => !a);

  return (
    <header className="relative w-screen bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted">
      <nav className="section-container flex-row justify-between p-4 gap-4">
        <Link to="/">
          <img src="https://react18-ecommerce.vercel.app/images/logo.png" />
        </Link>
        <button
          className="p-2 transparent sm:hidden"
          onClick={handleHamburgerClick}
        >
          <img src={HamburgerMenu} width={40} />
        </button>
      </nav>
      <div className="absolute sm:hidden top-full right-0 max-w-[300px] w-full overflow-hidden">
        <div
          className={`${
            isBurgermenuActive ? "translate-y-[3px]" : "-translate-y-full"
          } ease-in-out duration-200 w-full p-2 bg-[#fafafa]`}
        >
          <div className="w-full flex flex-col bg-black bg-opacity-30 gap-[2px]">
            {NAV_ROUTES.map(({ name, page }) => (
              <button className="bg-[#fafafa] w-full p-4 text-xl hover:underline">
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

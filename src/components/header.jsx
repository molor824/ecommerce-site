import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/burger-menu-svgrepo-com.svg";
import { useState } from "react";

const NAV_ROUTES = [
  { name: "Home", page: "/" },
  { name: "About", page: "/about" },
  { name: "Contact Us", page: "/contact" },
];

export default function Header() {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

  const onBurgerMenuClick = () => setBurgerMenuActive((a) => !a);
  const onBackgroundClick = () => setBurgerMenuActive(false);

  return (
    <header className="w-screen bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted">
      <nav className="relative section-container flex-row justify-between p-8 gap-4">
        <Link to="/">
          <img src="https://react18-ecommerce.vercel.app/images/logo.png" />
        </Link>
        <button className="p-2 transparent" onClick={onBurgerMenuClick}>
          <img src={HamburgerMenu} width={40} />
        </button>
        {isBurgerMenuActive && (
          <>
            <div
              className="fixed top-0 left-0 w-screen h-screen"
              onClick={onBackgroundClick}
            />
            <div className="absolute top-[calc(100%+3px)] right-0 w-full max-w-[300px] bg-[#ddd] flex flex-col gap-[2px]">
              {NAV_ROUTES.map(({ name, page }, index) => (
                <button
                  className="bg-[#fafafa] w-full p-4 text-xl hover:underline hover:bg-[#eee]"
                  key={index}
                >
                  {name}
                </button>
              ))}
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

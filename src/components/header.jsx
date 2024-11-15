import { Link, useLocation } from "react-router-dom";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import ShoppingCartSVG from "../assets/shopping-cart-outline-svgrepo-com.svg";
import BurgerMenuSVG from "../assets/burger-menu-svgrepo-com.svg";

const ROUTES = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
];

export function Header() {
  const { user } = useUser();
  const location = useLocation();
  const productCount = user?.unsafeMetadata.cart
    ? Object.keys(user.unsafeMetadata.cart).length
    : 0;

  return (
    <header className="sticky top-0 bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted z-10">
      <nav className="section-container p-4 flex-row">
        <Link to="/">
          <img
            src="https://react18-ecommerce.vercel.app/images/logo.png"
            className="object-cover object-left w-[60px] sm:w-full h-[60px]"
          />
        </Link>
        <div className="flex-grow flex items-center justify-end">
          <div className="hidden sm:flex flex-row items-center h-[40px] gap-2 p-2">
            {ROUTES.map(({ name, to }) => (
              <Link
                to={to}
                className={`hover:bg-slate-200 p-2 ${
                  location.pathname === to ? "font-bold" : ""
                }`}
              >
                {name}
              </Link>
            ))}
            <div className="bg-slate-400 w-[2px] h-full"></div>
          </div>
          {!!user ? (
            <>
              <div className="hidden sm:flex items-center px-4">
                <UserButton showName />
              </div>
              <div className="sm:hidden flex items-center px-4">
                <UserButton />
              </div>
              <Link to="/shopping-cart" className="p-2 hover-opacity relative">
                <img src={ShoppingCartSVG} width={35} />
                {productCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white">
                    {productCount}
                  </span>
                )}
              </Link>
            </>
          ) : (
            <SignInButton className="p-2 bg-blue-300 hover:bg-blue-400 text-lg">
              Sign In
            </SignInButton>
          )}
          <div className="sm:hidden hover-opacity group p-2 relative z-20">
            <img src={BurgerMenuSVG} width={35} />
            <div className="absolute top-full right-0 w-[150px] hidden group-hover:block bg-[#fafafa] p-2">
              <div className="flex flex-col bg-slate-300 gap-[2px]">
                {ROUTES.map(({ name, to }) => (
                  <Link
                    to={to}
                    className={`bg-[#fafafa] p-2 hover:bg-slate-100 ${
                      location.pathname === to ? "font-bold" : ""
                    }`}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

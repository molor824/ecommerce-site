import { Link, useLocation } from "react-router-dom";
import HamburgerMenu from "../assets/burger-menu-svgrepo-com.svg";
import ShoppingCart from "../assets/shopping-cart-outline-svgrepo-com.svg";
import Person from "../assets/person-svgrepo-com.svg";

const NAV_ROUTES = [{ name: "Home", page: "/" }];

function NavDropdown({ name, page }) {
  const location = useLocation();

  return (
    <Link
      className={`block bg-[#fafafa] text-lg w-full p-4 hover:underline hover:bg-[#eee] ${
        location.pathname === page ? "font-bold" : ""
      }`}
      to={page}
    >
      {name}
    </Link>
  );
}
function NavRoute({ name, page }) {
  const location = useLocation();

  return (
    <Link
      className={`block text-lg p-2 hover-opacity ${
        location.pathname === page ? "font-bold" : ""
      }`}
      to={page}
    >
      {name}
    </Link>
  );
}
export default function Header() {
  const userName =
    "thisIsVeryLongUserNameThatSomePersonWillChooseForSomeReason";
  const signedIn = true; // TODO: Implement user authentication

  return (
    <header className="sticky top-0 w-screen bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted">
      <nav className="section-container flex gap-1">
        <Link to="/">
          <img
            src="https://react18-ecommerce.vercel.app/images/logo.png"
            className="object-cover object-left w-[60px] sm:w-full h-[60px]"
          />
        </Link>
        <div className="flex-grow flex justify-end">
          <div className="hidden md:flex items-center">
            {NAV_ROUTES.map(({ name, page }, index) => (
              <NavRoute name={name} page={page} key={index} />
            ))}
          </div>
          <div className="hidden md:block w-[2px] h-full bg-[#aaa] mx-4"></div>
          {signedIn ? (
            <>
              <Link
                to="/profile"
                className="p-2 hover-opacity flex flex-row items-center group"
              >
                <div className="text-right w-[100px] sm:w-[150px]">
                  <p className="overflow-clip overflow-ellipsis">{userName}</p>
                </div>
                <img src={Person} width={35} />
              </Link>
              <Link to="/shopping-cart" className="p-2 hover-opacity">
                <img src={ShoppingCart} width={35} />
              </Link>
            </>
          ) : (
            <button className="p-2 bg-blue-300 hover:bg-blue-400 text-lg">
              Login
            </button>
          )}
          <button className="relative md:hidden p-2 hover-opacity group">
            <img src={HamburgerMenu} width={35} />
            <div className="hidden group-hover:absolute group-hover:flex top-full right-0 w-[200px] bg-[#ddd] flex-col gap-[2px] p-[2px]">
              {NAV_ROUTES.map(({ name, page }, index) => (
                <NavDropdown name={name} page={page} key={index} />
              ))}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

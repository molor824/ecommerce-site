import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/burger-menu-svgrepo-com.svg";
import ShoppingCart from "../assets/shopping-cart-outline-svgrepo-com.svg";
import Person from "../assets/person-svgrepo-com.svg";

const NAV_ROUTES = [
  { name: "Home", page: "/" },
  { name: "About", page: "/about" },
  { name: "Contact Us", page: "/contact" },
];

const NavDropdown = ({ name }) => (
  <button className="bg-[#fafafa] text-lg font-bold w-full p-4 hover:underline hover:bg-[#eee]">
    {name}
  </button>
);
const NavRoute = ({ name }) => (
  <button className="block text-lg font-bold p-2 transparent outline-[#ddd] outline-[1px]">
    {name}
  </button>
);
export default function Header() {
  const userName =
    "thisIsVeryLongUserNameThatSomePersonWillChooseForSomeReason";
  const signedIn = true; // TODO: Implement user authentication

  return (
    <header className="w-screen bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted">
      <nav className="section-container flex gap-1">
        <Link to="/">
          <img
            src="https://react18-ecommerce.vercel.app/images/logo.png"
            className="object-cover object-left w-[60px] sm:w-full h-[60px]"
          />
        </Link>
        <div className="flex-grow flex justify-end">
          <div className="hidden md:flex">
            {NAV_ROUTES.map(({ name }, index) => (
              <NavRoute name={name} key={index} />
            ))}
          </div>
          <div className="hidden md:block w-[2px] h-full bg-[#aaa] mx-4"></div>
          {signedIn ? (
            <>
              <button className="p-2 transparent flex flex-row items-center group">
                <div className="text-right w-[100px] sm:w-[150px]">
                  <p className="overflow-clip overflow-ellipsis">{userName}</p>
                </div>
                <img src={Person} width={35} />
              </button>
              <button className="p-2 transparent">
                <img src={ShoppingCart} width={35} />
              </button>
            </>
          ) : (
            <button className="p-2 bg-blue-300 hover:bg-blue-400 text-lg">
              Login
            </button>
          )}
          <button className="relative md:hidden p-2 transparent group">
            <img src={HamburgerMenu} width={35} />
            <div className="hidden group-hover:absolute group-hover:flex top-full right-0 w-[200px] bg-[#ddd] flex-col gap-[2px] p-[2px]">
              {NAV_ROUTES.map(({ name, page }, index) => (
                <NavDropdown name={name} key={index} />
              ))}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";
import ShoppingCart from "../assets/shopping-cart-outline-svgrepo-com.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export function Header() {
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
          <SignedIn>
            <div className="hidden sm:flex items-center px-4">
              <UserButton showName />
            </div>
            <div className="sm:hidden flex items-center px-4">
              <UserButton />
            </div>
            <Link to="/shopping-cart" className="p-2 hover-opacity">
              <img src={ShoppingCart} width={35} />
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton className="p-2 bg-blue-300 hover:bg-blue-400 text-lg">
              Sign In
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

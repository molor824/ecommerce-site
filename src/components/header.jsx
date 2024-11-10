import { Link } from "react-router-dom";
import ShoppingCart from "../assets/shopping-cart-outline-svgrepo-com.svg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  return (
    <header className="sticky top-0 w-screen bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted z-10">
      <nav className="section-container flex gap-1">
        <Link to="/">
          <img
            src="https://react18-ecommerce.vercel.app/images/logo.png"
            className="object-cover object-left w-[60px] sm:w-full h-[60px]"
          />
        </Link>
        <div className="flex-grow flex items-center justify-end">
          <SignedIn>
            <div className="flex items-center p-2">
              <UserButton showName />
            </div>
            <Link to="/shopping-cart" className="p-2 hover-opacity">
              <img src={ShoppingCart} width={35} />
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton className="p-2 bg-blue-300 hover:bg-blue-400 text-lg">
              Login
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}

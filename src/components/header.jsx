import { Link } from "react-router-dom";
import HamburgerMenu from "../assets/burger-menu-svgrepo-com.svg";

export default function Header() {
  return (
    <header className="w-screen bg-[#fafafa] border-b-[3px] border-b-[#eee] border-dotted">
      <nav className="section-container flex-row justify-between p-4 gap-4">
        <Link to="/">
          <img src="https://react18-ecommerce.vercel.app/images/logo.png" />
        </Link>
        <button className="p-2 transparent">
          <img src={HamburgerMenu} width={40} />
        </button>
      </nav>
    </header>
  );
}

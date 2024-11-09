import Location from "../assets/location-sign-svgrepo-com.svg";
import Phone from "../assets/phone-svgrepo-com.svg";
import Facebook from "../assets/facebook-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="section-container flex flex-col items-start justify-evenly gap-8">
        <img src="https://react18-ecommerce.vercel.app/images/white-logo.png" />
        <div className="grid grid-cols-[auto_1fr] items-center gap-4 text-lg">
          <img src={Location} width={40} />
          <p>Chinggis Avenue-29, Ulaanbaatar, Mongolia</p>
          <img src={Phone} width={40} />
          <p>+976 1234 5678</p>
          <img src={Facebook} width={40} />
          <p>Hexashop</p>
        </div>
      </div>
    </footer>
  );
}

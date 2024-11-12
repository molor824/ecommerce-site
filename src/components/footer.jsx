import Location from "../assets/location-sign-svgrepo-com.svg";
import Phone from "../assets/phone-svgrepo-com.svg";
import Facebook from "../assets/facebook-svgrepo-com.svg";

const CONTACT_INFOS = [
  {
    imgSrc: Location,
    text: "Chinggis Khan Ave Naran Plaza, SBD - 1 khoroo, Ulaanbaatar 14251",
    link: "https://maps.app.goo.gl/39MEV6H3wNFFbAoi8",
  },
  {
    imgSrc: Phone,
    text: "+976 1234 5678",
  },
  {
    imgSrc: Facebook,
    text: "Hexashop",
    link: "https://www.facebook.com/profile.php?id=100084730441164",
  },
];

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="section-container flex flex-col items-start justify-evenly gap-8">
        <img src="https://react18-ecommerce.vercel.app/images/white-logo.png" />
        <div className="flex flex-col items-start gap-4 text-lg">
          {CONTACT_INFOS.map(({ imgSrc, text, link }, index) => (
            <a
              href={link}
              target="_blank"
              className="flex items-center gap-4"
              key={index}
            >
              <img src={imgSrc} width={40} />
              <p>{text}</p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

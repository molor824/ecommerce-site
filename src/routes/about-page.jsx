import { Title } from "../components/title";

export function AboutPage() {
  return (
    <>
      <Title title="About Us" />
      <section className="section-container flex-col-reverse sm:flex-row sm:justify-between">
        <div className="flex-grow max-w-[500px]">
          <img
            src="https://react18-ecommerce.vercel.app/images/about-left-image.jpg"
            className="w-full h-full"
          />
        </div>
        <div className="flex-grow min-w-[200px] flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center sm:text-left">
            About Us
          </h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod kon tempor incididunt ut labore.
          </p>
        </div>
      </section>
    </>
  );
}

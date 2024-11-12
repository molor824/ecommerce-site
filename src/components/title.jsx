export function Title({ title }) {
  return (
    <div className="bg-title bg-cover bg-center bg-no-repeat w-full h-[400px] flex items-center justify-center p-4">
      <h1 className="text-white text-center font-bold text-6xl">{title}</h1>
    </div>
  );
}

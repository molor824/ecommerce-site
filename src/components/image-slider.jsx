import { useState } from "react";

export function ImageSlider({ images }) {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="overflow-hidden aspect-square min-w-[300px] flex-grow relative group">
      {images.map((image, index) => (
        <img
          src={image}
          className="absolute top-0 right-0 w-full h-full object-cover duration-200 ease-in-out"
          style={{
            transform: `translateX(${(index - imageIndex) * 100}%)`,
          }}
          key={index}
        />
      ))}
      {imageIndex > 0 && (
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-slate-200 rounded-lg hover:bg-slate-300 duration-200 ease-in-out -translate-x-[200%] group-hover:translate-x-0"
          onClick={() => setImageIndex(imageIndex - 1)}
        >
          &larr;
        </button>
      )}
      {imageIndex < images.length - 1 && (
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-200 rounded-lg hover:bg-slate-300 duration-200 ease-in-out translate-x-[200%] group-hover:translate-x-0"
          onClick={() => setImageIndex(imageIndex + 1)}
        >
          &rarr;
        </button>
      )}
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "primereact/carousel";

const ImageItem = (image) => {
  console.log(image);

  return (
    <div className="w-full h-auto rounded-3xl">
      <img src={image.src} alt={image.alt} className="w-full h-auto" />
    </div>
  );
};

function App() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "test",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "test",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="md:w-1/2 px-4 md:pr-8 md:pl-0">
        <span className="uppercase text-blue">Lær fra i dag</span>
        <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold leading-tight">
          Finn Helse og Friskhet Gjennom Bevegelse
        </h1>
        <p className="text-sm md:text-base lg:text-base mt-2 mb-2 text-gray-200">
          Helse og friskhet gjennom bevegelse. Inspirasjon, råd, fellesskap.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 mt-6 md:mt-8 justify-between w-5/12 mx-auto">
          <Link
            className="bg-blue rounded-lg py-3 px-6 text-white"
            to={"/register"}
          >
            Bli medlem
          </Link>
          <a
            className="bg-transparent border border-blue rounded-lg py-3 px-6 text-blue mt-4 md:mt-0"
            href="https://www.youtube.com/watch?v=6q0VcgOfIQA&t"
            target="_blank"
            rel="noopener noreferrer"
          >
            Se video
          </a>
        </div>
      </div>
      <div className={`md:w-1/2 mt-6 md:mt-0 overflow-hidden`}>
        <img
          src="https://www.usatoday.com/gcdn/presto/2020/08/31/USAT/57ea2bda-0aab-485b-8046-86c7fa02f072-Dumbbells.png?width=660&height=372&fit=crop&format=pjpg&auto=webp"
          alt="test"
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
}

export default App;

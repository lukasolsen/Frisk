import {
  FaStar,
  FaStarHalf,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";

type Social = {
  name: string;
  url: string;
  icon: JSX.Element;
};

export default function Kontakt() {
  const socials: Social[] = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <FaInstagram />,
    },
    {
      name: "Epost",
      url: "mailto: google@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "Telefon",
      url: "tel: 12345678",
      icon: <FaPhone />,
    },
  ];

  const rating = [
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStar />,
    <FaStarHalf />,
  ];

  return (
    <div className="container mx-auto flex flex-col justify-between break-words">
      <div className="flex flex-row justify-between gap-28">
        <div className="w-6/12">
          <h1 className="text-3xl">Send oss en beskjed</h1>
          <p className="text-base text-gray-200">
            Lorem ipsum dolor sit amet consectetur. Nulla diam nibh id nibh
            porttitor Lorem ipsum dolor sit{" "}
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <input
              type="text"
              placeholder="Navn"
              className="p-2 rounded-sm text-black"
            />
            <input
              type="text"
              placeholder="Epost"
              className="p-2 rounded-sm text-black"
            />
            <input
              type="text"
              placeholder="Emne"
              className="p-2 rounded-sm text-black"
            />
            <textarea
              className="h-32 resize-none rounded-sm p-2 text-black"
              placeholder="Melding"
            ></textarea>

            <button className="bg-blue rounded-lg p-3">Send</button>
          </div>
        </div>
        <div className="w-6/12">
          <h1 className="text-3xl">Om oss</h1>
          <p className="mt-1 mb-8 text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            placeat perspiciatis, molestiae maxime iusto quisquam eos veritatis
            reiciendis dolorem, ipsa ducimus tempore ad voluptas? Inventore
            sapiente pariatur dignissimos natus omnis.
          </p>
          <ul className="list-disc">
            <li>Address: Limhusvegen 15, 2315 Hamar</li>
          </ul>
          <div className="mt-4">
            <h1 className="text-3xl">Vurder oss</h1>
            <div className="flex flex-row gap-2 mt-2 text-yellow-300 justify-center items-center">
              {rating.map((star) => star)}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-row gap-8 justify-center items-center">
        {/* Display socials */}
        {socials.map((social) => (
          <a
            href={social.url}
            key={social.name}
            rel={"frisk.no"}
            target="_blank"
            className="text-3xl hover:text-blue transition-all duration-100 ease-in-out"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

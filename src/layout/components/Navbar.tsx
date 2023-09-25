import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full p-4 pt-2 dark:text-white text-black">
      <h1 className="text-2xl font-bold text-blue">Frisk</h1>

      <div className="flex flex-row space-x-4 items-center">
        <Link to="/">Hjem</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/produkter">Produkter</Link>
        <Link to="/pricing">Pricing</Link>
      </div>

      <div className="flex flex-row space-x-4 items-center">
        <Link to="/login">Login</Link>
        <Link to="/register" className="bg-primary rounded-lg p-3">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

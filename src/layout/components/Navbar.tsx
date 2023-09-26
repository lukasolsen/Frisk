import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes("/login") ||
      location.pathname.includes("/register") ? null : (
        <div className="flex flex-row justify-between items-center w-full p-4 pt-2 dark:text-white text-black">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold text-blue">Frisk</h1>
          </Link>

          <div className="flex flex-row space-x-4 items-center">
            <Link
              to="/"
              className={`${location.pathname === "/" ? "text-blue" : ""}`}
            >
              Hjem
            </Link>
            <Link
              to="/kontakt"
              className={`${
                location.pathname === "/kontakt" ? "text-blue" : ""
              }`}
            >
              Kontakt
            </Link>
            <Link
              to="/produkter"
              className={`${
                location.pathname === "/produkter" ? "text-blue" : ""
              }`}
            >
              Produkter
            </Link>
            <Link
              to="/pricing"
              className={`${
                location.pathname === "/pricing" ? "text-blue" : ""
              }`}
            >
              Pricing
            </Link>
          </div>

          <div className="flex flex-row space-x-4 items-center">
            <Link to="/login">Login</Link>
            <Link to="/register" className="bg-blue rounded-lg p-3">
              Register
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

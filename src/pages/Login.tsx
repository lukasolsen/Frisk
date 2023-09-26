const Login: React.FC = () => {
  return (
    <div className="flex flex-row justify-between w-full h-screen overflow-hidden">
      <div className="w-3/6 bg-gradient-to-r from-primary  to-gray-800 h-full">
        <h1 className="text-3xl text-white">Frisk</h1>
      </div>
      <div className="w-4/6">
        <div className="flex flex-col gap-6 container justify-center items-center h-3/4">
          <h1 className="text-3xl">Logg inn</h1>
          <input
            type="text"
            placeholder="Epost"
            className="p-2 rounded-sm text-black w-1/2"
          />
          <input
            type="text"
            placeholder="Passord"
            className="p-2 rounded-sm text-black w-1/2"
          />
          <button className="bg-blue rounded-lg p-3 w-1/3">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

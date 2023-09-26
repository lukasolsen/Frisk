const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-screen items-center h-full">
      <img
        src="https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif"
        alt="404"
        height={40}
        width={440}
      />
      <h1>404 - Siden finnes ikke</h1>
      <div className="mt-4">
        <a href="/" className="text-blue hover:text-cyan-600">
          Gå tilbake til hjemmesiden
        </a>
      </div>
    </div>
  );
};

export default NotFound;

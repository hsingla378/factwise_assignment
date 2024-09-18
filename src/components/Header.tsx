const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-md rounded-b-lg">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Website Name */}
        <h1 className="text-3xl font-bold text-white">FactWise</h1>

        {/* Tagline */}
        <p className="text-white text-lg mt-2 md:mt-0 md:text-right">
          Source to Pay Cloud Platform for Procurement
        </p>
      </div>
    </header>
  );
};

export default Header;

import useStore from "../Stores/useStores";
import { useEffect } from "react";

const Header = () => {
  const { user, fetchUser } = useStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <header className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      {/* LEFT: Logo + Greeting */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto justify-between sm:justify-start">
        {/* Logo */}
        {/* <div className="flex items-center gap-2">
          <img
            src="https://bachecaa.vercel.app/image/logo.png" // replace with your logo
            alt="logo"
            className="w-auto h-8 sm:h-10"
          />
        </div> */}

        {/* Greeting */}
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">
            Ciao, {user?.name || "Dr. Luca"}!
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Inizia la giornata con un nuovo corso!
          </p>
        </div>
      </div>

      {/* RIGHT: XP + Avatar */}
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
        {/* XP Badge */}
        <div className="flex items-center bg-linear-to-r from-yellow-400 to-blue-500 text-white rounded-full px-3 sm:px-5 py-1.5 sm:py-2 shadow-md">
          <span className="text-base sm:text-lg font-bold mr-2 sm:mr-3">
            {user?.totalXp || 345}
          </span>
          <div className="bg-white rounded-full p-0.5 sm:p-1">
            <img
              src="https://bachecaa.vercel.app/image/headlogo.png" // replace with your icon
              alt="xp"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
        </div>

        {/* Avatar */}
        <img
          src={user?.avatar || "https://randomuser.me/api/portraits/men/1.jpg"}
          alt="avatar"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-auto rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;

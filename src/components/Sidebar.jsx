import {
  Home,
  FileText,
  PlayCircle,
  Archive,
  BookOpen,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Bacheca annunci", icon: FileText },
    { name: "Simulatore", icon: PlayCircle },
    { name: "Simulazioni archiviate", icon: Archive },
    { name: "Quadernino degli errori", icon: BookOpen },
  ];

  return (
    <div className="w-20 sm:w-24 md:w-64 lg:w-72 h-screen flex flex-col transition-all duration-300">
      {/* 🔹 TOP LOGO */}
      <div className="h-28 flex items-center justify-center sm:justify-center md:justify-center lg:justify-start px-2 sm:px-3 md:px-4 lg:px-6">
        <img
          src="https://bachecaa.vercel.app/image/logo.png"
          alt="logo"
          className="h-10 sm:h-11 md:h-12 lg:h-14 w-auto"
        />
      </div>

      {/* 🔹 SIDEBAR BODY */}
      <div
        className="flex-1 bg-linear-to-b from-[#1E5CCB] to-[#0F4DB8] 
      text-white flex flex-col justify-between 
      px-2 sm:px-3 md:px-4 lg:px-5 py-8 rounded-tr-[30px] sm:rounded-tr-[40px] md:rounded-tr-[50px] lg:rounded-tr-[60px]"
      >
        {/* MENU */}
        <ul className="space-y-2 sm:space-y-3 md:space-y-4 mt-6">
          {menu.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className={`flex items-center justify-center sm:justify-center md:justify-start gap-2 sm:gap-3 md:gap-4 px-2 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-3 md:py-4 rounded-2xl cursor-pointer transition-all duration-300
                ${
                  item.active ? "bg-black/40 shadow-inner" : "hover:bg-white/10"
                }`}
              >
                <Icon size={18} className="sm:size-5 md:size-5.5 lg:size-5.5" />
                <span className="hidden sm:hidden md:inline-block text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] font-medium">
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>

        {/* LOGOUT */}
        <button
          className="flex items-center justify-center gap-1 sm:gap-2 
        bg-white text-red-500 py-2 sm:py-3 md:py-4 rounded-full 
        font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm shadow-md 
        hover:scale-105 transition-all duration-300"
        >
          <LogOut size={16} className="sm:size-4.25 md:size-4.5 lg:size-4.5" />
          <span className="hidden sm:hidden md:inline-block">Logout</span>
        </button>
      </div>
    </div>
  );
}

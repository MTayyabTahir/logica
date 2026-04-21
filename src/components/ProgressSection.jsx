// components/ProgressSection.jsx
import { useEffect, useState } from "react";
import useStore from "../Stores/useStores";

const ProgressSection = () => {
  const { user, fetchUser } = useStore();
  const [animatedWidth, setAnimatedWidth] = useState(0);

  // Total XP needed for next milestone (example: 3000)
  const totalNeeded = 3000;
  const currentXP = user?.totalXp || 0;
  const percentage = Math.min((currentXP / totalNeeded) * 100, 100);

  useEffect(() => {
    fetchUser(); // ensure user data is loaded
  }, []);

  // Animate progress bar when percentage changes
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mt-6 bg-linear-to-r from-blue-300 to-blue-500 rounded-2xl flex items-center p-3 justify-between relative overflow-hidden">
      {/* Left Image */}
      <div className="w-32 -mb-7.5 hidden md:block">
        <img
          src="https://bachecaa.vercel.app/image/doc.png"
          alt="doctor"
          className="w-full"
        />
      </div>

      {/* Progress Bar Section */}
      <div className="flex-1 mx-6 py-4">
        {/* Progress Labels */}
        <div className="flex justify-between text-sm text-white mb-2">
          <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
            {currentXP} XP
          </span>
          <span className="opacity-70">{totalNeeded} XP</span>
        </div>

        {/* Bar */}
        <div className="w-full h-4 bg-white/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-300 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedWidth}%` }}
          ></div>
        </div>

        {/* Indicator Bubble */}
        <div
          className="absolute top-[50%] translate-y-[-50%] transition-all duration-1000"
          style={{ left: `${animatedWidth}%` }}
        >
          <div className="bg-white text-blue-600 text-xs px-2 py-1 rounded-full shadow whitespace-nowrap">
            {currentXP} XP
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-32 -mb-7.5  hidden md:block">
        <img
          src="https://bachecaa.vercel.app/image/appendicamice%203.png"
          alt="doctor2"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ProgressSection;

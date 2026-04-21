import { useEffect } from "react";
import useStore from "../Stores/useStores";

const LeaderboardRow = ({ user, rank }) => {
  const isTop1 = rank === 1;
  const isTop2 = rank === 2;
  const isTop3 = rank === 3;

  const getBorderColor = () => {
    if (isTop1) return "border-yellow-400";
    if (isTop2) return "border-blue-400";
    if (isTop3) return "border-orange-400";
    return "border-gray-300";
  };

  const getStars = () => {
    if (isTop1) return "★★★★★";
    if (isTop2) return "★★★★";
    if (isTop3) return "★★★";
    return "★★";
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 rounded-2xl px-4 py-3 shadow-sm">
      {/* Rank Circle */}
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border ${getBorderColor()} text-sm font-semibold`}
        >
          {rank}
        </div>

        {/* Avatar */}
        <div
          className={`w-10 h-10 rounded-full border-4 ${getBorderColor()}`}
        ></div>

        {/* Name + Stars */}
        <div>
          <p className="font-semibold text-gray-800">{user.name}</p>
          <p className="text-yellow-400 text-sm">{getStars()}</p>
        </div>

        {/* Winner Tag */}
        {isTop1 && (
          <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            WINNER
          </span>
        )}
      </div>

      {/* Score */}
      <div className="text-yellow-500 font-semibold">{user.score}</div>
    </div>
  );
};

const Leaderboard = () => {
  const { leaderboard, loading, error, fetchLeaderboard } = useStore();

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  if (loading.leaderboard) {
    return <p className="text-center">Loading...</p>;
  }

  if (error.leaderboard) {
    return <p className="text-red-500 text-center">{error.leaderboard}</p>;
  }

  return (
    <div className="bg-[#0F2C59] p-6 rounded-3xl text-white w-92.5 ">
      {/* Header */}
      <div className="border border-yellow-400 rounded-xl py-2 text-center mb-6">
        <h2 className="text-2xl font-bold tracking-widest">LEADERBOARD</h2>
      </div>

      {/* List */}
      <div className="space-y-4">
        {leaderboard.map((user, index) => (
          <LeaderboardRow key={user.id} user={user} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

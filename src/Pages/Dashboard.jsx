import { motion } from "framer-motion";
import Header from "../components/Header";
import ProgressSection from "../components/ProgressSection";
import ProjectList from "../components/Projectlist";
import Leaderboard from "../components/Leaderboard";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="p-4 sm:p-6"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 120,
          delay: 0.2,
        }}
      >
        <ProgressSection />
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          delay: 0.3,
        }}
        className="flex flex-col xl:flex-row gap-3 mt-6"
      >
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            delay: 0.4,
          }}
          className="w-full xl:col-span-2"
        >
          <ProjectList />
        </motion.div>

        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="w-full xl:w-auto"
        >
          <Leaderboard />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

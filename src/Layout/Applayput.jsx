// layouts/AppLayout.jsx
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../Pages/Dashboard";

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar with slide-in animation */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6,
        }}
      >
        <Sidebar />
      </motion.div>

      {/* Main content area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 flex flex-col overflow-y-auto"
      >
        {/* Header with slide down animation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: 0.1,
          }}
        >
          <Header />
        </motion.div>

        {/* Main content with fade in and scale */}
        <motion.main
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
          className="p-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key="dashboard"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Dashboard />
            </motion.div>
          </AnimatePresence>
        </motion.main>
      </motion.div>
    </div>
  );
};

export default AppLayout;

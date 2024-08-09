import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 rounded-lg shadow-lg cursor-pointer"
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-white">
        خوش آمدید
      </h2>
      <p className="text-lg leading-relaxed text-white text-center">
        مجلس اتحاد العلماء کی ویب سائٹ پر خوش آمدید، یہ تنظیم آپ کے علاقے کے
        اسلامی مسائل کے حل کے لئے بنائی گئی ہے۔
      </p>
    </motion.section>
  );
};

export default WelcomeSection;

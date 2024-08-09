import React from "react";
import { motion } from "framer-motion";

const ObjectivesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">ہمارے مقاصد</h2>
      <ul className="list-disc list-inside">
        <motion.li
          whileHover={{ scale: 1.05, color: "#6B46C1" }}
          className="mb-2 transition duration-300"
        >
          اسلامی مسائل کے حل کے لئے علماء کی رہنمائی فراہم کرنا۔
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05, color: "#6B46C1" }}
          className="mb-2 transition duration-300"
        >
          علاقے میں دینی تعلیم کو فروغ دینا۔
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05, color: "#6B46C1" }}
          className="mb-2 transition duration-300"
        >
          اتحاد بین المسلمین کو فروغ دینا۔
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05, color: "#6B46C1" }}
          className="mb-2 transition duration-300"
        >
          سماجی مسائل کا اسلامی نقطہ نظر سے حل فراہم کرنا۔
        </motion.li>
      </ul>
    </motion.section>
  );
};

export default ObjectivesSection;

import React from "react";
import { motion } from "framer-motion";

const ActivitiesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-6 rounded-lg shadow-md hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        ہم کیا کرتے ہیں
      </h2>
      <p className="text-lg leading-relaxed text-white">
        مجلس اتحاد العلماء مختلف اسلامی مسائل کے حل کے لئے مفتی حضرات کی رہنمائی
        فراہم کرتی ہے۔ ہم مختلف دینی تعلیم کے پروگرامز بھی منعقد کرتے ہیں اور
        سماجی مسائل پر اسلامی نقطہ نظر فراہم کرتے ہیں
      </p>
    </motion.section>
  );
};

export default ActivitiesSection;

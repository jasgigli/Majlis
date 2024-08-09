import React from "react";
import { motion } from "framer-motion";

const AreaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">ہمارا علاقہ</h2>
      <p className="text-lg leading-relaxed">
        مجلس اتحاد العلماء خالصہ 2 قاضی آباد پشاور میں واقع ہے، جہاں مختلف مساجد
        کے علماء اور اماموں کی نمائندگی کی جاتی ہے۔
      </p>
    </motion.section>
  );
};

export default AreaSection;

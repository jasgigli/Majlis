import React from "react";
import { motion } from "framer-motion";

const LatestNewsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">تازہ ترین خبریں</h2>
      <div className="space-y-4">
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="border-b pb-4 transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">
            شیخ نقیب اللہ مسجد کا مسۂلہ
          </h3>
          <p className="text-lg leading-relaxed">یہاں خبر کی تفصیل ہوگی۔</p>
        </motion.article>
        <motion.article
          whileHover={{ scale: 1.05 }}
          className="border-b pb-4 transition duration-300"
        >
          <h3 className="text-xl font-semibold mb-2">اجلاس</h3>
          <p className="text-lg leading-relaxed">
            تمام علماء کرام سے درخواست ہے کہ آج کے اجلاس میں اپنی شرکت کو یقینی
            ۔بنائیں۔
          </p>
          <p>08-August-2024</p>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default LatestNewsSection;

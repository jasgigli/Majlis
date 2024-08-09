import React from "react";
import { motion } from "framer-motion";

const LeadersSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">ہمارے راہنما</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="/nazirullah.jfif"
            alt="Leader 2"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">
            مولانا مفتی نذیر اللہ حقانی صاحب
          </h3>
          <p>سرپرست</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPWG9sY2QrCB5by8HR--QQ4VbWwdrbjt8lLIZLoDX_OTeI5wkIGvNzwD_JTZ_dXZTXew&usqp=CAU"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">
            شیخ قرآن و حدیث حضرت مفتی محمد ندیم محمود صاحب
          </h3>
          <p>سرپرست</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="pic.png"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">
            پیر طریقت حضرت مولانا عبدالبصیر عزیزی صاحب
          </h3>
          <p>سرپرست</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="malik.jfif"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">
            جناب ملک شاہ نواز اعوان صاحب
          </h3>
          <p>سرپرست</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="pic.png"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">
            مولانا قاری محمد یونس حقانی صاحب
          </h3>
          <p>امیر</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="sajadsubhan.png"
            alt="Leader 1"
            className="h-24 w-24 rounded-full mb-2 inset-0"
          />
          <h3 className="text-lg font-semibold">
            پیر طریقت مولانا سید سجاد سبحان صاحب
          </h3>
          <p>نائب امیر</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="pic.png"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">مولانا قاری داؤد شاہ صاحب</h3>
          <p>نائب امیر</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="haiderali.png"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">مولانا حیدرعلی اطرافی</h3>
          <p>جنرل سیکرٹری</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="qasim.png"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">مولانا مفتی محمد قاسم صاحب</h3>
          <p>جنرل سیکرٹری</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center transition duration-300"
        >
          <img
            src="abdulhaq.png"
            alt="Leader 1"
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="text-lg font-semibold">مولانا عبدالحق سرحدی </h3>
          <p>سیکرٹری اطلاعات</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LeadersSection;

import React from "react";

const AlertSection = () => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 border border-indigo-700 text-white px-6 py-4 rounded-lg shadow-lg animate-bounce text-2xl"
      role="alert"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black bg-white   bg-opacity-80 inline-block px-4 py-2 rounded-lg shadow-lg">
          ضروری اعلان
        </h2>
      </div>
      <br />

      <strong className="font-extrabold text-2xl font-serif">
        اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ
      </strong>
      <span className="block mt-2 text-lg font-sans leading-relaxed ">
        <span className="text-lg ">
          تمام علماء کرام سے درخواست ہے کہ آج کے اجلاس میں اپنی شرکت کو یقینی
          ۔بنائیں۔
        </span>
        <br />
        <strong className="underline decoration-white text-3xl ml-2 text-yellow-400">
          نوٹ:
        </strong>{" "}
        اجلاس میں صرف اور صرف علماء کرام کے حاضری ضروری ہے باقی دوستوں سے معذرت۔
        <br />
        <strong className="text-3xl ml-2 text-yellow-400">بوقت:</strong> آج بروز
        ہفتہ نماز عشاء کے فوراً بعد
        <br />
        <strong className="text-3xl ml-2 text-yellow-400">بمقام:</strong> جامع
        مسجد احناف لطیف آباد
      </span>
    </div>
  );
};

export default AlertSection;

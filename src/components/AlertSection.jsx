import React from "react";
import "./AlertSection.css";

const AlertSection = () => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 border border-transparent text-white px-8 py-6 rounded-2xl shadow-xl slow-bounce text-xl max-w-xl mx-auto"
      role="alert"
    >
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-indigo-700 bg-white bg-opacity-90 inline-block px-6 py-3 rounded-full shadow-md tracking-wide">
          ضروری اعلان
        </h2>
      </div>
      <br />

      <strong className="block text-2xl font-sans font-semibold text-center mt-4">
        اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ
      </strong>
      <span className="block mt-4 text-lg font-light leading-relaxed text-center">
        تمام علماء کرام سے درخواست ہے کہ آج کے اجلاس میں اپنی شرکت کو یقینی
        بنائیں۔
      </span>
      <br />
      <div className="mt-6 text-center">
        <strong className="text-2xl text-yellow-400 block underline decoration-dotted">
          نوٹ:
        </strong>
        <span className="block text-lg mt-2">
          اجلاس میں صرف اور صرف علماء کرام کے حاضری ضروری ہے باقی دوستوں سے
          معذرت۔
        </span>
        <br />
        <strong className="block text-xl mt-4 text-yellow-400">
          بوقت:
        </strong>{" "}
        <span className="block text-lg">
          آج بروز ہفتہ نماز عشاء کے فوراً بعد
        </span>
        <br />
        <strong className="block text-xl mt-4 text-yellow-400">
          بمقام:
        </strong>{" "}
        <span className="block text-lg">جامع مسجد احناف لطیف آباد</span>
      </div>
    </div>
  );
};

export default AlertSection;

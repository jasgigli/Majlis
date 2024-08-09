import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img
            src="https://seeklogo.com/images/O/oic-organisation-of-islamic-cooperation-logo-9DCAA292B1-seeklogo.com.png"
            alt="Islamic Organization Logo"
            className="h-10 mb-4 mx-auto"
          />
          <p className="text-sm">قرآن</p>
          <p className="text-sm">حديث</p>
          <p className="text-sm">فقہ</p>
          <p className="text-sm">تفسير</p>
          <p className="text-sm">اسلامی تاریخ</p>
          <p className="text-sm">دعوت و تربیت</p>
        </div>
        <div className="text-center">
          <p className="font-bold mb-4">رابطہ کریں</p>
          <p className="text-sm">--------0315</p>
          <p className="text-sm">پرائیویسی پالیسی</p>
          <p className="text-sm">شرائط و ضوابط</p>
          <p className="text-sm">مدد</p>
        </div>
        <div className="text-center">
          <p className="font-bold mb-4">ہمیں فالو کریں</p>
          <div className="flex justify-center">
            <a href="#" className="text-white mr-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mr-4">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm mt-8">
        جمیع حقوق © 2024 مجلس اتحاد العلماء محفوظ ہیں۔
      </p>
    </footer>
  );
};

export default Footer;

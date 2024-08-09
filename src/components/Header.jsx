import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-center">
        <div className="">
          <img src="pic.png" alt="Logo" className="h-12 rounded-full" />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">مجلس اتحاد العلماء</h1>
          <p className="text-sm text-center">معرفت کا راستہ</p>
        </div>
        <div className="">
          <img src="pic.png" alt="Logo" className="h-12 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;

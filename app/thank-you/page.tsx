import React from "react";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 text-center px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-slate-600 text-lg mb-6">
          Your request has been submitted successfully. <span className="font-semibold text-slate-800">Stone Concepts</span> will be touch with you shortly.
        </p>
        <p className="text-slate-500 text-base mt-4">
          If you need urgent assistance, call us at <span className="text-slate-800 font-medium">(978) 568-1911</span>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
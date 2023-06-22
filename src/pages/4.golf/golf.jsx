import React, { useState } from "react";
import GLogin from "../../components/golfiles/golfLogin.jsx";

const Golf = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500">
      <h1 className="text-4xl text-white font-bold mb-8">
        Login To Enter Scores
      </h1>
      <GLogin />
    </div>
  );
};

export default Golf;

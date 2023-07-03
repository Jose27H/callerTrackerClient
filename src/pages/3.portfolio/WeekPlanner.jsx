import React from "react";

const WeekPlanner = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-8">
      <a
        href="https://calendar.app.google/Cf2w2pQGRKooYUww5"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        onClick={handleButtonClick}
      >
        Hacer Cita
      </a>
      <div className="w-full h-96">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=hyperbariccarecenter%40gmail.com&ctz=America%2FNew_York"
          title="Google Calendar"
          className="border-0 w-full h-96"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default WeekPlanner;

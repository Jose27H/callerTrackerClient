import React from "react";

const WeekPlanner = () => {
  const handleButtonClick = () => {
    // Logic or actions to perform when the button is clicked
    console.log("Button clicked!");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <a
        href="https://calendar.app.google/Cf2w2pQGRKooYUww5"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Hacer Cita
      </a>
      <div className="mt-4">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=hyperbariccarecenter%40gmail.com&ctz=America%2FNew_York"
          title="Google Calendar"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default WeekPlanner;

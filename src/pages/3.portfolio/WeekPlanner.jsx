import React from "react";

const WeekPlanner = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center p-8"
      style={{
        backgroundImage:
          'url("https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700313943.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-screen h-4/5  rounded-lg overflow-hidden px-8">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=hyperbariccarecenter%40gmail.com&ctz=America%2FNew_York"
          title="Google Calendar"
          className="border-0 w-full h-full"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default WeekPlanner;

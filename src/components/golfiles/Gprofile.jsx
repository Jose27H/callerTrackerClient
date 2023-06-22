import React, { useEffect, useState } from "react";

const GProfile = () => {
  const [golferData, setGolferData] = useState(null);

  useEffect(() => {
    // Function to fetch golfer data from the backend
    const fetchGolferData = async () => {
      try {
        // Retrieve golferNumber from sessionStorage
        const golferNumber = sessionStorage.getItem("golferNumber");

        // Check if golferNumber exists in sessionStorage
        if (golferNumber) {
          const response = await fetch(
            `https://callertrackerserver.up.railway.app/api/GolferInfo?golferNumber=${golferNumber}`
          );
          const data = await response.json();
          setGolferData(data);
        }
      } catch (error) {
        console.error("Error fetching golfer data:", error);
      }
    };

    // Call the fetchGolferData function
    fetchGolferData();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded shadow">
      {golferData ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Golfer Name: {golferData.golname}
          </h2>
          <p>Number of Rounds: {golferData.numRounds}</p>
          <p>Average Putts: {golferData.averagePutts}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading golfer data...</p>
      )}
    </div>
  );
};

export default GProfile;

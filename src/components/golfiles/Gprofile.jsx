import React, { useEffect, useState } from "react";

const GProfile = () => {
  const [golferData, setGolferData] = useState(null);
  const [showSetupPage, setShowSetupPage] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseList, setCourseList] = useState([]);

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

    // Function to fetch the course list from the backend
    const fetchCourseList = async () => {
      try {
        const response = await fetch("/api/CourseList");
        const data = await response.json();
        setCourseList(data);
      } catch (error) {
        console.error("Error fetching course list:", error);
      }
    };

    // Call the fetchCourseList function
    fetchCourseList();
  }, []);

  const handleSetupPage = () => {
    setShowSetupPage(true);
  };

  const handleCourseSelect = (event) => {
    setCourseName(event.target.value);
  };

  const handleStartRound = async () => {
    try {
      // Retrieve golferNumber from sessionStorage
      const golferNumber = sessionStorage.getItem("golferNumber");

      // Check if golferNumber and courseName are not empty
      if (golferNumber && courseName) {
        // Send courseName and golferNumber to the backend
        const response = await fetch("/api/StartRound", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ golferNumber, courseName }),
        });

        // Handle response from the backend
        if (response.ok) {
          // Redirect to the newly generated round page
          window.location.href = "/Golf/Round";
        } else {
          console.error("Error starting round:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error starting round:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 bg-white rounded shadow">
      {golferData ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Golfer Name: {golferData.golname}
          </h2>
          <p>Number of Rounds: {golferData.numRounds}</p>
          <p>Average Putts: {golferData.averagePutts}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSetupPage}
          >
            Start Round
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Loading golfer data...</p>
      )}

      {showSetupPage && (
        <div className="mt-8">
          <select
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={courseName}
            onChange={handleCourseSelect}
          >
            <option value="">Select Course</option>
            {courseList.map((course) => (
              <option key={course.courseID} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleStartRound}
          >
            Start Round
          </button>
        </div>
      )}
    </div>
  );
};

export default GProfile;

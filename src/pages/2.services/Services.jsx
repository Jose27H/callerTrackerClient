import React, { useState, useEffect } from "react";

const Services = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    observations: "",
  });

  const fetchPatientData = () => {
    // Get the patient number from session storage
    const patientNumber = sessionStorage.getItem("patientNumber");

    // Make an API request to fetch patient data based on the patient number
    fetch(`http://localhost:5000/api/patientData?name=${patientNumber}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched patient data in state
        setPatientData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Fetch patient data from the backend on load
    fetchPatientData();
  }, []);

  const handleObservationsChange = (event) => {
    const { value } = event.target;
    setPatientData((prevPatientData) => ({
      ...prevPatientData,
      message: value,
    }));
  };

  const handleSubmit = () => {
    // Make an API request to update the observations in the database
    fetch("http://localhost:5000/api/updateObservations", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: patientData.message }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log(data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{patientData.name}</h2>
        <p className="mb-2">{patientData.phoneNumber}</p>
        <p className="mb-4">{patientData.email}</p>
        <textarea
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 mb-4"
          value={patientData.message}
          onChange={handleObservationsChange}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Services;

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    month: "",
    day: "",
    year: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Navigate to the specified URL

    const selectedDate = `${formData.month}-${formData.day}-${formData.year}`;

    fetch("callertrackerserver.up.railway.app/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, selectedDate }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log(data);
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          month: "",
          day: "",
          year: "",
          message: "",
        });

        sessionStorage.setItem("patientNumber", formData.phoneNumber);
        window.location.href = "/services";
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
      });
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const years = Array.from({ length: 103 }, (_, index) => 1920 + index); // Generate 83 years from 1940 to 2023

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      {/* form fields... */}

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;

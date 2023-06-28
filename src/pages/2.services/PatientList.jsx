import React, { useState, useEffect } from "react";

const PatientTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageSize = 10; // Number of rows per page

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch(
          `https://callertrackerserver.up.railway.app/api/patients?search=${searchTerm}&page=${currentPage}`
        );
        const data = await response.json();

        setPatients(data.patients);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, [searchTerm, currentPage]);

  const handleSearch = async () => {
    setCurrentPage(1);
    try {
      const response = await fetch(
        `https://callertrackerserver.up.railway.app/api/patients?search=${searchTerm}&page=${currentPage}`
      );
      const data = await response.json();

      setPatients(data.patients);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePatientClick = (phoneNumber) => {
    sessionStorage.setItem("patientNumber", phoneNumber);
    // Redirect to another page using react-router or window.location.href
    // Replace '/other-page' with the actual URL of the other page
    window.location.href = "/Services";
  };

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md mr-2"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 px-4 py-2">Name</th>
            <th className="border-b-2 border-gray-300 px-4 py-2">Email</th>
            <th className="border-b-2 border-gray-300 px-4 py-2">
              Phone Number
            </th>
            <th className="border-b-2 border-gray-300 px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="border-b border-gray-300 px-4 py-2 text-center">
                {patient.name}
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center">
                {patient.email}
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center">
                {patient.phonenumber}
              </td>
              <td className="border-b border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handlePatientClick(patient.phonenumber)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousPage}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="mx-2">{currentPage}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PatientTable;

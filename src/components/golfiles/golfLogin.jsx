import React, { useState } from "react";

export default function GLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");
  const [golferName, setGolferName] = useState("");
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);

  const handleRegisterBtn = () => {
    setShowRegistrationPopup(true);
  };

  const handleSubmitRegistration = () => {
    const formData = {
      phoneNumber,
      golferName,
      pin,
    };
    const pNumber = formData.phoneNumber;
    sessionStorage.setItem("golferNumber", pNumber);

    fetch("https://callertrackerserver.up.railway.app/api/GolfRegisterForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log(data);

        // Clear the form fields
        setPhoneNumber("");
        setPin("");
        setGolferName("");

        // Navigate to the specified URL
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
        alert("ERROR");
      });

    // Clear the form fields

    // Close the registration popup
    setShowRegistrationPopup(false);
  };

  const handleLogin = () => {
    // Send POST request to backend for login
    const formData = {
      phoneNumber,
      pin,
    };

    fetch("https://callertrackerserver.up.railway.app/api/GolfLoginForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data if needed
        console.log(data);
        // Clear the form fields
        setPhoneNumber("");
        setPin("");
        // Navigate to the specified URL
      })
      .catch((error) => {
        // Handle errors if any
        console.error(error);
        alert("ERROR");
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label className="block" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="border p-2 w-full"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label className="block" htmlFor="pin">
            PIN
          </label>
          <input
            type="password"
            id="pin"
            className="border p-2 w-full"
            placeholder="Enter your PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleRegisterBtn}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register Here
          </button>
        </div>
      </form>

      {showRegistrationPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Registration</h2>
            <form>
              <div>
                <label className="block" htmlFor="regName">
                  Name
                </label>
                <input
                  type="text"
                  id="regName"
                  className="border p-2 w-full"
                  placeholder="Enter your name"
                  value={golferName}
                  onChange={(e) => setGolferName(e.target.value)}
                />
              </div>
              <div>
                <label className="block" htmlFor="regPhone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="regPhone"
                  className="border p-2 w-full"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div>
                <label className="block" htmlFor="regPin">
                  PIN
                </label>
                <input
                  type="password"
                  id="regPin"
                  className="border p-2 w-full"
                  placeholder="Enter your PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleSubmitRegistration}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </button>
                <button
                  type="button"
                  onClick={() => setShowRegistrationPopup(false)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

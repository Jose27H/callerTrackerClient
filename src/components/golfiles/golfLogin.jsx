import { useState } from "react";

function gLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pin, setPin] = useState("");

  const handleLogin = () => {
    // Send POST request to backend with phoneNumber and pin
    // Implement your own logic here
    console.log("Logging in...");
  };

  const handleRegister = () => {
    // Send POST request to backend for registration
    // Implement your own logic here
    console.log("Registering...");
  };

  return (
    <div className="w-64 mx-auto mt-20">
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
            onClick={handleRegister}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default gLogin;

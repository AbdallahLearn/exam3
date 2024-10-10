import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const url = "https://66e7e6bbb17821a9d9da7058.mockapi.io/users";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const validation = () => {
    if (!name) {
      setMessage("Name is required");
      return false;
    }
    if (!email) {
      setMessage("Email is required");
      return false;
    }
    if (!password) {
      setMessage("Password is required");
      return false;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters");
      return false;
    }
    setMessage(""); // Clear message if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        console.log(data);
        alert("Signup successful");
        navigate("/login");
      } catch (error) {
        console.error("Error during signup:", error);
        setMessage("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div
      className="shadow-lg w-[60%] m-auto p-20 flex items-center mt-40 bg-center bg-no-repeat max-sm:w-[95%]"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/18/f5/df/18f5dfd7d6b71e85718e83386f194114.jpg)",
      }}
    >
      <div className="container w-96 m-auto">
        <h1 className="text-3xl text-center max-sm:text-lg text-white font-bold">
          Sign<span className="text-black">up</span>
        </h1>

        <label className="input input-bordered flex items-center gap-2 mt-5 opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Name"
            value={name}
            required
            onChange={handleNameChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mt-5 opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 mt-5 opacity-90">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </label>
        {message && <p className="text-red-500 text-center">{message}</p>}
        <p className="text-white">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 font-bold">
            Login
          </Link>
        </p>
        <button
          className="btn w-full mt-5 text-lg bg-blue-400 text-white"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;

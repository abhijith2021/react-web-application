import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ username: "", email: "", gender: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      const updatedData = { ...prev, [name]: value };

      // Console log based on field
      if (name === "username") {
        console.log("Username:", value);
      }
      if (name === "email") {
        console.log("Email:", value);
      }
      if (name === "gender") {
        console.log("Gender:", value);
      }

      return updatedData;
    });
  };

  const handleSubmit = () => {
    console.log("Final Data:", data);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <button onClick={handleSubmit}>Show All Data</button>
    </div>
  );
};

export default Login;

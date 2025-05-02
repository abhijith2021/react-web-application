// import React, { useState } from "react";

// const Login = () => {
//   const [data, setData] = useState({ username: "", email: "", gender: "" });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => {
//       const updatedData = { ...prev, [name]: value };

//       // Console log based on field
//       if (name === "username") {
//         console.log("Username:", value);
//       }
//       if (name === "email") {
//         console.log("Email:", value);
//       }
//       if (name === "gender") {
//         console.log("Gender:", value);
//       }

//       return updatedData;
//     });
//   };

//   const handleSubmit = () => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         name="username"
//         value={data.username}
//         onChange={handleChange}
//         placeholder="Username"
//       />
//       <input
//         type="text"
//         name="email"
//         value={data.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={data.gender === "male"}
//             onChange={handleChange}
//           />
//           Male
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={data.gender === "female"}
//             onChange={handleChange}
//           />
//           Female
//         </label>
//       </div>
//       <button onClick={handleSubmit}>Show All Data</button>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";

function Login() {
  const [value, setValue] = useState({ employee_name: "", employee_id: "" });

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    setValue((prev) => {
      const updatedValue = { ...prev, [name]: inputValue };

      // Logging specific field values
      if (name === "employee_name") {
        console.log("Employee Name:", inputValue);
      }
      if (name === "employee_id") {
        console.log("Employee ID:", inputValue);
      }

      return updatedValue;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Final Submitted Data:", value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="employee_name"
          value={value.employee_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="employee_id"
          value={value.employee_id}
          onChange={handleChange}
        />
        <button type="submit">Click Me</button>
      </form>
    </div>
  );
}

export default Login;

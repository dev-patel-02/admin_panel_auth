import React, { useState } from "react";
// import dataa from "./data.json";

function Account() {
  const [formData, setFormData] = useState({
    name: "tareq",
    phone: "1234",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: formData.name,
      phone: formData.phone,
    };
    console.log(JSON.stringify(newData))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Account;

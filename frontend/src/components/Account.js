import React, { useState } from "react";
// import dataa from "./data.json";

function Account() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [editingFormData, setEditingFormData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server and add it to the list of submitted forms
    // ...
    // Clear the form data to prepare for the next submission
    setFormData({ name: "", phone: "", email: "" });
  };

  const handleEdit = (form) => {
    // Set the editing form data to the clicked form's data
    setEditingFormData(form);
  };

  const handleSave = (event) => {
    event.preventDefault();
    // Update the submitted form list with the new form data
    // ...
    // Clear the editing form data to indicate that no form is currently being edited
    setEditingFormData(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          placeholder="Name"
        />
        <input
          type="text"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
          placeholder="Phone"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {/* Iterate over the list of submitted forms and display them */}
        {/* For each form, add an Edit button that calls handleEdit with the form data */}
        {/* {submittedForms?.map((form) => (
          <li key={form.id}>
            {form.name} | {form.phone} | {form.email} |{" "}
            <button onClick={() => handleEdit(form)}>Edit</button>
          </li>
        ))} */}
      </ul>

      {/* If there is an editing form data, display it */}
      {editingFormData && (
        <form onSubmit={handleSave}>
          <input
            type="text"
            value={editingFormData.name}
            onChange={(event) =>
              setEditingFormData({
                ...editingFormData,
                name: event.target.value,
              })
            }
            placeholder="Name"
          />
          <input
            type="text"
            value={editingFormData.phone}
            onChange={(event) =>
              setEditingFormData({
                ...editingFormData,
                phone: event.target.value,
              })
            }
            placeholder="Phone"
          />
          <input
            type="email"
            value={editingFormData.email}
            onChange={(event) =>
              setEditingFormData({
                ...editingFormData,
                email: event.target.value,
              })
            }
            placeholder="Email"
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}

export default Account;

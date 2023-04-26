import React, { useState, useEffect } from "react";
import AddParties from "./AddParties";
import AllParties from "./AllParties";
import { FaWpforms } from "react-icons/fa";

const AddForm = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("parties.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handlePartyEdit = (id) => {
    setEditMode(true);
    const selected = data?.find((d) => d._id === id);
    setFormData(selected);
    console.log(selected);

  };
  const mode = () => {
    setEditMode(false);
  };
  return (
    <div className="bg-[#F2EDF3] w-full px-14">
      <p className="pt-14">
        <span className="bg-gradient-to-r rounded from-pink-200 via-purple-500 to-[#B66DFF] p-3">
          <FaWpforms className=" mb-1 inline text-white" size={20} />
        </span>
        <span className="px-4 font-bold">Add Party</span>
      </p>
      <div className="flex justify-center pt-8 pb-14">
        <AddParties editMode={editMode} mode={mode} formData={formData}/>
        <AllParties data={data} handlePartyEdit={handlePartyEdit} />
      </div>
    </div>
  );
};

export default AddForm;

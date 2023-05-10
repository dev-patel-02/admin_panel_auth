import React, { useState, useEffect } from "react";
import AddParties from "./AddParties";
import AllParties from "./AllParties";
import { FaWpforms } from "react-icons/fa";

const AddForm = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [partyData, setPartyData] = useState([
    {
      _id: "1",
      name: "Hurley Hooper",
      contactPerson: "ZENTURY",
      email: "hurleyhooper@zentury.com",
      mobile: "(834) 414-2460",
    },
    {
      _id: "2",
      name: "Pena Taylor",
      contactPerson: "NETUR",
      email: "penataylor@netur.com",
      mobile: "(989) 472-2812",
    },
    {
      _id: "3",
      name: "Maritza Owens",
      contactPerson: "SPORTAN",
      email: "maritzaowens@sportan.com",
      mobile: "(880) 528-3428",
    },
    {
      _id: "4",
      name: "Rosario Ferguson",
      contactPerson: "ENDICIL",
      email: "rosarioferguson@endicil.com",
      mobile: "(942) 471-3620",
    },
  ]);
  useEffect(() => {
    fetch("parties.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handlePartyEdit = (id) => {
    setEditMode(true);
    const selected = partyData?.find((d) => d._id === id);
    setFormData(selected);
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
        <AddParties
          data={data}
          editMode={editMode}
          mode={mode}
          partyData={partyData}
          formData={formData}
          setPartyData={setPartyData} setEditMode={setEditMode}
        />
        <AllParties
          data={data}
          partyData={partyData}
          handlePartyEdit={handlePartyEdit}
        />
      </div>
    </div>
  );
};

export default AddForm;

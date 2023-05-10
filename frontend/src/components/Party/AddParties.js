import React, { useEffect, useState } from "react";
import { MdCancel, MdOutlineCheck } from "react-icons/md";

function AddParties({
  editMode,
  mode,
  formData,
  setEditMode,
  partyData,
  setPartyData,
}) {
  const filterItem = partyData.filter((f) => f._id !== formData._id);
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const [inputs, setInputs] = useState({
    name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    contactPerson: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    gstNo: "",
    fuelCharge: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    contactPerson: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    gstNo: "",
    fuelCharge: "",
  });

  const [isCash, setIsCash] = useState(true);
  const handleChange = (e) => {
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let check = false;

    if (inputs.name.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["name"]: "Party name should not be empty",
      }));
    }

    if (inputs.address_1.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["address_1"]: "Address 1 should not be empty",
      }));
    }

    if (inputs.address_2.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["address_2"]: "Address 2 should not be empty",
      }));
    }

    if (inputs.city.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["city"]: "City should not be empty",
      }));
    }

    if (inputs.state.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["state"]: "State should not be empty",
      }));
    }

    if (inputs.contactPerson.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["contactPerson"]: "Contact Person should not be empty",
      }));
    }

    if (inputs.mobile.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["mobile"]: "Mobile should not be empty",
      }));
    }
    if (inputs.phone.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["phone"]: "Phone should not be empty",
      }));
    } else if (!/^\d{11}$/.test(inputs.phone)) {
      setErrors((prev) => ({
        ...prev,
        ["phone"]: "Please enter a valid phone number",
      }));
    }

    if (inputs.email.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["email"]: "Email should not be empty",
      }));
    }

    if (!isValidEmail(inputs.email)) {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["email"]: "Invalid email address",
      }));
    }

    if (inputs.gstNo.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["gstNo"]: "GST No should not be empty",
      }));
    }

    if (inputs.fuelCharge.trim() === "") {
      check = true;
      setErrors((prev) => ({
        ...prev,
        ["fuelCharge"]: "Fuel Charge should not be empty",
      }));
    }

    if (check) return;
    const partyFormData = {
      _id: Date.now(),
      name: inputs.name,
      address1: inputs.address_1,
      address2: inputs.address_2,
      city: inputs.city,
      state: inputs.state,
      contactPerson: inputs.contactPerson,
      phone: inputs.phone,
      mobile: inputs.mobile,
      email: inputs.email,
      website: inputs.website,
      gstNo: inputs.gstNo,
      fuelCharge: inputs.fuelCharge,
      isCash: isCash,
    };

    const newFormArray = [...filterItem, partyFormData];
    localStorage.setItem("party", JSON.stringify(newFormArray));
    if (newFormArray) {
      setPartyData(newFormArray);
      setInputs({
        name: "",
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        contactPerson: "",
        phone: "",
        mobile: "",
        email: "",
        website: "",
        gstNo: "",
        fuelCharge: "",
      });
    }
    setEditMode(false);
  };
  useEffect(() => {
    const data = localStorage.getItem("party");
    const data2 = JSON.parse(data);
    if (data) {
      setPartyData(data2);
    }
  }, [setPartyData]);
  return (
    <form
      onSubmit={handleSubmit}
      className={
        editMode
          ? "w-2/5 border-4 border-orange-400 bg-white shadow-xl rounded"
          : "w-2/5 border-t-4 border-orange-400 bg-white shadow-xl rounded"
      }
    >
      <div className="flex justify-between items-center border-b  font-bold shadow-md py-1 px-2 mb-3">
        <h2 className="text-xl">Add Party</h2>
        {editMode ? (
          <p
            onClick={mode}
            className="bg-red-500 cursor-pointer text-white flex justify-center text-xl items-center px-2 py-2"
          >
            <MdCancel size={28} className="mr-4" /> Cancel Edit
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="px-6">
        <div className="flex items-center my-1">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Name
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="name"
              placeholder="PARTY NAME"
              className="border px-4 py-2 outline-none text-xl w-full"
              defaultValue={editMode ? formData.name : inputs.name}
              name="name"
              onChange={handleChange}
              // defaultValue={editMode ? formData.name : name}
              // onChange={(e) => setName(e.target.value)}
            />
            <p className="text-red-500">{errors.name}</p>
          </div>
        </div>
        <div className="flex mt-6">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Address
          </label>
          <div className="w-3/4">
            <div className="">
              <input
                type="text"
                id="address"
                placeholder="ADDRESS LINE 1"
                className="border px-4 py-2 outline-none text-xl w-full"
                defaultValue={editMode ? formData?.address1 : inputs.address_1}
                // onChange={(e) => setAddress(e.target.value)}
                // value={inputs.address_1}
                name="address_1"
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.address_1}</p>
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="address_2"
                placeholder="ADDRESS LINE 2 "
                className="border px-4 py-2 outline-none text-xl w-full"
                defaultValue={
                  editMode ? formData?.address2 : inputs?.address_2
                }
                // onChange={(e) => setAddress2(e.target.value)}
                // value={inputs.address_2}
                name="address_2"
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.address_2}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            City
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="city"
              placeholder="CITY"
              className="border px-4 py-2 outline-none text-xl w-full"
              // value={inputs.city}
              name="city"
              onChange={handleChange}
              defaultValue={editMode ? formData?.city : inputs.city}
              // onChange={(e) => setCIty(e.target.value)}
            />
            <p className="text-red-500">{errors.city}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            State
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="State"
              placeholder="STATE"
              className="border px-4 py-2 outline-none text-xl w-full"
              // value={inputs.state}
              name="state"
              onChange={handleChange}
              defaultValue={editMode ? formData?.state : inputs.state}
              // onChange={(e) => setState(e.target.value)}
            />
            <p className="text-red-500">{errors.state}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Contact Person
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="contactPerson"
              placeholder="CONTACT PERSON NAME"
              className="border px-4 py-2 outline-none text-xl w-full"
              defaultValue={
                editMode ? formData?.contactPerson : inputs.contactPerson
              }
              // onChange={(e) => setContactPerson(e.target.value)}
              // value={inputs.contactPerson}
              name="contactPerson"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.contactPerson}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Phone
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="phone"
              placeholder="PHONE"
              className="border px-4 py-2 outline-none text-xl w-full"
              // value={inputs.phone}
              name="phone"
              onChange={handleChange}
              defaultValue={editMode ? formData?.phone : inputs.phone}
              // onChange={(e) => setPhone(e.target.value)}
            />
            <p className="text-red-500">{errors.phone}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Mobile
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="mobile"
              placeholder="MOBILE NO"
              className="border px-4 py-2 outline-none text-xl w-full"
              // value={inputs.mobile}
              defaultValue={editMode ? formData?.phone : inputs.mobile}
              name="mobile"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.mobile}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Email
          </label>
          <div className="w-3/4">
            <input
              type="eamil"
              id="eamil"
              placeholder="EMAIL ADDRESS"
              className="border px-4 py-2 outline-none text-xl w-full"
              defaultValue={editMode ? formData?.email : inputs.email}
              // onChange={(e) => setEmail(e.target.value)}
              // value={inputs.email}
              name="email"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.email}</p>
          </div>
        </div>{" "}
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Website
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="website"
              placeholder="WEBSITE"
              className="border px-4 py-2 outline-none text-xl w-full"
              defaultValue={editMode ? formData?.website : inputs.website}
              // onChange={(e) => setWebsite(e.target.value)}
              // value={inputs.website}
              name="website"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.website}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Gst No
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="gstNo"
              placeholder="GST NO"
              className="border px-4 py-2 outline-none text-xl w-full"
              defaultValue={editMode ? formData?.gstNo : inputs.gstNo}
              // onChange={(e) => setGstNo(e.target.value)}
              // value={inputs.gstNo}
              name="gstNo"
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.gstNo}</p>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <label htmlFor="name" className="w-1/4 text-xl text-gray-400">
            Fuel Charge(%)
          </label>
          <div className="w-3/4">
            <input
              type="text"
              id="name"
              placeholder="FUEL CHARGE"
              className="border px-4 py-2 outline-none text-xl w-full"
              defaultValue={editMode ? formData?.fuelCharge : inputs.fuelCharge}
              // onChange={(e) => setFuelCharge(e.target.value)}

              // value={inputs.fuelCharge}
              name="fuelCharge"
              onChange={handleChange}
            />

            <p className="text-red-500">{errors.fuelCharge}</p>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <div>
            <div className=" mb-4 flex ml-4 items-center">
              <div
                onClick={() => setIsCash(!isCash)}
                className="border w-6 h-6 rounded-full"
              >
                {isCash && <MdOutlineCheck size={20} className="text-center" />}
              </div>
              <span className="label-text ml-3 text-gray-500 font-semibold">
                : Is Cash
              </span>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-md px-4 py-2 hover:bg-purple-600 rounded-md uppercase font-semibold text-white"
            >
              {editMode ? "Update Party" : "Create Party"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddParties;

import React, { useState } from "react";
import { MdCancel, MdOutlineCheck } from "react-icons/md";

function AddParties({ editMode, mode, formData }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCIty] = useState("");
  const [state, setState] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [fuelCharge, setFuelCharge] = useState("");
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [addressError2, setAddressError2] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [contactNameError, setContactNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [gstError, setGstError] = useState("");
  const [fuelChargeError, setFuelChargeError] = useState("");
  const [isCash, setIsCash] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else {
      setNameError("");
    }
    if (!address) {
      setAddressError("Address is required");
      valid = false;
    } else {
      setAddressError("");
    }
    if (!address2) {
      setAddressError2("Address is required");
      valid = false;
    } else {
      setAddressError2("");
    }
    if (!city) {
      setCityError("City is required");
      valid = false;
    } else {
      setCityError("");
    }
    if (!state) {
      setStateError("State is required");
      valid = false;
    } else {
      setStateError("");
    }
    if (!contactPerson) {
      setContactNameError("Contact person name is required");
      valid = false;
    } else {
      setContactNameError("");
    }
    if (!phone) {
      setPhoneError("Phone number is required");
      valid = false;
    } else if (!/^\d{11}$/.test(phone)) {
      setPhoneError("Please enter a valid phone number");
      valid = false;
    } else {
      setPhoneError("");
    }
    if (!mobile) {
      setMobileError("Mobile number is required");
      valid = false;
    } else if (!/^\d{11}$/.test(mobile)) {
      setMobileError("Please enter a valid mobile number");
      valid = false;
    } else {
      setMobileError("");
    }
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!website) {
      setWebsiteError("Website is required");
      valid = false;
    } else {
      setWebsiteError("");
    }
    if (!gstNo) {
      setGstError("GST number is required");
      valid = false;
    } else {
      setGstError("");
    }
    if (!fuelCharge) {
      setFuelChargeError("Fuel Charge is required");
      valid = false;
    } else if (!/^[0-9]+$/.test(fuelCharge)) {
      setFuelChargeError("Please enter number");
      valid = false;
    } else {
      setFuelChargeError("");
    }
    if (valid) {
      console.log({
        name,
        address,
        city,
        state,
        contactPerson,
        phone,
        mobile,
        email,
        website,
        gstNo,
        fuelCharge,
        isCash,
      });
    }
  };
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
              value={editMode ? formData.name : name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <span style={{ color: "red" }}>{nameError}</span>}
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
                value={editMode ? formData?.address : address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {addressError && (
                <span style={{ color: "red" }}>{addressError}</span>
              )}
            </div>
            <div className="mt-2">
              <input
                type="text"
                id="address2"
                placeholder="ADDRESS LINE 2 "
                className="border px-4 py-2 outline-none text-xl w-full"
                value={editMode ? formData?.address2 : address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
              {addressError2 && (
                <span style={{ color: "red" }}>{addressError2}</span>
              )}
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
              value={editMode ? formData?.city : city}
              onChange={(e) => setCIty(e.target.value)}
            />
            {cityError && <span style={{ color: "red" }}>{cityError}</span>}
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
              value={editMode ? formData?.state : state}
              onChange={(e) => setState(e.target.value)}
            />
            {stateError && <span style={{ color: "red" }}>{stateError}</span>}
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
              value={editMode ? formData?.contactPerson : contactPerson}
              onChange={(e) => setContactPerson(e.target.value)}
            />
            {contactNameError && (
              <span style={{ color: "red" }}>{contactNameError}</span>
            )}
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
              value={editMode ? formData?.phone : phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <span style={{ color: "red" }}>{phoneError}</span>}
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
              value={editMode ? formData?.mobile : mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}
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
              value={editMode ? formData?.email : email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
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
              value={editMode ? formData?.website : website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            {websiteError && (
              <span style={{ color: "red" }}>{websiteError}</span>
            )}
          </div>
        </div>{" "}
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
              value={editMode ? formData?.gstNo : gstNo}
              onChange={(e) => setGstNo(e.target.value)}
            />
            {gstError && <span style={{ color: "red" }}>{gstError}</span>}
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
              value={editMode ? formData?.fuelCharge : fuelCharge}
              onChange={(e) => setFuelCharge(e.target.value)}
            />
            {fuelChargeError && (
              <span style={{ color: "red" }}>{fuelChargeError}</span>
            )}
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

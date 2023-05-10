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
}
//  else if (!/^\d{11}$/.test(mobile)) {
//   setMobileError("Please enter a valid mobile number");
//   valid = false;
// }
else {
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

export default valid;

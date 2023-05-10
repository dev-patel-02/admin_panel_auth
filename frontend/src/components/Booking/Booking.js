import React, { useState } from "react";

import BookingSearchResult from "./BookingSearchResult";
import BookingForm from "./BookingForm";
import { MdOutlineAddchart } from "react-icons/md";

function Booking() {
  const [booking, setBooking] = useState([
    {
      carrier: "Surface",
      center: "Mr Manoj tripati hospital (Mumbai)",
      consignment: "14575121",
      date: "2023-03-27T13:01:49.000Z",
      grossAmt: "4500",
      id: 1681909336006,
      insuranceAmt: "4500",
      mobileNo: "01905243744",
      netAmt: "9000",
      package: "Shimlakia",
      percelAmt: "-3",
      receiver: "Shahil2",
      remark: "vsdvsdv",
      sender: "Exelenct Global llp",
      weight: "10",
    },
    {
      carrier: "Janani",
      center: "Shova Corporation",
      consignment: "1477121",
      date: "2023-03-27T13:01:49.000Z",
      grossAmt: "4700",
      id: 1681789378366,
      insuranceAmt: "4200",
      mobileNo: "01475243744",
      netAmt: "78000",
      package: "Oporajita",
      percelAmt: "700",
      receiver: "Jhumla",
      remark: "vsdfdbfdgsdv",
      sender: "Benchmark Apparels",
      weight: "1000",
    },
    {
      carrier: "Janani",
      center: "Liber Brothers",
      consignment: "1477121",
      date: "2023-03-27T13:01:49.000Z",
      grossAmt: "4700",
      id: 1681789336006,
      insuranceAmt: "4200",
      mobileNo: "01475243744",
      netAmt: "78000",
      package: "Oporajita",
      percelAmt: "700",
      receiver: "Jhumla",
      remark: "vsdfdbfdgsdv",
      sender: "Robi Exista ltd",
      weight: "1000",
    },
    {
      carrier: "Janani",
      center: "Al Haramain Association",
      consignment: "1477121",
      date: "2023-03-27T13:01:49.000Z",
      grossAmt: "4700",
      id: 1681789336786,
      insuranceAmt: "4200",
      mobileNo: "01475243744",
      netAmt: "78000",
      package: "Oporajita",
      percelAmt: "700",
      receiver: "Jhumla",
      remark: "vsdfdbfdgsdv",
      sender: "Shova Corporation",
      weight: "1000",
    },
  ]);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const handleEdit = (id) => {
    setEditMode(true);
    const selected = booking?.find((b) => b.id === id);
    setFormData(selected);
  };
  const mode = () => {
    setEditMode(false);
  };
  return (
    <div className="md:px-14 bg-[#F2EDF3]">
      <p className="pt-14">
        <span className="bg-gradient-to-r rounded from-pink-200 via-purple-500 to-[#B66DFF] p-3">
          <MdOutlineAddchart className=" mb-1 inline text-white" size={20} />
        </span>
        <span className="px-4 font-bold">Booking</span>
      </p>
      <div className="md:flex justify-between my-8 w-full">
        <BookingForm
          mode={mode}
          editMode={editMode}
          booking={booking}
          setBooking={setBooking}
          formData={formData}
          setEditMode={setEditMode}
        />
        <BookingSearchResult handleEdit={handleEdit} booking={booking} />
      </div>
    </div>
  );
}

export default Booking;

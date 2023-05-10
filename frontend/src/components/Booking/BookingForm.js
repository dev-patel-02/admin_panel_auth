import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";

function BookingForm({ booking, setBooking, editMode, mode, formData }) {
  const filterItem = booking.filter((f) => f.id !== formData.id);
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const ammount =
      Number(data.grossAmt) +
      Number(data.insuranceAmt) +
      Number(data.percelAmt);
    const formData = {
      id: Date.now(),
      date: startDate,
      carrier: data?.carrier,
      center: data?.center,
      consignment: data?.consignment,
      grossAmt: data?.grossAmt,
      insuranceAmt: data?.insuranceAmt,
      mobileNo: data?.mobileNo,
      netAmt: ammount,
      package: data?.package,
      percelAmt: data?.percelAmt,
      receiver: data?.receiver,
      remark: data?.remark,
      sender: data?.sender,
      weight: data?.weight,
    };
    console.log(formData);
    const newFormArray = [...filterItem, formData];
    localStorage.setItem("booking", JSON.stringify(newFormArray));
    if (newFormArray) {
      setBooking(newFormArray);
    }
    reset();
  };
  useEffect(() => {
    const bookingData = localStorage.getItem("booking");
    const data2 = JSON.parse(bookingData);
    if (bookingData) {
      setBooking(data2);
    }
  }, [setBooking]);

  return (
    <section
      className={
        editMode
          ? "md:w-2/5 bg-blueGray-50 border-4 border-orange-400 mr-8"
          : "md:w-2/5 bg-blueGray-50 border-t-4 border-orange-400 mr-8"
      }
    >
      <div className="flex-auto px-4 py-2 bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex justify-between h-8 items-center mt-3 mb-6">
            <h6 className="text-blueGray-400 text-sm  font-bold uppercase">
              Account Booking
            </h6>
            {editMode ? (
              <p
                onClick={mode}
                className="bg-red-500 cursor-pointer text-white flex justify-center text-xl items-center px-2 py-3"
              >
                <MdCancel size={28} className="mr-4" /> Cancel Edit
              </p>
            ) : (
              <p>E-WayBill(0.2%)</p>
            )}
          </div>
          <div className="">
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <DatePicker
                  className="border-l-4 outline-none border-l-red-500 px-3 py-2 w-full text-gray-500 rounded text-sm border "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="d MMMM yyyy"
                />
              </div>
            </div>
            <div className="w-full  px-4">
              <div className="relative w-full mb-3">
                <input
                  type="text"
                  placeholder="SENDER"
                  {...register("sender", { required: true })}
                  aria-invalid={errors.sender ? "true" : "false"}
                  className="border-l-4 outline-none border border-l-red-500 px-3 py-2 text-gray-500 rounded text-sm  w-full"
                  defaultValue={editMode ? formData.sender : ""}
                />
                {errors.sender?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Sender name is required
                  </p>
                )}
              </div>
            </div>
            <div className="w-full px-4">
              <div className="relative w-full mb-3">
                <input
                  type="text"
                  placeholder="CENTER"
                  {...register("center", { required: true })}
                  aria-invalid={errors.center ? "true" : "false"}
                  className="border-l-4 outline-none border border-l-red-500 px-3 py-2 rounded text-sm w-full"
                  defaultValue={editMode ? formData.center : ""}
                />
                {errors.center?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Center name is required
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-full">
              <div className="md:w-2/3 px-4">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    placeholder="RECEIVER"
                    {...register("receiver", { required: true })}
                    aria-invalid={errors.receiver ? "true" : "false"}
                    className="px-3 py-2 outline-none border text-gray-500 rounded text-sm w-full"
                    defaultValue={editMode ? formData.receiver : ""}
                  />
                  {errors.receiver?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Receiver name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="md:w-1/3 md:px-4 md:mr-7">
                <div className="relative w-full mb-3">
                  <input
                    type="text"
                    placeholder="MOBILE"
                    {...register("mobileNo", { required: true })}
                    aria-invalid={errors.mobileNo ? "true" : "false"}
                    className="px-3 py-2 outline-none border text-gray-500 rounded text-sm "
                    defaultValue={editMode ? formData.mobileNo : ""}
                  />
                  {errors.mobileNo?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Mobile No is required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <div className="flex flex-wrap py-2">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Carrier
                </label>
                <div className="flex">
                  <div className=" w-2/5">
                    <input
                      type="text"
                      {...register("carrier", { required: true })}
                      aria-invalid={errors.carrier ? "true" : "false"}
                      className="border-l-4 outline-none border border-l-red-500 px-3 py-2  text-gray-500 rounded text-sm "
                      defaultValue={editMode ? formData.carrier : ""}
                    />
                    {errors.carrier?.type === "required" && (
                      <p role="alert" className="text-red-500">
                        Carrier is required
                      </p>
                    )}
                  </div>
                  <div className="w-3/5">
                    <input
                      type="text"
                      {...register("consignment", { required: true })}
                      aria-invalid={errors.consignment ? "true" : "false"}
                      className=" outline-none border px-3 py-2 rounded text-gray-500 text-sm  w-full"
                      placeholder="Consignment no eg. 123456"
                      defaultValue={editMode ? formData.consignment : ""}
                    />
                    {errors.consignment?.type === "required" && (
                      <p role="alert" className="text-red-500 ">
                        Consignment No is required
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12 py-2 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Package Type
                </label>
                <input
                  type="text"
                  {...register("package", { required: true })}
                  aria-invalid={errors.package ? "true" : "false"}
                  className="border-l-4 outline-none border border-l-red-500 px-3 py-2 text-gray-500 rounded text-sm  w-full"
                  defaultValue={editMode ? formData.package : ""}
                />
                {errors.package?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Package is required
                  </p>
                )}
              </div>
            </div>
            <div className="w-full lg:w-4/12 py-2 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Weight
                </label>
                <input
                  type="number"
                  {...register("weight", {
                    required: true,
                  })}
                  aria-invalid={errors.weight ? "true" : "false"}
                  className="border-l-4 outline-none border border-l-red-500 px-3 py-2 text-gray-500  rounded text-sm  w-full"
                  placeholder="1"
                  defaultValue={editMode ? formData.weight : ""}
                />
                {errors.weight?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Weight is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex px-4">
            <div className="w-3/4 mr-4">
              <input
                type="text"
                disabled
                className="px-3 py-2 text-black font-bold bg-gray-200 rounded text-sm  w-full"
                value="GROSS Amt"
              />
            </div>
            <div className=" w-1/4">
              <input
                type="number"
                {...register("grossAmt", {
                  required: true,
                })}
                aria-invalid={errors.grossAmt ? "true" : "false"}
                className="border  px-3 py-2  outline-none rounded text-gray-500 text-sm  w-full"
                placeholder="Amount"
                defaultValue={editMode ? formData.grossAmt : ""}
              />
              {errors.grossAmt?.type === "required" && (
                <p role="alert" className="text-red-500">
                  Amount is required
                </p>
              )}
            </div>
          </div>

          <div className="w-full pt-3 px-4">
            <div className="relative w-full mb-3">
              <label
                className="block text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Other Charge
              </label>
              <div className="flex">
                <div className="w-3/4 mr-4">
                  <input
                    type="text"
                    disabled
                    className="px-3 py-2 text-black font-bold bg-gray-200 rounded text-sm  w-full"
                    value="Insurance Amt"
                  />
                </div>
                <div className=" w-1/4">
                  <input
                    type="number"
                    {...register("insuranceAmt", {
                      required: true,
                    })}
                    aria-invalid={errors.insuranceAmt ? "true" : "false"}
                    className="border  outline-none px-3 py-2 rounded text-gray-500 text-sm  w-full"
                    placeholder="Amount"
                    defaultValue={editMode ? formData.insuranceAmt : ""}
                  />
                  {errors.insuranceAmt?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Amount is required
                    </p>
                  )}
                </div>
              </div>

              <div className="flex mt-4">
                <div className="w-3/4 mr-4">
                  <input
                    type="text"
                    disabled
                    className="px-3 py-2 border text-black font-bold bg-gray-200 rounded text-sm  w-full"
                    value="Percel  value"
                  />
                </div>
                <div className=" w-1/4">
                  <input
                    type="number"
                    {...register("percelAmt", {
                      required: true,
                    })}
                    aria-invalid={errors.percelAmt ? "true" : "false"}
                    className="border px-3 py-2 outline-none rounded text-gray-500 text-sm  w-full"
                    placeholder="Amount"
                    defaultValue={editMode ? formData.percelAmt : ""}
                  />
                  {errors.percelAmt?.type === "required" && (
                    <p role="alert" className="text-red-500">
                      Amount is required
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap py-2">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <textarea
                  {...register("remark", {
                    required: true,
                  })}
                  aria-invalid={errors.remark ? "true" : "false"}
                  type="text"
                  placeholder="Remark"
                  className="border  px-3 outline-none py-6 text-black bg-white rounded text-sm  w-full"
                  rows="3"
                  defaultValue={editMode ? formData.remark : ""}
                />
                {errors.remark?.type === "required" && (
                  <p role="alert" className="text-red-500">
                    Remark is required
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-4">
            <input
              className="px-6 py-2 cursor-pointer bg-purple-500 font-bold text-white rounded-md hover:bg-purple-400"
              type="submit"
              value={editMode ? "Update" : "Submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default BookingForm;

import React from "react";

function Profile() {
  return (
    <div className="py-10 bg-[#F2EDF3]">
      <div className="md:flex items-center mx-24 md:1/5 border-2 py-6 px-6 bg-white">
        <div className="px-14">
          <img
            className="w-60 h-60 rounded-full border-8 border-purple-600"
            src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="md:w-2/5">
          <h1 className="text-3xl font-bold pb-2">Tarequl Islam</h1>
          <p className="text-lg">Full Stack Developer</p>
          <span className="text-sm text-blue-600 font-semibold">
            Epic Coder
          </span>
          <div className="pt-2">
            <button
              className="bg-green-400 px-8 py-2 text-xl mr-8 font-semibold"
              type=""
            >
              Contact
            </button>
            <button
              className="border-2 border-green-400 px-8 py-2 text-xl font-semibold"
              type=""
            >
              Resume
            </button>
          </div>
        </div>
        <div className="border-l-8 border-purple-400 px-24 md:w-2/5">
          <div className="flex">
            <p className="font-semibold w-28">Availability:</p>
            <p className="px-8">Active</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">Age:</p>
            <p className="px-8">70</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">Location:</p>
            <p className="px-8">Dhaka</p>
          </div>
          <div className="flex">
            <p className="font-semibold w-28">Designation:</p>
            <p className="px-8">Full Stack Developer</p>
          </div>
        </div>
      </div>
      <div className="md:flex px-20 py-24">
        <div className="mx-4 md:w-1/5 bg-white p-4">
          <h1 className="text-2xl font-bold text-center py-8">Website</h1>
          <p className="px-8 pt-4 text-blue-600">Website</p>
          <p className="px-8 pt-4 text-blue-600">Blog</p>
          <p className="px-8 pt-4 text-blue-600">Portfolio</p>
        </div>
        <div className="mx-4 md:w-4/5 bg-white p-4">
          <h1 className="text-2xl font-bold text-certer">About</h1>
          <p className="py-8">
            Hundreds of components, scalable assets, nine dashboard designs,
            error 404 page, and profile page all come from the free template.
            error 404 page, and profile page all come from the free template
            .error 404 page, and profile page all come from the free template
            .error 404 page, and profile page all come from the free template
          </p>
          <hr />
          <p className="uppercase font-bold text-xl py-4">Skill</p>
          <div className="md:flex flex-wrap">
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">HTML</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">CSS</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">Javascript</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">React</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">Vue</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">Next.js</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">Nest.js</p>
            <p className="border-2 mt-3 mx-2 rounded-3xl px-4 py-1">Prizma</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Profile;

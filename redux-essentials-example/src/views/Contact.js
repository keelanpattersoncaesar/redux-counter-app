import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-orange-200 to-red-300 min-h-screen flex justify-center">
      <div className="font-Roboto text-center">
        <h1 className="text-7xl mb-2 ">Contact Me!</h1>
        <form
          method="POST"
          action="https://getform.io/f/27bfbd4b-3839-4380-8be8-8456579dacc4"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="py-4">
              Use this form or email me at keelanpattersoncaesar@gmail.com
            </p>
          </div>
          <input
            className="p-2"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="my-4 p-2"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="p-2"
            name="message"
            rows="10"
            placeholder="Message"
            minLength="50"
            maxLength="1000"
            required
          ></textarea>
          <button className="text-white border-2 bg-[#E76F51] hover:border-[#E76F51] hover:text-black hover:bg-[#EE9882] px-4 py-3 my-8 mx-auto flex items-center">
            Connect with me!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

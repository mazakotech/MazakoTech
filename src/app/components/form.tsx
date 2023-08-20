import React from "react";

const form = () => {
  return (
    <form
      className="w-full max-w-lg mx-auto font-sans"
      id="contact"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScEM5GOF2d8Zcne_s7PEgnXTqiRj0dWQexPyf27CVd_uR0Q6Q/formResponse"
      method="POST"
      target="_blank"
    >
      <h1 className="text-center font-semibold py-4 text-red-600  text-xl">
        Contact Us
      </h1>
      <div className="flex flex-wrap mx-6 sm:-mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="name"
            placeholder="nobody"
            name="entry.1350852682"
          />
          <p className=" text-sm text-red-600  italic"></p>
        </div>
      </div>
      <div className="flex flex-wrap mx-6 sm:-mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white text-sm font-bold mb-2">
            E-mail
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="email"
            name="entry.46002991"
            placeholder="abcd@example.com"
          />
          <p className=" text-sm text-red-600  italic"></p>
        </div>
      </div>
      <div className="flex flex-wrap mx-6 sm:-mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white font-bold mb-2">
            Phone No
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="email"
            type="number"
            placeholder="Please include country code"
            name="entry.834633365"
          />
          <p className="text-red-600 text-sm  italic"></p>
        </div>
      </div>
      <div className="flex flex-wrap mx-6 sm:-mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide   text-white  font-bold mb-2">
            Message
          </label>
          <textarea
            className=" resize-y  appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 "
            id="message"
            placeholder="Drag edge to Re-Size"
            name="entry.877211975"
          ></textarea>
          <p className="text-sm text-red-600  italic"></p>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4">
        <div className="w-1/3">
          <button
            className="shadow bg-black border-2 border-white focus:shadow-outline focus:outline-none hover:border-red-600 text-white font-bold py-2 px-4 rounded lg:ml-4"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default form;

import React from "react";
import Button from "../utils/Button";

const GetInTouch = () => {
  return (
    <div className="mt-6" id="Contact">
      <h1 className="font-bold my-2">Get in Touch</h1>
      <form action="" className="">
        <div className="flex gap-4 flex-col">
          <input
            type="email"
            placeholder="Your email"
            className="border rounded-md border-gray-400 p-2 focus:outline-none mx-4"
          />
          <textarea 
          placeholder="Your message" 
          className="border rounded-md border-gray-400 p-2 focus:outline-none mx-4 h-32"

          />
        </div>
        <div className="py-4 flex justify-end mr-10">
          <Button title="Send message" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;

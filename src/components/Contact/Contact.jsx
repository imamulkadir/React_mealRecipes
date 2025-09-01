import React from "react";

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center ">
        For any questions or suggestions, please email us at{" "}
        <a
          href="mailto:imamulkadiroyan@gmail.com"
          className="font-bold hover:text-amber-400"
        >
          imamulkadiroyan@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;

import React from "react";

const TextAreaField = ({ label, placeholder, id , type , register}) => {
  return (
    <div>
      <label
        className="block text-gray-700 font-semibold mb-2"
        htmlFor="message"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows="4"
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      ></textarea>
    </div>
  );
};

export default TextAreaField;

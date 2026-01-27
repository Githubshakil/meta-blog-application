import React from "react";

const InputField = ({ label, placeholder, id, type }) => {
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;

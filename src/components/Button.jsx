import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

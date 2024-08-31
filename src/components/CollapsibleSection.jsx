import React, { useState } from "react";

export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md">
      <div
        className="bg-red-600 p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleSection}
      >
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}

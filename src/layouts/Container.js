import React from "react";
export default function Container({ children }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-4xl xl:px-0">
      {children}
    </div>
  );
}

import React from "react";

export const DeleteConfirmation = ({ handleClose }) => {
  console.log(handleClose);
  return (
    <>
      Are you sure to delete it?{" "}
      <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Delete
      </button>
      <button
        onClick={() => handleClose()}
        className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
        Cancel
      </button>
    </>
  );
};

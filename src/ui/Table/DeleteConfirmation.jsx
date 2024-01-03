import React from "react";

export const DeleteConfirmation = ({ handleClose, datos, onConfirm }) => {
  return (
    <>
      Are you sure to delete it?{" "}
      <button
        onClick={onConfirm}
        className="bg-red-700 mx-3 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      >
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

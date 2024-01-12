import React, { useContext } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { PaginationContext } from "../../../context/paginationContext";
const Div = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const PaginationTable = () => {
  const { totalPages, firstElement, lastElement, TotalItems } =
    useContext(PaginationContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const NextPage = () => {
    const paginaActual = Number(searchParams.get("actualPage"));

    paginaActual == 0
      ? setSearchParams({ actualPage: paginaActual + 2 })
      : setSearchParams({ actualPage: paginaActual + 1 });

    if (paginaActual === totalPages)
      setSearchParams({ actualPage: totalPages });
  };

  const PreviusPage = () => {
    const paginaActual = Number(searchParams.get("actualPage"));
    if (paginaActual === 1) setSearchParams({ actualPage: 1 });
    if (paginaActual !== 1 && paginaActual)
      setSearchParams({ actualPage: paginaActual - 1 });
  };

  return (
    <>
      <Div>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {firstElement + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {lastElement}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {TotalItems}
          </span>{" "}
          Entries
        </span>

        <div className="flex gap-3 p-3 ">
          <button
            onClick={PreviusPage}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Prev
          </button>
          <button
            onClick={NextPage}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </div>
      </Div>
    </>
  );
};

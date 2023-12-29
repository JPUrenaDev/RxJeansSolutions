import { useSearchParams } from "react-router-dom";
import { ITEMSXPAGE } from "../helpers/itemsXPage";
export const usePagination = (myArray, data, loading) => {
  console.log(data?.length);
  const totalPages = Math.ceil(data?.length / ITEMSXPAGE);
  const TotalItems = data?.length;

  const [searchParams] = useSearchParams();

  const PaginaActual = Number(
    !searchParams.get("actualPage") ? 1 : searchParams.get("actualPage")
  );

  const firstElement = PaginaActual * ITEMSXPAGE - ITEMSXPAGE;
  const lastElement = PaginaActual * ITEMSXPAGE;
  const ArrayPaginado = data?.slice(firstElement, lastElement);

  return {
    PaginaActual,
    firstElement,
    lastElement,
    ArrayPaginado,
    totalPages,
    TotalItems,
  };
};

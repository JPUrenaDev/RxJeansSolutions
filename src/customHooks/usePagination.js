import { useSearchParams } from "react-router-dom";
import { ITEMSXPAGE } from "../helpers/itemsXPage";
export const usePagination = (data, loading) => {
  const totalPages = Math.ceil(data / ITEMSXPAGE);
  const TotalItems = data;

  const [searchParams] = useSearchParams();

  const PaginaActual = Number(
    !searchParams.get("actualPage") ? 1 : searchParams.get("actualPage")
  );

  const firstElement = PaginaActual * ITEMSXPAGE - ITEMSXPAGE;
  const lastElement = PaginaActual * ITEMSXPAGE;

  console.log(firstElement, lastElement, PaginaActual);
  //const ArrayPaginado = data?.slice(firstElement, lastElement);

  return {
    PaginaActual,
    firstElement,
    lastElement,
    totalPages,
    TotalItems,
  };
};

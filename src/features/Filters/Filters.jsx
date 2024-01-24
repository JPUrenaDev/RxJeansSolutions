import React from "react";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";
const options = [
  { value: "chocolsate", label: "Chocolate" },
  { value: "strawsberry", label: "Strawberry" },
  { value: "vanilslas", label: "Vanilla" },
  { value: "chocolsate", label: "Chocolate" },
  { value: "strawsberry", label: "Strawberry" },
  { value: "vanillas", label: "Vanilla" },
  { value: "chocolatse", label: "Chocolate" },
  { value: "strawberrsy", label: "Strawberry" },
  { value: "vanillsa", label: "Vanilla" },
];

export const Filters = ({ data, callback }) => {
  console.log(data);
  const itemsWithLabel = data.map(callback);

  console.log(itemsWithLabel);

  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectFilter = (e) => {
    searchParams.set("categoria", e.value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <div>
          <label>CATEGORIA</label>
          <div className="w-[350px]">
            <Select
              onChange={onSelectFilter}
              name="colors"
              options={itemsWithLabel}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        </div>
      </div>
    </>
  );
};

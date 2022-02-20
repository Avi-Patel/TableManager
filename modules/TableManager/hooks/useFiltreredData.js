import { useMemo } from "react";

export const useFilteredData = ({ data, query }) => {
  const filteredTableData = data.filter((datum) => {
    return Object.values(datum).some((value) => {
      const stringifiedValue = JSON.stringify(value).toLowerCase();
      return stringifiedValue.includes(query.toLowerCase());
    });
  });

  return filteredTableData;
};

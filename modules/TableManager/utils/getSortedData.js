import { SORT } from "../../../constants";

export const getSortedData = ({ data, column }) => {
  if (!column) {
    return data;
  }

  const sortedData = data.sort((datum1, datum2) => {
    const value1 = datum1[column.id].toUpperCase();
    const value2 = datum2[column.id].toUpperCase();
    if (value1 <= value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
    return 0;
  });

  if (column.sortType === SORT.DESC) {
    return sortedData.reverse();
  }

  return sortedData;
};

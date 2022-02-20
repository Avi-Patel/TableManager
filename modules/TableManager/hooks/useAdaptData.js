export const useAdaptData = ({ data }) => {
  if (!data) {
    return data;
  }

  return data.map((datum) => {
    return datum.row.reduce((acc, cell) => {
      acc[cell.id] = cell.value;
      return acc;
    }, {});
  });
};

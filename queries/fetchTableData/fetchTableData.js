import { topicsData } from "./mockData";

const getFilteredData = ({ data, searchQuery }) => {
  const filteredTableData = data.filter((datum) => {
    return datum.row.some((cell) => {
      const stringifiedValue = JSON.stringify(cell.value).toLowerCase();
      return stringifiedValue.includes(searchQuery.toLowerCase());
    });
  });
  return filteredTableData;
};

export const fetchTableData = ({ id, searchQuery, pageNumber, pageSize }) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (id === "topics") {
        const rows = getFilteredData({
          data: topicsData.topics,
          searchQuery,
        });
        const pageRows = rows.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
        res({
          data: { ...topicsData, rows: pageRows, totalCount: rows.length },
        });
      } else {
        rej("error");
      }
    }, 300);
  });
};

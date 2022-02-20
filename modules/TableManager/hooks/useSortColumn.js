import { useMemo, useState, useEffect } from "react";

import { getSortedData } from "../utils/getSortedData";

const getResolvedColumns = ({ columns, sortedColumn }) => {
  if (!sortedColumn) {
    return columns;
  }
  const index = columns.findIndex((col) => col.id === sortedColumn.id);
  const newColumns = [...columns];
  newColumns[index] = sortedColumn;
  return newColumns.map((column, colIndex) => {
    if (colIndex !== index) {
      return { ...column, sortType: undefined };
    }
    return column;
  });
};

export const useColumnSort = ({ rows, columns }) => {
  const [sortedColumn, setSortedColumn] = useState(undefined);

  useEffect(() => {
    const columnWithSortEnabled = columns.find((col) => !!col.sort);
    setSortedColumn(columnWithSortEnabled);
  }, [columns]);

  const sortedData = useMemo(
    () => getSortedData({ data: rows, column: sortedColumn }),
    [rows, sortedColumn]
  );

  const resolvedColumns = useMemo(
    () => getResolvedColumns({ columns, sortedColumn }),
    [columns, sortedColumn]
  );

  return {
    columns: resolvedColumns,
    onColumnSort: setSortedColumn,
    sortedData
  };
};

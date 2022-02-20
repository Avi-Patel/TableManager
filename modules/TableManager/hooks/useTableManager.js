import { useState, useMemo, useEffect } from "react";

import { useFilteredData } from "./useFiltreredData";
import { useTableManagerActions } from "./useTableManagerActions";
import { usePaginatedData } from "./usePaginatedData";
import { useColumnSort } from "./useSortColumn";

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

export const useTableManager = ({ columns, rows, rowsPerPage }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useFilteredData({
    data: rows,
    query: searchQuery
  });

  const { currentPageRows, pageNumber, changePage } = usePaginatedData({
    data: filteredData,
    rowsPerPage
  });

  const { sortedData, columns: resolvedColumns, onColumnSort } = useColumnSort({
    rows: currentPageRows,
    columns
  });

  const { onAction } = useTableManagerActions({
    onSearchQuery: setSearchQuery,
    onSortedColumn: onColumnSort,
    onPageChange: changePage,
    columns: resolvedColumns
  });

  const tableConfig = useMemo(
    () => ({
      rows: sortedData,
      columns: resolvedColumns
    }),
    [resolvedColumns, sortedData]
  );

  const paginationConfig = useMemo(
    () => ({
      pageNumber,
      rowsCount: filteredData.length
    }),
    [pageNumber, filteredData.length]
  );

  return { searchQuery, paginationConfig, tableConfig, onAction };
};

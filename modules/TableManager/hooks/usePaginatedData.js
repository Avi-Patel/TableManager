import { useState, useMemo } from "react";

export const usePaginatedData = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);

  const currentPageRows = useMemo(
    () => data.slice((page - 1) * rowsPerPage, page * rowsPerPage),
    [rowsPerPage, page, data]
  );

  return { currentPageRows, pageNumber: page, changePage: setPage };
};

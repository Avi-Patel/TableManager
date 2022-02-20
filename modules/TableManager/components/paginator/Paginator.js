import { useCallback, useMemo } from "react";

import { PaginationCell } from "./PaginationCell";

import { getPageNumbers } from "./helpers";

import { ACTIONS } from "../../../../constants";

export const Paginator = ({ rowsCount, pageNumber, rowsPerPage, onChange }) => {
  const pageCount =
    Math.floor(rowsCount / rowsPerPage) + (rowsCount % rowsPerPage ? 1 : 0);

  const pageNumbers = useMemo(
    () =>
      getPageNumbers({
        pageCount,
        pageCountToShow: 11,
        activePageNumber: pageNumber
      }),
    [pageNumber, pageCount]
  );

  const hanglePageChange = useCallback(
    (pageNumber) =>
      onChange({ type: ACTIONS.PAGE_CHANGE, payload: { pageNumber } }),
    [onChange]
  );

  return (
    <div
      style={{ marginTop: "12px", display: "flex", justifyContent: "center" }}
    >
      {pageNumbers.map((number) => (
        <PaginationCell
          key={number}
          number={number}
          isActive={number === pageNumber}
          onChange={hanglePageChange}
        />
      ))}
    </div>
  );
};

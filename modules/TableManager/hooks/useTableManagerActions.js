import { useCallback } from "react";

import { ACTIONS, SORT } from "../../../constants";

export const useTableManagerActions = ({
  columns,
  onSortedColumn,
  onSearchQuery,
  onPageChange
}) => {
  const onAction = useCallback(
    ({ type, payload }) => {
      switch (type) {
        case ACTIONS.SEARCH: {
          console.log(payload.value, "payload.value");
          onSearchQuery(payload.value);
          break;
        }
        case ACTIONS.SORT: {
          const columnId = payload.columnId;
          const column = columns.find((column) => column.id === columnId);
          const updatedColumn = { ...column, sortType: payload.sortType };
          onSortedColumn(updatedColumn);
          break;
        }
        case ACTIONS.PAGE_CHANGE: {
          onPageChange(payload.pageNumber);
          break;
        }
        default:
          break;
      }
    },
    [columns, onSortedColumn, onSearchQuery, onPageChange]
  );

  return { onAction };
};

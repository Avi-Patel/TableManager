import { useMemo, useCallback } from "react";
import { useColumnSort } from "./useSortColumn";

import { ACTIONS } from "../../../constants";

export const useTableManager = ({ columns, rows, onAction: _onAction }) => {
  const {
    sortedData,
    columns: resolvedColumns,
    onColumnSort,
  } = useColumnSort({
    rows,
    columns,
  });

  const onAction = useCallback(
    (action) => {
      const { type, payload } = action;
      switch (type) {
        case ACTIONS.SORT: {
          const columnId = payload.columnId;
          const column = columns.find((column) => column.id === columnId);
          const updatedColumn = { ...column, sortType: payload.sortType };
          onColumnSort(updatedColumn);
          break;
        }
        default:
          _onAction(action);
      }
    },
    [columns, onColumnSort]
  );

  const tableConfig = useMemo(
    () => ({
      rows: sortedData,
      columns: resolvedColumns,
    }),
    [resolvedColumns, sortedData]
  );

  return { tableConfig, onAction };
};

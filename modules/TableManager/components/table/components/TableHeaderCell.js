import { useCallback } from "react";
import { ImSortAmountAsc, ImSortAmountDesc } from "react-icons/im";

import { SORT, ACTIONS } from "../../../../../constants";

const findNextSortType = (sortType) => {
  if (!sortType) {
    return SORT.ASCE;
  }
  return sortType === SORT.ASCE ? SORT.DESC : SORT.ASCE;
};

export const TableHeaderCell = ({ column, onAction, style }) => {
  const isSortEnabled = column.sort;
  const sortType = column.sortType;
  const IconComp =
    isSortEnabled &&
    (sortType === SORT.DESC ? ImSortAmountDesc : ImSortAmountAsc);

  const handleSort = useCallback(() => {
    const updatedSortType = findNextSortType(sortType);
    onAction({
      type: ACTIONS.SORT,
      payload: { columnId: column.id, sortType: updatedSortType }
    });
  }, [column.id, onAction, sortType]);

  return (
    <th
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: "0%",
        padding: "4px 0px",
        paddingLeft: "16px",
        paddingRight: "8px",
        ...style
      }}
    >
      <div style={{ flex: 1, textAlign: "left" }}>{column.name}</div>
      {isSortEnabled ? (
        <IconComp
          onClick={handleSort}
          style={{ color: sortType ? "black" : "grey", cursor: "pointer" }}
        />
      ) : null}
    </th>
  );
};

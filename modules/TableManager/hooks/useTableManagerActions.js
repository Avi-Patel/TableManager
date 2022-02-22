import { useCallback, useMemo, useState } from "react";

import { ACTIONS, SORT } from "../../../constants";

export const useTableManagerActions = ({ query = "", currentPage = 1 }) => {
  const [searchQuery, setSearchQuery] = useState(query);
  const [page, setPage] = useState(currentPage);

  const onAction = useCallback(({ type, payload }) => {
    switch (type) {
      case ACTIONS.SEARCH: {
        console.log(payload.value, "payload.value");
        setSearchQuery(payload.value);
        setPage(1);
        break;
      }
      case ACTIONS.PAGE_CHANGE: {
        setPage(payload.pageNumber);
        break;
      }
      default:
        break;
    }
  }, []);

  const requestState = useMemo(
    () => ({
      pageNumber: page,
      searchQuery,
    }),
    [searchQuery, page]
  );

  return { requestState, onAction };
};

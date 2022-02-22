import { useState, useLayoutEffect } from "react";
import { fetchTableData } from "../../queries/fetchTableData";

const cachedData = new Map();
export const PAGE_SIZE = 20;

export const useTableData = ({ tableId, requestState }) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const { searchQuery, pageNumber } = requestState;

  const cacheId = `${tableId}_${searchQuery}_${pageNumber}`;

  useLayoutEffect(() => {
    if (cachedData.has(cacheId)) {
      setState({ data: cachedData.get(cacheId), loading: false, error: false });
      return;
    }
    const fetchPromise = fetchTableData({
      id: tableId,
      searchQuery,
      pageNumber,
      pageSize: PAGE_SIZE,
    });
    setState({ loading: true, data: null, error: false });
    fetchPromise
      .then((tableData) => {
        cachedData.set(cacheId, tableData.data);
        setState({ data: tableData.data, loading: false, error: false });
      })
      .catch((e) => setState({ data: null, loading: false, error: true }));
  }, [tableId, searchQuery, pageNumber]);

  return state;
};

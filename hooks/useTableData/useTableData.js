import { useState, useLayoutEffect } from "react";
import { fetchTableData } from "../../queries/fetchTableData";

const cachedData = new Map();

export const useTableData = ({ tableId }) => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    error: false
  });

  useLayoutEffect(() => {
    if (cachedData.has(tableId)) {
      setState({ data: cachedData.get(tableId), loading: false, error: false });
      return;
    }
    const fetchPromise = fetchTableData({ id: tableId });
    setState({ loading: true, data: null, error: false });
    fetchPromise
      .then((tableData) => {
        cachedData.set(tableId, tableData.data);
        setState({ data: tableData.data, loading: false, error: false });
      })
      .catch((e) => setState({ data: null, loading: false, error: true }));
  }, [tableId]);

  return state;
};

import TableManager from "../modules/TableManager";
import { useTableData } from "../hooks/useTableData";
import { useTableManagerActions } from "../modules/TableManager/hooks/useTableManagerActions";

export default function TopicsTable() {
  const { requestState, onAction } = useTableManagerActions({ query: "" });
  const { data, loading, error } = useTableData({ tableId: "topics", requestState });

  return (
    <TableManager
      error={error}
      loading={loading}
      data={data}
      onAction={onAction}
      requestState={requestState}
    />
  );
}

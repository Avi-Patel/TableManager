import TableManager from "../modules/TableManager";
import { useTableData } from "../hooks/useTableData";

export default function TopicsTable() {
  const { data, loading, error } = useTableData({ tableId: "topics" });

  return (
    <TableManager
      error={error}
      loading={loading}
      data={data}
      rowsPerPage={20}
    />
  );
}

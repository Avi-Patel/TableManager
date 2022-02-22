import { Header } from "./components/header";
import { Table } from "./components/table";
import { Paginator } from "./components/paginator";

import { useAdaptData } from "./hooks/useAdaptData";
import { useTableManager } from "./hooks/useTableManager";

import { PAGE_SIZE } from "../../hooks/useTableData/useTableData";

export const TableManager = ({ data, loading, error, onAction: _onAction, requestState }) => {
  const columns = data?.columns ?? [];
  const rows = data?.rows ?? [];
  const { searchQuery, pageNumber } = requestState;

  const adaptedTableData = useAdaptData({ data: rows });

  const { tableConfig, onAction } = useTableManager({
    columns,
    rows: adaptedTableData,
    onAction: _onAction,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f2f2f2",
        padding: "16px",
        overflowX: "auto",
      }}
    >
      <Header onAction={onAction} searchQuery={searchQuery} />
      <Table loading={loading} error={error} tableConfig={tableConfig} onAction={onAction} />
      {rows.length ? (
        <Paginator
          rowsCount={data.totalCount}
          pageNumber={pageNumber}
          rowsPerPage={PAGE_SIZE}
          onChange={onAction}
        />
      ) : null}
    </div>
  );
};

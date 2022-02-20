import { Header } from "./components/header";
import { Table } from "./components/table";
import { Paginator } from "./components/paginator";

import { useAdaptData } from "./hooks/useAdaptData";
import { useTableManager } from "./hooks/useTableManager";

export const TableManager = ({ data, loading, error, rowsPerPage }) => {
  const columns = data?.columns ?? [];
  const rows = data?.topics ?? [];

  const adaptedTableData = useAdaptData({ data: rows });

  const {
    tableConfig,
    paginationConfig,
    searchQuery,
    onAction
  } = useTableManager({
    columns,
    rows: adaptedTableData,
    rowsPerPage
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
        overflowX: "auto"
      }}
    >
      <Header onAction={onAction} searchQuery={searchQuery} />
      <Table
        loading={loading}
        error={error}
        tableConfig={tableConfig}
        onAction={onAction}
      />
      {rows.length ? (
        <Paginator
          rowsCount={paginationConfig.rowsCount}
          pageNumber={paginationConfig.pageNumber}
          rowsPerPage={rowsPerPage}
          onChange={onAction}
        />
      ) : null}
    </div>
  );
};

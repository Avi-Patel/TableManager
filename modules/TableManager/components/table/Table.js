import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { State } from "../State";

export const Table = ({ tableConfig, loading, error, onAction }) => {
  const columns = tableConfig?.columns;
  const rows = tableConfig?.rows;

  if (loading) {
    return <State label="Loading..." />;
  }
  if (!rows?.length) {
    return <State label="Could not find any data." />;
  }
  if (error) {
    return <State label="Some error occurred. please try again" />;
  }

  return (
    <table
      style={{
        marginTop: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        width: "100%",
        borderSpacing: "0px",
        overflow: "hidden"
      }}
    >
      <TableHeader columns={columns} onAction={onAction} />
      <TableBody columns={columns} rows={rows} />
    </table>
  );
};

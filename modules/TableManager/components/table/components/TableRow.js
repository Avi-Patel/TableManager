import { TableRowCell } from "./TableRowCell";

export const TableRow = ({ row, columns }) => {
  return (
    <tr
      style={{
        display: "flex",
        borderBottom: "1px solid #e0e0e0"
      }}
    >
      {columns.map((column, index) => (
        <TableRowCell
          key={column.id}
          column={column}
          cellValue={row[column.id]}
          style={
            index !== column.length - 1
              ? { borderRight: "1px solid #e0e0e0" }
              : undefined
          }
        />
      ))}
    </tr>
  );
};

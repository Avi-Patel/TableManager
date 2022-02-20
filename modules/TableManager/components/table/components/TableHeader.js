import { TableHeaderCell } from "./TableHeaderCell";

export const TableHeader = ({ columns, onAction }) => {
  return (
    <thead>
      <tr
        style={{
          display: "flex",
          borderBottom: "1px solid #e0e0e0",
          backgroundColor: "#f2f2f2"
        }}
      >
        {columns.map((column, index) => (
          <TableHeaderCell
            key={column.id}
            index={index}
            column={column}
            onAction={onAction}
            style={
              index !== column.length - 1
                ? { borderRight: "1px solid #e0e0e0" }
                : undefined
            }
          />
        ))}
      </tr>
    </thead>
  );
};

import { TableRow } from "./TableRow";

export const TableBody = ({ columns, rows }) => {
  return (
    <tbody>
      {rows.map((row, index) => (
        <TableRow key={index} row={row} columns={columns} />
      ))}
    </tbody>
  );
};

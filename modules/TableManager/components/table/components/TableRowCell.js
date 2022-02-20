export const TableRowCell = ({ column, cellValue, style }) => {
  return (
    <td
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexShrink: 1,
        flexGrow: 1,
        flexBasis: "0%",
        padding: "4px 0px",
        paddingLeft: "16px",
        paddingRight: "8px",
        ...style
      }}
    >
      {cellValue}
    </td>
  );
};

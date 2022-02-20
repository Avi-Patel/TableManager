import { useCallback } from "react";

export const PaginationCell = ({ number, isActive, onChange }) => {
  const hangleClick = useCallback(() => onChange(number), [number, onChange]);

  return (
    <button
      style={{
        backgroundColor: isActive ? "#088dfd" : "#ffffff",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: `1px solid ${isActive ? "#ffffff" : "#e0e0e0"}`,
        color: isActive ? "white" : "black",
        borderRadius: "4px",
        cursor: "pointer"
      }}
      onClick={hangleClick}
    >
      {number}
    </button>
  );
};

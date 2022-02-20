import { useCallback } from "react";

export const SearchBar = ({ value, onChange, className }) => {
  const handleChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      style={{
        width: "300px",
        borderRadius: "4px",
        border: "1px solid #e0e0e0",
        padding: "4px 8px"
      }}
      placeholder="Search here"
    />
  );
};

import { useCallback } from "react";

import { SearchBar } from "../../../../components/searchBar";

import { ACTIONS } from "../../../../constants";

export const Header = ({ onAction, searchQuery }) => {
  const handleSearch = useCallback(
    (newQuery) => {
      onAction({ type: ACTIONS.SEARCH, payload: { value: newQuery } });
    },
    [onAction]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "12px 16px",
        borderRadius: "8px"
      }}
    >
      <SearchBar value={searchQuery} onChange={handleSearch} />
    </div>
  );
};

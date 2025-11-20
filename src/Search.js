import { useRef, useEffect } from "react";
export default function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;
        if (e.code === "Enter") inputEl.current.focus();
        setQuery("");
      }
      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  );
  return (
    <input
      className="search"
      type="text"
      value={query}
      placeholder="search movies"
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}

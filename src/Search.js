export default function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      value={query}
      placeholder="search movies"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

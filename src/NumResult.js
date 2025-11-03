export default function NumResult({ movies }) {
  return (
    <p className="num-results">
      found <strong>{movies.length}</strong> Result
    </p>
  );
}

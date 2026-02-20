import { useAppContext } from "../context/AppContext";

export default function Favorites() {
  const { state, dispatch, favoriteCount } = useAppContext();

  return (
    <div className="page">
      <h1>Your Favorites ({favoriteCount})</h1>

      {state.favorites.length === 0 && <p>No favorites added yet.</p>}

      {state.favorites.map((item) => (
        <div key={item.id}>
          <span>{item.title}</span>
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FAVORITE", payload: item.id })
            }
          >
            ❌ Remove
          </button>
        </div>
      ))}

      {state.favorites.length > 0 && (
        <button onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}>
          🗑️ Clear All
        </button>
      )}
    </div>
  );
}
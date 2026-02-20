import { useAppContext } from "../context/AppContext";

export default function CardComponent({ title, description }) {
  const { dispatch } = useAppContext();

  const addToFavorites = () => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: { id: Date.now(), title },
    });
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <button className="fav-btn" onClick={addToFavorites}>
        ❤️ Add to Favorites
      </button>
    </div>
  );
}
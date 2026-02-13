const CardComponent = ({ title, description }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    padding: "20px",
    margin: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "250px",
  }
};

export default CardComponent;

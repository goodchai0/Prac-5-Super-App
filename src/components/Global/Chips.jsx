const Chips = ({ color, id, setCategories, categories }) => {
  const handleClick = () => {
    const index = categories.indexOf(id);
    categories.splice(index, 1);
    setCategories([...categories]);
  };
  return (
    <div style={{ width: "20vw" }}>
      {categories.map((category) => (
        <button
          style={{
            background: `${color}`,
            borderRadius: "18px",
            width: "120px",
            color: "white",
            border: "none",
            padding: "6px",
            height: "35px",
            flexShrink: 0,
            margin: "10px",

          }}
          onClick={handleClick}
        >
          {category}{" "}
          <span style={{ color: "black", marginLeft: "20px" }}>X</span>
        </button>
      ))}
    </div>
  );
};

export default Chips;

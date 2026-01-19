import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🍽 Welcome to RecipeBox</h1>
      <p>Your social recipe sharing platform</p>

      <Link to="/login">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Login</button>
      </Link>

      <Link to="/signup">
        <button style={{ margin: "10px", padding: "10px 20px" }}>Signup</button>
      </Link>
    </div>
  );
}

export default Home;

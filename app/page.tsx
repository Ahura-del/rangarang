import Blog from "./components/Blog";
import ExhabitionProducts from "./components/ExhabitionProducts";
import Products from "./components/Products";
import QandA from "./components/QandA";

const getBlogs = async () => {
  try {
    const req = await fetch(
      `${process.env.URL ?? "http://localhost:3000"}/api`,
      { method: "GET", headers: { "content-type": "application/json" } }
    );
    const { data } = await req.json();
    return data;
  } catch (error) {
    return { data: error };
  }
};
const Home = async () => {
  const data = await getBlogs();

  return (
    <main>
      <ExhabitionProducts />
      <Products />
      <Blog data={data} />
      <QandA />
    </main>
  );
};

export default Home;

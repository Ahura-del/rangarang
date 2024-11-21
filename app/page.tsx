import Blog from "./design/Blog";
import ExhabitionProducts from "./design/ExhabitionProducts";
import Products from "./design/Products";
import QandA from "./design/QandA";

export default function Home() {
  return (
    <main>
      <ExhabitionProducts />
      <Products />
      <Blog />
      <QandA />
    </main>
  );
}

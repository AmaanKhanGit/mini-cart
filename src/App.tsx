import { useEffect, useState } from "react";
import { CardImage } from "./components/ui/CardImage";
import { getAllProducts } from "./services/getAllProducts";
import type { Products } from "./types/products";

const App = () => {
  

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      console.log(products);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex w-full flex-wrap justify-center gap-3 py-5">
      {products.length === 0 ? (
        <div className="grid w-[80%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4">
          Loading...
        </div>
      ) : (
        <div className="grid w-[80%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4">
          {products.map((product) => (
            <CardImage key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

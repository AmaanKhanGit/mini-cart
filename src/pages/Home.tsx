import { SkeletonCard } from "@/components/layout/SkeletonCard";
import { CardImage } from "@/components/ui/CardImage";
import { useAppSelector } from "@/hooks/useStore";
import { getAllProducts } from "@/services/getAllProducts";
import type { Products } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Products[], Error>({
    queryFn: getAllProducts,
    queryKey: ["products"],
  });

  if (error) {
    console.log(error);
    return <p>Error ....</p>;
  }

  const cartitem = useAppSelector((state) => state.cart);

  return (
    <div className="flex w-full flex-wrap justify-center gap-3 py-5">
      {isLoading ? (
        <div className="grid w-[80%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4">
          {[...Array(20)].map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      ) : (
        <div className="grid w-[80%] grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4">
          {products?.map((product) => (
            <CardImage key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

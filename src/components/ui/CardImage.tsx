import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppDispatch } from "@/hooks/useStore";
import { addToCart } from "@/store/cartSlice";
import type { Products } from "@/types/products";
import { toast } from "./toast";
import { useState } from "react";

export function CardImage({ product }: { product: Products }) {
  const dispatch = useAppDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (): void => {
    setIsAdding(true);
    dispatch(addToCart(product));

    setTimeout(() => {
      setIsAdding(false);
      toast.add({
        type: "success",
        description: "Added to cart!",
      });
    }, 3000);
  };

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={product.image}
        alt={product.title}
        className="aspect-video w-full object-contain"
      />
      <CardHeader className="min-h-37">
        <CardAction>
          <Badge variant="secondary">{product.price} $</Badge>
        </CardAction>
        <CardTitle>
          {product.title.length > 20
            ? product.title.slice(0, 20) + "..."
            : product.title}
        </CardTitle>
        <CardDescription>
          {product.description.length > 170
            ? product.description.slice(0, 170) + "..."
            : product.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          disabled={isAdding}
          onClick={handleAddToCart}
          variant="default"
          className="w-full disabled:cursor-none"
        >
          {isAdding ? "Adding..." : "Add to cart"}
        </Button>
      </CardFooter>
    </Card>
  );
}

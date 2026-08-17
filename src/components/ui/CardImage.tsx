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
import type { Products } from "@/types/products";

export function CardImage({ product }: { product: Products }) {
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
        <Button variant="default" className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

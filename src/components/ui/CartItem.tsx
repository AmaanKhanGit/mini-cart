import { Card, CardContent } from "./card";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItemType } from "@/types/cart";
import { Button } from "./button";
import { useAppDispatch } from "@/hooks/useStore";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/store/cartSlice";
import { toast } from "./toast";

const CartItem = ({ item }: { item: CartItemType }) => {
  const dispatch = useAppDispatch();
  return (
    <Card key={item.id}>
      <CardContent className="flex items-center gap-4 p-4">
        <img
          src={item.image}
          alt={item.name}
          className="bg-muted h-20 w-20 rounded-md object-cover"
        />

        <div className="flex-1 space-y-1">
          <h3 className="text-foreground font-medium">{item.name}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
          <p className="text-foreground text-sm font-medium">
            ${item.price.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            variant="outline"
            size="icon"
            className="h-7 w-7"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-6 text-center text-sm">{item.quantity}</span>
          <Button
            onClick={() => dispatch(increaseQuantity(item.id))}
            variant="outline"
            size="icon"
            className="h-7 w-7"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex flex-col items-end gap-2">
          <span className="text-foreground font-semibold">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          <Button
            onClick={() => {
              dispatch(removeFromCart(item.id));
              toast.add({
                type: "error",
                description: "Removed from cart",
              });
            }}
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-destructive h-7 w-7"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartItem;

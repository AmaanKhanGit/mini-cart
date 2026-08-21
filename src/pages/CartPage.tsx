import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/ui/CartItem";
import type { CartItemType } from "@/types/cart";
import CartSumary from "@/components/ui/CartSumary";
import { useAppSelector } from "@/hooks/useStore";
import { useNavigate } from "react-router-dom";

function getSubtotal(items: CartItemType[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export default function CartPage() {
  const navigate = useNavigate();

  const { items } = useAppSelector((state) => state.cart);
  const subtotal: number = getSubtotal(items);
  const shipping: number = subtotal > 0 ? 5.0 : 0;
  const total: number = subtotal + shipping;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-foreground mb-6 text-2xl font-semibold">Your Cart</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
          <ShoppingBag className="text-muted-foreground h-10 w-10" />
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Button onClick={() => navigate("/")}>Continue Shopping</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart items list */}
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Order summary */}
          <div>
            <CartSumary total={total} shipping={shipping} subtotal={subtotal} />
          </div>
        </div>
      )}
    </div>
  );
}

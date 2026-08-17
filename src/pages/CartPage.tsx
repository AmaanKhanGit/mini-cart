// pages/cart-page.tsx
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/ui/CartItem";
import type { CartItemType } from "@/types/cart";
import CartSumary from "@/components/ui/CartSumary";
import { useAppSelector } from "@/hooks/useStore";

// const mockCartItems: CartItemType[] = [
//   {
//     id: "1",
//     name: "Wireless Headphones",
//     description: "Over-ear, noise cancelling",
//     price: 89.99,
//     quantity: 5,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: "2",
//     name: "Canvas Backpack",
//     description: "Water-resistant, 20L",
//     price: 54.5,
//     quantity: 2,
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: "3",
//     name: "Ceramic Mug",
//     description: "350ml, matte finish",
//     price: 12.0,
//     quantity: 3,
//     image: "https://via.placeholder.com/100",
//   },
// ];

function getSubtotal(items: CartItemType[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export default function CartPage() {
  // const items = mockCartItems;

  const { items } = useAppSelector((state) => state.cart);
  const subtotal = getSubtotal(items);
  const shipping = subtotal > 0 ? 5.0 : 0;
  const total = subtotal + shipping;

  console.log(items);

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-foreground mb-6 text-2xl font-semibold">Your Cart</h1>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
          <ShoppingBag className="text-muted-foreground h-10 w-10" />
          <p className="text-muted-foreground">Your cart is empty.</p>
          <Button>Continue Shopping</Button>
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

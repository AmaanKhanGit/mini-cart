import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Separator } from "./separator";

const CartSumary = ({
  total,
  shipping,
  subtotal,
}: {
  total: number;
  shipping: number;
  subtotal: number;
}) => {
  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <h2 className="text-foreground font-semibold">Order Summary</h2>

        <div className="space-y-2 text-sm">
          <div className="text-muted-foreground flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="text-muted-foreground flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className="text-foreground flex justify-between font-semibold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button className="w-full">Checkout</Button>
      </CardContent>
    </Card>
  );
};

export default CartSumary;

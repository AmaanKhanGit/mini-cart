export async function getAllProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data.map(
    (item: {
      id: number;
      title: string;
      description: string;
      image: any;
      price: number;
    }) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: item.image,
      price: item.price,
    }),
  );
}

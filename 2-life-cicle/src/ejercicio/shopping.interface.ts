export interface shoppingInterface {
  id: number;
  name: string;
  price: number;
}

export interface cartInterface extends shoppingInterface {
  quantity: number;
}

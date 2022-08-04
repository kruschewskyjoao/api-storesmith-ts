export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Order {
  id: number,
  userId: number,
  productsIds: Array<number>,
}

export interface Login {
  id?: number,
  username: string,
  password: string,
}

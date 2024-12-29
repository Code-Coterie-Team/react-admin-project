interface IAllProductsResponse {
  id: string;
  image: string;
  name: string;
  category: string;
  price: number;
  stocks: number;
  sales: string;
}

interface IAllUsersResponse {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

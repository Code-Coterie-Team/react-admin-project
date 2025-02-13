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
interface IPanelAnalytic {
  icon: ReactNode;
  bgIcon:string;
  title: string;
  amount: number;
  type: string;
  icomMountLastPeriod: ReactNode;
  lastPeriod: string;
  amountLastPeriod: number;
  typeLastPeriod: string;
}
interface IPanelProps {
  icon: ReactNode;
  title: string;
  amount: number;
  type: "persent" | "asset" | "";
}
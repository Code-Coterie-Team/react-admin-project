import { ReactNode } from "react";
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
  bgIcon: string;
  title: string;
  amount: number;
  type: string;
  icomMountLastPeriod: ReactNode;
  lastPeriod: string;
  amountLastPeriod: number;
  typeLastPeriod: string;
}
interface IPanels {
  icon: ReactNode;
  title: string;
  amount: number;
  type: string;
}
interface IPanelPages {
  panels: IPanels[];
}
interface IChartFrameworks {
  title: string;
  nameChart: ReactNode;
}
interface IChartFrameworksArray {
  charts: IChartFrameworks[];
}

interface IButtonSetting {
  titelButton: string;
}
interface IItemNotifications {
  title: string;
  state: ReactNode;
}
interface IListNotifications {
  itemNotification: IItemNotifications[];
}

interface InitialState {
  initialState: boolean;
}
interface ItemConnectAccounts {
  srcimg: string;
  altimg: string;
  titleAccount: string;
  initialState: boolean;
}
interface IListConnectAccounts {
  itemAccount: ItemConnectAccounts[];
}

interface ITitlePart {
  iconTitlePart: ReactNode;
  titlePart: string;
}

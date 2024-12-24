import { ReactNode } from "react";

interface IPanelAnalytic {
  icon: ReactNode;
  title: string;
  amount: number;
  type: "persent" | "aset" | "";
  icomMountLastPeriod: ReactNode;
  mountLastPeriod: string;
}
function PanelAnalytics() {
  return <div></div>;
}

export default PanelAnalytics;

import { IPanelPages } from "../types/api";

function Panel({ panels }: IPanelPages) {
  return (
    <div className="grid grid-cols-4 gap-3 pb-8">
      {panels.map((item) => (
        <div
          className="totalSales bg-menuBody p-5 rounded-lg border-bmenuBody border 
border-solid hover:shadow-itemMenuOverview hover:-translate-y-1"
        >
          <div className="flex items-center font-medium text-gray-400 text-sm">
            {item.icon}
            <span className="ml-1">{item.title}</span>
          </div>
          <p className="font-bold text-3xl pt-1">
            {item.type === "asset" ? "$" : ""}
            {item.amount} {item.type === "persent" ? "%" : ""}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Panel;

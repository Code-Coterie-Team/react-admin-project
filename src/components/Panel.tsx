function Panel(props: IPanelProps) {
  return (
    <div
      className="totalSales bg-menuBody p-5 rounded-lg border-bmenuBody border 
      border-solid hover:shadow-itemMenuOverview hover:-translate-y-1"
    >
      <div className="flex items-center font-medium text-gray-400 text-sm">
        {props.icon}
        <span className="ml-1">{props.title}</span>
      </div>
      <p className="font-bold text-3xl pt-1">
        {props.type === "asset" ? "$" : ""}
        {props.amount} {props.type === "persent" ? "%" : ""}
      </p>
    </div>
  );
}

export default Panel;

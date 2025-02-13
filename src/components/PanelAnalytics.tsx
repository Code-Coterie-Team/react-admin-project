function PanelAnalytics(props: IPanelAnalytic) {
  return (
    <div className=" bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid hover:shadow-itemMenuOverview hover:translate-y-[-5px]">
      <div className="headerPanelAnalytics flex justify-between">
        <div className="title flex flex-col">
          <h3 className="text-sm font-medium text-gray-400">{props.title}</h3>
          <p className="mt-1 text-xl font-semibold text-gray-100">
            {props.amount}
          </p>
        </div>

        <div
          className={`iconTitle bg-opacity-20 rounded-full p-3 ${
            props.bgIcon == "green" ? "bg-green-500 " : "bg-red-500 "
          }`}
        >
          {props.icon}
        </div>
      </div>
      <div className="footerPanelAnalytics flex flex-row gap-2 items-center pt-4">
        {props.icomMountLastPeriod}
        <span
          className={`text-sm font-medium ${
            props.bgIcon == "green" ? "text-green-500 " : "text-red-500 "
          }`}
        >
          {props.amountLastPeriod}%
        </span>
        <span className="text-sm text-gray-400">{props.lastPeriod}</span>
      </div>
    </div>
  );
}

export default PanelAnalytics;

import { IChartFrameworksArray } from "../types/types";

function ChartFramework({ charts }: IChartFrameworksArray) {
  return (
    <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {charts.map((item, index) => (
        <div
          key={index}
          className="bg-menuBody p-5 rounded-lg border-bmenuBody border border-solid "
        >
          <h2 className="text-lg font-medium pb-4 text-gray-100">
            {item.title}
          </h2>
          {item.nameChart}
        </div>
      ))}
    </div>
  );
}

export default ChartFramework;
